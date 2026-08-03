"use client";

import { useRouter } from "next/navigation";
import { Loader2, Send, TriangleAlert } from "lucide-react";
import { useId, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const emptyFields: Fields = { name: "", email: "", phone: "", message: "" };

/** Keep digits only; allow optional leading US country code 1. */
function usPhoneDigits(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

/** Format as (XXX) XXX-XXXX while typing. */
function formatUsPhone(value: string): string {
  const digits = usPhoneDigits(value).slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidUsPhone(value: string): boolean {
  return usPhoneDigits(value).length === 10;
}

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Please tell us your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!isValidUsPhone(fields.phone)) {
    errors.phone = "Please enter a valid U.S. phone number, like (269) 555-0134.";
  }

  return errors;
}

export function ContactForm() {
  const router = useRouter();
  const formId = useId();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const update =
    (key: keyof Fields) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = key === "phone" ? formatUsPhone(event.target.value) : event.target.value;
      setFields((current) => ({ ...current, [key]: value }));
      setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`${formId}-${firstKey}`)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!response.ok) throw new Error("Request failed");

      router.push("/contact-us/thank-you");
    } catch {
      setStatus("error");
    }
  };

  const fieldClasses = (invalid: boolean) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3 text-base text-charcoal shadow-soft transition-colors duration-200 placeholder:text-charcoal/40",
      invalid ? "border-red-600" : "border-gold/30 hover:border-gold/60 focus:border-forest",
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-[18px] font-medium text-deep">
            Your name{" "}
            <span className="font-semibold text-red-600" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={fields.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={cn("mt-2", fieldClasses(Boolean(errors.name)))}
            placeholder="John Smith"
          />
          {errors.name ? (
            <p id={`${formId}-name-error`} className="mt-2 flex items-center gap-2 text-[18px] text-red-700">
              <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="block text-[18px] font-medium text-deep">
            Email{" "}
            <span className="font-semibold text-red-600" aria-hidden="true">
              *
            </span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={cn("mt-2", fieldClasses(Boolean(errors.email)))}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <p id={`${formId}-email-error`} className="mt-2 flex items-center gap-2 text-[18px] text-red-700">
              <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-phone`} className="block text-[18px] font-medium text-deep">
          Phone{" "}
          <span className="font-semibold text-red-600" aria-hidden="true">
            *
          </span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          required
          value={fields.phone}
          onChange={update("phone")}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
          className={cn("mt-2", fieldClasses(Boolean(errors.phone)))}
          placeholder="(269) 555-0134"
        />
        {errors.phone ? (
          <p id={`${formId}-phone-error`} className="mt-2 flex items-center gap-2 text-[18px] text-red-700">
            <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="block text-[18px] font-medium text-deep">
          How can we help?
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={fields.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={cn("mt-2 resize-y", fieldClasses(Boolean(errors.message)))}
          placeholder="Breed, what you need, and anything we should know about your dog."
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-2 flex items-center gap-2 text-[18px] text-red-700">
            <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
            {errors.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 p-4 text-[18px] text-red-800">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong. Try again, or call us.
        </p>
      ) : null}

      <div className="pt-2">
        <Button type="submit" variant="green" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
