import type { Metadata } from "next";
import Link from "next/link";
import spokojnaDroga from "@/assets/pics/Spokojna droga.jpg";
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
    a: "U nas wyceniamy projekt od metrażu, a nie „za godzinę” — dzięki temu koszt znany jest z góry. Dla mieszkania 50–70 m² to zwykle 6 000–11 000 zł. Dokładną kwotę podajemy po pierwszej rozmowie, kiedy znamy układ i zakres.",
  },
  {
    q: "Czy pracujecie na materiałach klienta?",
    a: "Tak. Projekt jest nasz, ale materiały dobieramy wspólnie — często proponujemy dwa warianty cenowe tego samego rozwiązania. Jeśli macie już kupione meble lub wyposażenie, wkomponujemy je w projekt.",
  },
  {
    q: "Kiedy płaci się poszczególne etapy?",
    a: "Standardowo: 30% po koncepcji, 40% po projektzie autorskim, 30% po przekazaniu dokumentacji wykonawczej. Przy nadzorze autorskim rozliczamy etapami zgodnie z harmonogramem budowy.",
  },
  {
    q: "Czy wykonujecie remont sami?",
    a: "Nie. Jesteśmy pracownią projektową — dobieramy wykonawców, przygotowujemy dla nich dokumentację i nadzorujemy jakość. Wykonawcę wybierasz wspólnie, z naszym rekomendowaniem i porównaniem ofert.",
  },
  {
    q: "Ile trwa projekt mieszkania?",
    a: "Koncepcja zajmuje 2–4 tygodnie, projekt autorski 6–10 tygodni. Sama realizacja — od 3 do 9 miesięcy, zależnie od zakresu i dostępności materiałów.",
  },
  {
    q: "Czy pracujecie poza Gdańskiem?",
    a: "Tak, w granicach całego kraju. Spotkania i nadzór odbywają się na miejscu, a dokumentację przekazujemy w formie elektronicznej. Dla projektów poza regionem dojeżdżamy na kluczowe etapy.",
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
        image={spokojnaDroga}
        imageAlt="Spokojna droga do wymarzonego wnętrza"
      />

      {/* FAQ */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Pytania"
            title="Najczęstsze pytania"
            intro="Jeśli Twojego tu nie ma — napisz albo zadzwoń. Odpowiadamy bez formułek."
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
                Wystarczy telefon lub 20 minut na spotkaniu. Opowiedz, co
                planujesz — powiemy, czy i jak możemy pomóc.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/kontakt"
                className="bg-ink text-paper hover:bg-clay rounded-full px-8 py-4 text-center text-sm transition-colors"
              >
                Formularz kontaktowy
              </Link>
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
