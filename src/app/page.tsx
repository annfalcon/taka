import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { process, reviews, services, site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Manifest + liczby */}
      <section className="container-x pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{site.tagline}</p>
              <p className="mt-6 font-display text-3xl leading-[1.25] md:text-[2.75rem]">
                {site.claim}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={120}>
              <p className="text-muted leading-relaxed">
                Projektujemy wnętrza w Warszawie, Gdańsku i okolicach. Pracujemy
                z ludźmi, którym zależy na proporcjach, świetle i spokoju — a
                nie na efektownych zdjęcia. Każdy projekt prowadzimy od
                pierwszej rozmowy do momentu, w którym w nim mieszkasz.
              </p>
              <Link
                href="/o-nas"
                className="group border-ink/25 text-ink hover:border-clay mt-8 inline-flex items-center gap-3 border-b pb-1 text-sm transition-colors"
              >
                Poznaj pracownię
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Wybrane realizacje */}
      <section className="bg-paper-2 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Portfolio"
            title="Wybrane realizacje"
            intro="Nie wszystko, nad czym pracowaliśmy — tylko to, co możemy pokazać."
            action={{ label: "Całe portfolio", href: "/portfolio" }}
          />
          <div className="mt-16">
            <PortfolioGallery showFilters={false} limit={6} />
          </div>
        </div>
      </section>

      {/* Zakres usług */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Zakres"
            title="Co robimy"
            intro="Od układu funkcjonalnego po kompleksowy projekt wykonawczy ze specyfikacją materiałową lub realizacja wybranego etapu inwestycji."
          />
          <ul className="mt-16 grid gap-px bg-line sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 70}
                className="group bg-paper p-8 transition-colors duration-500 hover:bg-white md:p-12"
              >
                <p className="text-muted text-xs tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl leading-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-muted mt-4 leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Proces — obraz + kroki */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="container-x">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <SectionHeading
                  eyebrow="Proces"
                  title="Jak pracujemy"
                  intro="Pięć etapów, tyle samo obietnic. Zawsze wiesz, w którym jesteś i co dalej."
                  tone="dark"
                />
              </div>
            </div>

            <ol className="md:col-span-6 md:col-start-7">
              {process.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.step}
                  delay={i * 60}
                  className="border-paper/15 flex gap-6 border-t py-8 first:border-t-0 first:pt-0 md:py-10"
                >
                  <span className="text-clay-soft font-display text-3xl tabular-nums">
                    {p.step}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl md:text-3xl">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-paper/70 mt-4 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Współpraca */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Współpraca"
            title="Z kim pracujemy"
            intro="Z indywidualnymi inwestorami, deweloperami i firmami. Różnimy się skalą — nie podejściem."
            action={{ label: "Formy współpracy", href: "/cooperacja" }}
          />
          <ul className="border-line mt-16 grid gap-px bg-line md:grid-cols-3">
            {[
              {
                title: "Inwestor prywatny",
                body: "Wnętrza prywatne: domy, mieszkania i apartamenty. To nasz najczęstszy obszar działań i zarazem ten, w którym dobry projekt rodzi się przede wszystkim z uważnego dialogu.",
              },
              {
                title: "Deweloper",
                body: "Wnętrza inwestycyjne i strefy wspólne. Proponujemy współpracę opartą na przejrzystych pakietach, gwarantując terminowość oraz sprawdzony, powtarzalny standard jakości.",
              },
              {
                title: "Firma i usługi",
                body: "Biura, recepcje, showroomy. Tworzymy przestrzenie biznesowe, które aktywnie wspierają zespół, stając się funkcjonalnym narzędziem w codziennej pracy.",
              },
            ].map((c, i) => (
              <Reveal
                as="li"
                key={c.title}
                delay={i * 80}
                className="bg-paper p-8 md:p-10"
              >
                <p className="text-muted text-xs tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-2xl leading-tight">{c.title}</h3>
                <p className="text-muted mt-4 leading-relaxed">{c.body}</p>
                <Link
                  href="/cooperacja"
                  className="group border-ink/25 hover:border-clay text-ink mt-7 inline-flex items-center gap-3 border-b pb-1 text-sm transition-colors"
                >
                  Szczegóły
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Opinie */}
      <section className="bg-paper-2 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Opinie" title="Co mówią klienci" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal
                key={r.author}
                delay={i * 80}
                className="flex h-full flex-col justify-between border-t border-ink/15 pt-8"
              >
                <blockquote className="font-display text-xl leading-[1.4] md:text-2xl">
                  „{r.quote}”
                </blockquote>
                <footer className="text-muted mt-8 text-sm">
                  <span className="text-ink block">{r.author}</span>
                  {r.role}
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
