import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { principles, process, services, site, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Pracownia architektury wnętrz TAKA — zespół, podejście do projektu, zasady współpracy i historia firmy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O nas"
        title="Mała pracownia z dużą dbałością"
        intro="Jesteśmy zespołem, w którym każdy projekt prowadzi jedna osoba. Od pierwszej rozmowy do odbioru kluczy. Nie dzielimy zleceń między ludzi, którzy nigdy się nie spotkali."
        meta={[
          `Od ${site.founded} roku`,
          `${site.city}, ${site.country}`,
          "6 osób w zespole",
        ]}
        image="https://images.unsplash.com/photo-1676538627353-03b8e1eff168?auto=format&fit=crop&q=75"
        imageAlt="Wnętrze z długim korytarzem, kafelkową podłogą i oknami"
      />

      {/* Zespół */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Zespół"
            title="Sześć osób, jeden proces"
            intro="Mały zespół jest tu wyborem, nie ograniczeniem. Dzięki niemu każdy projekt ma autora, a każdy autor ma czas."
          />

          <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Marcin Wójcik",
                role: "Założyciel, projektant",
                bio: "14 lat praktyki. Prowadzi koncepcje i rozmowy z klientami. Uważa, że dobry układ mieszkania jest wart więcej niż najdroższy materiał.",
              },
              {
                name: "Katarzyna Nowak",
                role: "Projektantka wnętrz",
                bio: "Odpowiada za kompletację, materiały i światło. Zawsze pyta, co klient ma w domu i czego nie chce — to najszybsza droga do dobrego projektu.",
              },
              {
                name: "Piotr Zieliński",
                role: "Projekt techniczny",
                bio: "Rysunki wykonawcze, układy instalacji, dobór okuć. Bez niego projekt wyglądałby świetnie na zdjęciu i rozpadł się na budowie.",
              },
              {
                name: "Ewa Dąbrowska",
                role: "Koordynacja i nadzór",
                bio: "Na budowie dwa razy w tygodniu, bez wyjątku. Pilnuje harmonogramu i jakości wykonania. Klienci dzwonią do niej zamiast do kierownika.",
              },
              {
                name: "Tomasz Górski",
                role: "Zakup i logistyka",
                bio: "Negocjuje z producentami mebli, śledzi dostawy, zamawia oświetlenie. Dzięki niemu na budowie nigdy nie brakuje drzwi.",
              },
              {
                name: "Anna Lis",
                role: "Architektka wnętrz",
                bio: "Projektuje od 2021. Zajmuje się projektami komercyjnymi i kompletacją. Klienci nie uwierzyli jej na pierwszym spotkaniu — to bywa przełomowe.",
              },
            ].map((m, i) => (
              <Reveal
                as="li"
                key={m.name}
                delay={i * 60}
                className="border-line border-t pt-7"
              >
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="text-clay mt-1.5 text-sm">{m.role}</p>
                <p className="text-muted mt-4 text-sm leading-relaxed">{m.bio}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Zasady */}
      <section className="bg-paper-2 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Zasady"
            title="Cztery rzeczy, których nie zmieniamy"
          />
          <ul className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 70}
                className="border-line border-t pt-7"
              >
                <p className="text-muted text-xs tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl leading-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="text-muted mt-4 leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Liczby + zdjęcie */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <div className="relative aspect-4/5 overflow-hidden bg-paper-2">
                <Image
                  src="https://images.unsplash.com/photo-1749209698823-8b5c2076396b?auto=format&fit=crop&q=75"
                  alt="Szklana fasada i wewnętrzne schody z metalowym poręczem"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="md:col-span-5 md:col-start-8">
              <SectionHeading
                eyebrow="Skala"
                title="Nie rośniemy przez przypadek"
                intro="Przyjmujemy tyle projektów, ile możemy poprowadzić osobiście. Dziś to sześć osób i maksymalnie kilkanaście projektów rocznie — to granica, przy której nadzór na budowie wciąż jest realny."
              />
              <ul className="mt-10 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <li key={s.label} className="border-line border-t pt-5">
                    <p className="font-display text-3xl">{s.value}</p>
                    <p className="text-muted mt-1 text-xs">{s.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proces + zakres */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Proces i zakres"
            title="Od pomysłu do kluczy"
            tone="dark"
          />

          <div className="mt-16 grid gap-16 md:grid-cols-12">
            <ol className="md:col-span-7">
              {process.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.step}
                  delay={i * 50}
                  className="border-paper/15 flex gap-6 border-t py-7 first:border-t-0 first:pt-0"
                >
                  <span className="text-clay-soft font-display text-2xl tabular-nums">
                    {p.step}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl">{p.title}</h3>
                      <span className="text-paper/40 text-xs">{p.meta}</span>
                    </div>
                    <p className="text-paper/70 mt-3 leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <div className="md:col-span-4 md:col-start-9">
              <p className="eyebrow text-paper/50">Zakres usług</p>
              <ul className="mt-6 space-y-6">
                {services.map((s) => (
                  <li key={s.title} className="border-paper/15 border-t pt-5">
                    <h4 className="font-display text-lg">{s.title}</h4>
                    <p className="text-paper/60 mt-2 text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}