import { NextResponse } from "next/server";

import { verifyTurnstileToken } from "@/lib/turnstile";

const FORM_ACTION =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/691ed803-e265-4cab-bc07-a0d7c65aa70f";

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  turnstileToken?: unknown;
};

const isNonEmptyString = (value: unknown, min: number) =>
  typeof value === "string" && value.trim().length >= min;

function isValidUsPhone(value: unknown): boolean {
  if (typeof value !== "string") return false;
  const digits = value.replace(/\D/g, "");
  const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return national.length === 10;
}

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip");
}

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message, turnstileToken } = payload;

  const captchaOk =
    typeof turnstileToken === "string" &&
    (await verifyTurnstileToken(turnstileToken, clientIp(request)));

  if (!captchaOk) {
    return NextResponse.json(
      { error: "Please complete the verification and try again." },
      { status: 403 },
    );
  }

  const valid =
    isNonEmptyString(name, 2) &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()) &&
    isValidUsPhone(phone) &&
    (message === undefined || typeof message === "string");

  if (!valid) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 422 });
  }

  const form = new FormData();
  form.set("name", String(name).trim());
  form.set("email", String(email).trim());
  form.set("phone", typeof phone === "string" ? phone.trim() : "");
  form.set("message", typeof message === "string" ? message.trim() : "");

  try {
    const submitted = await fetch(FORM_ACTION, {
      method: "POST",
      body: form,
    });

    if (!submitted.ok) {
      return NextResponse.json(
        { error: "Something went wrong. Try again, or call us." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Try again, or call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
