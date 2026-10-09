import Link from "next/link";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-paper/50">Zacznijmy rozmowę</p>
            <h2 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
              Opowiedz
              <br />o swoim wnętrzu.
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <p className="eyebrow text-paper/50">Nawigacja</p>
              <ul className="mt-5 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-paper/80 hover:text-clay-soft transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-paper/50">Kontakt</p>
              <ul className="mt-5 space-y-2.5 text-paper/80">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-clay-soft transition-colors"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="hover:text-clay-soft transition-colors"
                  >
                    {site.phone}
                  </a>
                </li>
                <li className="leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.postal} {site.address.city}
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-paper/50">Social</p>
              <ul className="mt-5 space-y-2.5">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-paper/80 hover:text-clay-soft inline-flex items-center gap-2 transition-colors"
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
        </div>
      </div>
    </footer>
  );
}
