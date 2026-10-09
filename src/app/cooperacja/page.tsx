import type { Metadata } from "next";
import heroImage from "@/assets/pics/hero.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { process } from "@/data/site";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Współpraca",
  description:
    "Formy współpracy z pracownią TAKA: inwestor prywatny, deweloper, firma i usługi, hotelarstwo i gastronomia. Sprawdź model pracy, role i koszty.",
};

const faq = [
  {
    q: "Ile kosztuje projekt wnętrza?",
    a: "Każde wnętrze to inna historia i unikalne wymagania, dlatego każdą współpracę wyceniamy indywidualnie. Dążymy do pełnej przejrzystości - ostateczną kwotę przedstawiamy po wstępnej konsultacji, gdy omówimy szczegóły i zakres projektu.",
  },
  {
    q: "Czy pracujecie na materiałach klienta?",
    a: "Tak. Projekt jest nasz, ale materiały dobieramy wspólnie — często proponujemy dwa warianty cenowe tego samego rozwiązania. Jeśli macie już kupione meble lub wyposażenie, wkomponujemy je w projekt.",
  },
  {
    q: "Kiedy płaci się poszczególne etapy?",
    // a: "Standardowo: 30% po koncepcji, 40% po projektzie autorskim, 30% po przekazaniu dokumentacji wykonawczej. Przy nadzorze autorskim rozliczamy etapami zgodnie z harmonogramem budowy.",
  },
  {
    q: "Czy wykonujecie remont sami?",
    a: "Nie. Jesteśmy pracownią projektową- Przygotowujemy dokumentację techniczną. Na życzenie klientow dobieramy wykonawców i nadzorujemy jakość.",
  },
  {
    q: "Ile trwa projekt mieszkania?",
    // a: "Koncepcja zajmuje 2–4 tygodnie, projekt autorski 6–10 tygodni. Sama realizacja — od 3 do 9 miesięcy, zależnie od zakresu i dostępności materiałów.",
  },
  {
    q: "Czy pracujecie poza Gdańskiem?",
    a: "Spotkania odbywają się online lub gdy jest taka konieczność również na miejscu.",
  },
];

export default function CooperationPage() {
  return (
    <>
      <PageHero
        eyebrow="Współpraca"
        title="Spokojna droga do wymarzonego wnętrza."
        intro="Tworzenie nowego domu to czas na Twoje inspiracje, podczas gdy my bierzemy na siebie całą realizację. Zobacz, jak w pięciu czytelnych krokach zamieniamy Twoją wizję w dopracowaną przestrzeń, gotową do zamieszkania."
        points={process.map((p) => ({
          step: p.step,
          title: p.title,
          body: p.body,
        }))}
        image={heroImage}
        imageAlt="Spokojna droga do wymarzonego wnętrza"
      />

      {/* FAQ */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pytania"
            title="Najczęstsze pytania"
            intro="Twojego tematu nie ma na liście? Napisz do nas lub zadzwoń. Zawsze odpowiadamy konkretnie i bez szablonowych formułek."
            tone="dark"
          />
          <dl className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {faq.map((f, i) => (
              <Reveal
                key={f.q}
                delay={i * 50}
                className="border-paper/15 border-t pt-7"
              >
                <dt className="font-display text-xl leading-snug md:text-2xl">
                  {f.q}
                </dt>
                <dd className="text-paper/70 mt-4 leading-relaxed">{f.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container-x">
          <Reveal className="border-line flex flex-col items-start justify-between gap-8 border-t pt-12 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Zacznijmy</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-[1.05] md:text-6xl">
                Pierwsza rozmowa jest bezpłatna
              </h2>
              <p className="text-muted mt-5 max-w-lg leading-relaxed">
                Krótka rozmowa lub 20-minutowe konsultacje wystarczą, abyśmy poznali Twoje potrzeby. Opowiedz o swoim projekcie, a my przedstawimy konkretne możliwości wsparcia.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${site.phoneHref}`}
                className="border-line hover:border-ink rounded-full border px-8 py-4 text-center text-sm transition-colors"
              >
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
