"use client";

import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
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

function validate(fields: Fields): Errors {
  const errors: Errors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Please tell us your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  const digits = fields.phone.replace(/\D/g, "");
  if (fields.phone.trim() && (digits.length < 10 || digits.length > 15)) {
    errors.phone = "Please enter a phone number with at least 10 digits, or leave it blank.";
  }

  if (fields.message.trim().length < 10) {
    errors.message = "A few details about your dog help us reply.";
  }

  return errors;
}

export function ContactForm() {
  const formId = useId();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const update =
    (key: keyof Fields) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
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

      setStatus("sent");
      setFields(emptyFields);
    } catch {
      setStatus("error");
    }
  };

  const fieldClasses = (invalid: boolean) =>
    cn(
      "w-full rounded-xl border bg-white px-4 py-3 text-base text-charcoal shadow-soft transition-colors duration-200 placeholder:text-charcoal/40",
      invalid ? "border-red-600" : "border-gold/30 hover:border-gold/60 focus:border-forest",
    );

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-gold/40 bg-white p-8 shadow-soft"
      >
        <CheckCircle2 className="h-9 w-9 text-forest" aria-hidden="true" strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-semibold text-deep">Got it — thanks</h3>
        <p className="text-charcoal/75">
          We usually get back within one business day. If you need us sooner, give us a call.
        </p>
        <Button type="button" variant="greenOutline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-[18px] font-medium text-deep">
            Your name <span className="text-red-700">*</span>
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
            placeholder="Jamie Whitfield"
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
            Email <span className="text-red-700">*</span>
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
          Phone <span className="font-normal text-charcoal/50">(optional)</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
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
          How can we help? <span className="text-red-700">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
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
