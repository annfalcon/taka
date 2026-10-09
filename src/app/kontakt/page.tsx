import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Skontaktuj się z pracownią architektury wnętrz TAKA w ${site.city}. Telefon, e-mail i adres.`,
};

const rows = [
  { label: "Telefon", value: site.phone, href: `tel:${site.phoneHref}` },
  { label: "E-mail", value: site.email, href: `mailto:${site.email}` },
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
      />

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="flex flex-col gap-16 md:flex-row">
            {/* Dane */}
            <aside className="md:col-span-6 md:col-start-4">
              <Reveal delay={120}>
                <p className="eyebrow">Dane kontaktowe</p>
                <dl className="mt-6">
                  {rows.map((r) => (
                    <div key={r.label} className="border-line flex flex-col ">
                      <dd className="text-lg">
                        {r.href ? (
                          <a
                            href={r.href}
                            className="hover:text-clay transition-colors"
                          >
                            {r.value}
                          </a>
                        ) : (
                          r.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </aside>
            <aside className="md:col-span-6 md:col-start-4">
              <div className="">
                <dt className="eyebrow">Adres</dt>
                <dd className="mt-6 leading-relaxed">
                  {site.fullName}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.postal} {site.address.city}
                </dd>
              </div>
            </aside>
          </div>
          <div>
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
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section
        aria-label="Mapa dojazdu"
        className="relative h-80 bg-paper-2 md:h-[26rem]"
      >
        <iframe
          title="Mapa — lokalizacja pracowni"
          src="https://www.openstreetmap.org/export/embed.html?bbox=18.5360%2C54.3988%2C18.5760%2C54.4188&layer=mapnik&marker=54.4088%2C18.5560"
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0, filter: "grayscale(1) contrast(0.9)" }}
        />
        <p className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-paper px-4 py-2 text-xs">
          Mapa poglądowa — podmień na własną (np. Google Maps embed)
        </p>
      </section>
    </>
  );
}
