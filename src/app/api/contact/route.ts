import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  scope?: string;
  budget?: string;
  area?: string;
  message?: string;
  honeypot?: string;
};

const MAX_LEN = 4000;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Nieprawidłowy format zapytania." },
      { status: 400 },
    );
  }

  // Honeypot: bot wypełni ukryte pole. Cisza, bez informacji zwrotnej.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2 || name.length > MAX_LEN) {
    return NextResponse.json(
      { ok: false, error: "Imię i nazwisko są wymagane." },
      { status: 422 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > MAX_LEN) {
    return NextResponse.json(
      { ok: false, error: "Podaj poprawny adres e-mail." },
      { status: 422 },
    );
  }

  if (message.length < 20 || message.length > MAX_LEN) {
    return NextResponse.json(
      { ok: false, error: "Opisz wnętrze — minimum 20 znaków." },
      { status: 422 },
    );
  }

  const lead = {
    name,
    email,
    phone: (body.phone ?? "").trim(),
    scope: (body.scope ?? "").trim(),
    budget: (body.budget ?? "").trim(),
    area: (body.area ?? "").trim(),
    message,
    receivedAt: new Date().toISOString(),
  };

  // TODO: podpiąć dostarczanie wiadomości (np. Resend / SMTP).
  // Dane są zwalidowane i gotowe do wysłania — brakuje tylko kanału.
  console.info("[kontakt] nowe zapytanie", JSON.stringify(lead));

  return NextResponse.json({
    ok: true,
    note: `Zapytanie zapisane. W wersji produkcyjnej wysyłane na ${site.email}.`,
  });
}