"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "consent", string>>;

type Status = "idle" | "sending" | "ok" | "error";

/**
 * A static export has no server to receive the POST, so the form cannot post to
 * our own domain. Point NEXT_PUBLIC_CONTACT_ENDPOINT at a form backend
 * (Formspree, Web3Forms, Basin, your own function) and the form will submit
 * there directly. With no endpoint configured it falls back to opening the
 * visitor's mail client with everything prefilled — no backend, no signup.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();

const budgets = [
  "do 50 tys. zł",
  "50–100 tys. zł",
  "100–200 tys. zł",
  "200–400 tys. zł",
  "powyżej 400 tys. zł",
  "jeszcze nie wiem",
];

const scopes = [
  "Mieszkanie",
  "Dom",
  "Biuro",
  "Lokal usługowy",
  "Inwestor deweloperski",
  "Inne",
];

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const consent = fd.get("consent");

    if (name.length < 2) e.name = "Podaj imię i nazwisko.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      e.email = "Podaj poprawny adres e-mail.";
    if (phone && phone.replace(/\D/g, "").length < 9)
      e.phone = "Numer telefonu wygląda na niepełny.";
    if (message.length < 20)
      e.message = "Opisz krótko wnętrze — minimum 20 znaków.";
    if (!consent) e.consent = "Bez zgody nie możemy odpowiedzieć.";

    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("idle");
      return;
    }

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    // No backend configured — hand the visitor a prefilled email instead.
    if (!ENDPOINT) {
      const body = [
        `Imię: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${String(fd.get("phone") ?? "").trim() || "—"}`,
        `Rodzaj projektu: ${String(fd.get("scope") ?? "")}`,
        `Metraż: ${String(fd.get("area") ?? "").trim() || "—"}`,
        `Budżet: ${String(fd.get("budget") ?? "")}`,
        "",
        message,
      ].join("\n");

      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Zapytanie o projekt — ${name}`,
      )}&body=${encodeURIComponent(body)}`;

      setStatus("ok");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: String(fd.get("phone") ?? "").trim(),
          scope: String(fd.get("scope") ?? ""),
          budget: String(fd.get("budget") ?? ""),
          area: String(fd.get("area") ?? "").trim(),
          message,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border-line bg-paper-2 flex min-h-96 flex-col justify-center border p-10 text-center">
        <p className="eyebrow">Dziękujemy</p>
        <p className="mt-5 font-display text-3xl leading-tight md:text-4xl">
          {ENDPOINT ? "Wiadomość jest u nas." : "Otwarto Twojego klienta poczty."}
        </p>
        <p className="text-muted mx-auto mt-4 max-w-md leading-relaxed">
          {ENDPOINT ? (
            <>
              Odpowiadamy w ciągu jednego dnia roboczego. Jeśli sprawa jest
              pilna — zadzwoń:{" "}
              <a href={`tel:${site.phoneHref}`} className="text-ink underline">
                {site.phone}
              </a>
            </>
          ) : (
            <>
              Nie udostępniliśmy jeszcze usługi formularzy, więc wiadomość
              trafiła do Twojego programu pocztowego. Jeśli się nie otworzyła,
              napisz na{" "}
              <a href={`mailto:${site.email}`} className="text-ink underline">
                {site.email}
              </a>
              .
            </>
          )}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="border-line mx-auto mt-8 rounded-full border px-6 py-3 text-sm transition-colors hover:border-ink"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  const base =
    "w-full border border-line bg-white px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-ink";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Imię i nazwisko" error={errors.name} required>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Anna Kowalska"
            className={base}
          />
        </Field>

        <Field label="E-mail" error={errors.email} required>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="ty@przyklad.pl"
            className={base}
          />
        </Field>

        <Field label="Telefon" error={errors.phone} hint="opcjonalnie">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+48 600 000 000"
            className={base}
          />
        </Field>

        <Field label="Metraż wnętrza" hint="opcjonalnie">
          <input
            name="area"
            type="text"
            placeholder="np. 68 m²"
            className={base}
          />
        </Field>

        <Field label="Rodzaj projektu">
          <select name="scope" className={base} defaultValue="Mieszkanie">
            {scopes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Budżet wykończenia" hint="szacunek">
          <select name="budget" className={base} defaultValue="jeszcze nie wiem">
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Opisz wnętrze" error={errors.message} required>
        <textarea
          name="message"
          rows={6}
          placeholder="Metraż, układ, styl, co ma się zmienić, kiedy chcielibyście zacząć…"
          className={`${base} resize-y`}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input
            name="consent"
            type="checkbox"
            className="border-line mt-0.5 h-4 w-4 shrink-0 accent-ink"
          />
          <span className="text-muted leading-relaxed">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
            przygotowania odpowiedzi na zapytanie, zgodnie z{" "}
            <a href="/kontakt#klauzula" className="underline">
              klauzulą informacyjną
            </a>
            .
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-sm text-clay">{errors.consent}</p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-clay text-sm">
          Nie udało się wysłać wiadomości. Spróbuj ponownie albo napisz
          bezpośrednio na{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink text-paper hover:bg-clay w-full rounded-full px-8 py-4 text-sm transition-colors disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wysyłanie…" : "Wyślij zapytanie"}
      </button>

      <p className="text-muted text-xs leading-relaxed">
        Pola oznaczone * są wymagane. Nie wysyłamy newslettera ani ofert
        marketingowych — tylko odpowiedź na to, o co pytasz.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
  error,
  hint,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline gap-2 text-sm">
        {label}
        {required ? <span className="text-clay">*</span> : null}
        {hint ? <span className="text-muted text-xs">{hint}</span> : null}
      </span>
      {children}
      {error ? <span className="text-clay mt-1.5 block text-xs">{error}</span> : null}
    </label>
  );
}