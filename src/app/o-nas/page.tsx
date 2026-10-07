import type { Metadata } from "next";
import { Fragment } from "react";
import pracownia from "@/assets/pics/pracownia.png";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { principles, site, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "O nas",
  description:
    "Pracownia architektury wnętrz TAKA - zespół, podejście do projektu, zasady współpracy i historia firmy.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O nas"
        title="Mała pracownia z wielką dbałością o szczegóły."
        intro="Nasza kameralna pracownia to dla Ciebie brak pośredników i gwarancja, że zawsze rozmawiasz bezpośrednio z autorką swojego wnętrza. Dzięki temu od pierwszego szkicu aż po finał realizacji, Twój projekt pozostaje w jednych, w pełni zaangażowanych rękach. "
        image={pracownia}
        imageAlt="Wnętrze pracowni TAKA"
      />
      {/* Zespół */}
      <section className="py-5 md:py-10">
        <div className="container-x">
          <SectionHeading
            eyebrow="Zespół"
            title="Dwie osoby, wspólna wizja."
            intro="Praca w duecie pozwala nam spojrzeć na każdy projekt z dwóch różnych perspektyw. Dzięki temu masz pewność, że żadne rozwiązanie nie jest przypadkowe, a najmniejszy detal nie umknie naszej uwadze."
          />
          <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Agnieszka",
                role: "Architekt i Projektantka Wnętrz",
                bio: "Absolwentka Architektury i Urbanistyki na Politechnice Warszawskiej, z 16-letnim doświadczeniem zawodowym w projektowaniu. W pracowni odpowiada za koncepcję, funkcjonalność przestrzeni oraz nadzór autorski nad realizacją projektów. W swojej pracy łączy wiedzę architektoniczną, wyczucie proporcji i dbałość o detal z uważnym podejściem do potrzeb użytkowników. Projektowanie traktuje jako proces, w którym estetyka zawsze idzie w parze z funkcjonalnością, a wnętrze powinno być naturalnym odzwierciedleniem stylu życia i osobowości jego mieszkańców.",
              },
              {
                name: "Anna",
                role: "Projektantka Detalu i Rysunków Wykonawczych",
                bio: "Absolwentka Energetyki na Wydziale Oceanotechniki i Okrętownictwa Politechniki Gdańskiej, z 13-letnim doświadczeniem w projektowaniu konstrukcji. W pracowni odpowiada za niezawodność techniczną, ergonomię oraz koordynację skomplikowanych rozwiązań wykonawczych. Dzięki prowadzeniu autorskiej marki SimplaStudio.Art doskonale porusza się w świecie rzemiosła, technologii i projektowania unikalnych mebli. W pracy łączy inżynieryjny rygor z wrażliwością na człowieka, dbając, by wnętrza były bezpieczne, logiczne i idealnie skrojone na miarę życia ich użytkowników."
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
                <p className="text-muted mt-4 text-sm leading-relaxed">
                  {m.bio
                    .split(/(?=W pracowni odpowiada za)/)
                    .map((part, j) => (
                      <Fragment key={j}>
                        {j > 0 && <br />}
                        {part}
                      </Fragment>
                    ))}
                </p>
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
    </>
  );
}
