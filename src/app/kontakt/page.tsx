import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Skontaktuj się z pracownią architektury wnętrz TAKA w ${site.city}. Telefon, e-mail, adres i formularz zapytania o projekt.`,
};

const rows = [
  { label: "Telefon", value: site.phone, href: `tel:${site.phoneHref}` },
  { label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { label: "Godziny", value: site.hours },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.postal} ${site.address.city}`,
  );

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Napisz do nas"
        intro="Opisz wnętrze w kilku zdaniach — metraż, układ, budżet, termin. Odpowiadamy w ciągu jednego dnia roboczego, a wycenę wysyłamy w pięć dni roboczych."
        meta={[site.hours, "Odpowiedź do 24 h", "Wycena w 5 dni"]}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="grid gap-16 md:grid-cols-12">
            {/* Formularz */}
            <div className="md:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* Dane */}
            <aside className="md:col-span-4 md:col-start-9">
              <Reveal delay={120}>
                <p className="eyebrow">Dane kontaktowe</p>
                <dl className="mt-6">
                  {rows.map((r) => (
                    <div
                      key={r.label}
                      className="border-line flex flex-col gap-1 border-b py-4"
                    >
                      <dt className="text-muted text-xs">{r.label}</dt>
                      <dd className="text-lg">
                        {r.href ? (
                          <a href={r.href} className="hover:text-clay transition-colors">
                            {r.value}
                          </a>
                        ) : (
                          r.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="border-line mt-10 border-b pb-4">
                  <dt className="text-muted text-xs">Adres</dt>
                  <dd className="mt-2 leading-relaxed">
                    {site.fullName}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.postal} {site.address.city}
                    <br />
                    <span className="text-muted text-sm">NIP {site.nip}</span>
                  </dd>
                </div>

                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {site.social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-muted hover:text-ink inline-flex items-center gap-1.5 text-sm transition-colors"
                      >
                        {s.label}
                        <span className="text-[0.6rem] opacity-50" aria-hidden>
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-line hover:border-ink mt-10 block rounded-full border px-6 py-3.5 text-center text-sm transition-colors"
                >
                  Wyznacz trasę
                </a>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section aria-label="Mapa dojazdu" className="relative h-80 bg-paper-2 md:h-[26rem]">
        <iframe
          title="Mapa — lokalizacja pracowni"
          src="https://www.openstreetmap.org/export/embed.html?bbox=21.005%2C52.225%2C21.045%2C52.245&layer=mapnik&marker=52.235%2C21.025"
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0, filter: "grayscale(1) contrast(0.9)" }}
        />
        <p className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-paper px-4 py-2 text-xs">
          Mapa poglądowa — podmień na własną (np. Google Maps embed)
        </p>
      </section>

      {/* Klauzula */}
      <section id="klauzula" className="bg-paper-2 py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Dane osobowe</p>
              <h2 className="mt-4 text-2xl leading-tight">Klauzula informacyjna</h2>
            </div>
            <div className="text-muted space-y-4 text-sm leading-relaxed md:col-span-8">
              <p>
                Administratorem danych osobowych przesyłanych przez formularz
                jest {site.fullName}, {site.address.street}, {site.address.postal}{" "}
                {site.address.city}, NIP {site.nip}.
              </p>
              <p>
                Dane przetwarzamy wyłącznie w celu przygotowania odpowiedzi na
                zapytanie i prowadzenia korespondencji związanej z projektem.
                Podstawa prawna: art. 6 ust. 1 lit. b RODO (działania przed
                zawarciem umowy) oraz art. 6 ust. 1 lit. a (dobrowolnie
                wyrażona zgoda).
              </p>
              <p>
                Dane przechowujemy przez okres prowadzenia korespondencji i
                przez maksymalnie 5 lat po jej zakończeniu, a w zakresie
                dokumentacji projektowej — przez okres wynikający z przepisów
                prawa budowlanego. Dane nie są przekazywane poza obszar UE bez
                stosowania odpowiednich zabezpieczeń.
              </p>
              <p>
                Masz prawo dostępu do swoich danych, ich sprostowania,
                usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu,
                a także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
                Osobowych. Wycofanie zgody jest możliwe w dowolnym momencie,
                bez wpływu na zgodność z prawem przetwarzania sprzed jej
                cofnięcia.
              </p>
              <p className="text-xs">
                Uzupełnij brakujące dane administratora, okresy retencji i
                wpis organu nadzorczego przed publikacją strony.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}