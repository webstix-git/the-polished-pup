import { NextResponse } from "next/server";

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

const isNonEmptyString = (value: unknown, min: number) =>
  typeof value === "string" && value.trim().length >= min;

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = payload;

  const valid =
    isNonEmptyString(name, 2) &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()) &&
    isNonEmptyString(message, 10) &&
    (phone === undefined || typeof phone === "string");

  if (!valid) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 422 });
  }

  // TODO: connect an email provider (Resend, SendGrid, Postmark) or a CRM here.
  // Until then the enquiry is logged so nothing is silently dropped in development.
  console.info("[contact] new enquiry", {
    name: String(name).trim(),
    email: String(email).trim(),
    phone: typeof phone === "string" ? phone.trim() : "",
    message: String(message).trim(),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
