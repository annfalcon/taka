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
        title="Mała pracownia z wielką dbałością o szczegóły."
        intro="Nasza kameralna pracownia to dla Ciebie brak pośredników i gwarancja, że zawsze rozmawiasz bezpośrednio z autorką swojego wnętrza. Dzięki temu od pierwszego szkicu aż po finał realizacji, Twój projekt pozostaje w jednych, w pełni zaangażowanych rękach. "
        image="https://images.unsplash.com/photo-1744627049721-73c27008ad28?auto=format&fit=crop&q=75&w=2400"
        imageAlt="Projektanci omawiający dokumentację projektową przed ekranem komputera"
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
                bio: "Odpowiada za koncepcję, funkcjonalność i nadzór autorski. W swojej pracy łączy architektoniczną dyscyplinę z otwartością na drugiego człowieka. Jej niezawodny sposób na dobry projekt? Zawsze pyta, z czym klient nie chce się rozstać, a czego w swoim wnętrzu po prostu nie zniesie.",
              },
              {
                name: "Anna",
                role: "Projektantka Detalu i Rysunków Wykonawczych",
                bio: "Odpowiada za projekty wykonawcze, dobór materiałów i dopracowanie każdego detalu. Przekłada wielkie wizje na precyzyjne rysunki dla wykonawców, aby każda, nawet najśmielsza koncepcja, była w 100% możliwa do zrealizowania.",
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
                  {m.bio}
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
                    </div>
                    <p className="text-paper/70 mt-3 leading-relaxed">
                      {p.body}
                    </p>
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
