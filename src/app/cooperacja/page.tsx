import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { collaborators, cooperationTypes, process } from "@/data/site";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Współpraca",
  description:
    "Formy współpracy z pracownią TAKA: inwestor prywatny, deweloper, firma i usługi, hotelarstwo i gastronomia. Sprawdź model pracy, role i koszty.",
};

const engagement = [
  {
    title: "Etap projektu",
    price: "od 90 zł / m²",
    body: "Rabat przy metrażu powyżej 100 m² i przy zleceniu całej inwestycji wraz z nadzorem.",
    items: [
      "Inwentaryzacja i pomiary",
      "Koncepcja — 2 warianty",
      "Projekt autorski",
      "Specyfikacja materiałowa",
      "Wycena wykonawcza",
    ],
  },
  {
    title: "Nadzór autorski",
    price: "6% wartości prac",
    body: "Rozliczany od wartości zakończonych prac instalacyjnych i wykończeniowych.",
    items: [
      "Wizyty na budowie",
      "Kontrola jakości i materiałów",
      "Odbiór etapów",
      "Rozstrzyganie kolizji",
      "Dokumentacja powykonawcza",
    ],
  },
  {
    title: "Kompletacja i wyposażenie",
    price: "wg zakresu",
    body: "Meble na wymiar, oświetlenie, tkaniny, dodatki. Prowizja rozliczana osobno.",
    items: [
      "Specyfikacja zakupowa",
      "Zamówienia u producentów",
      "Koordynacja dostaw",
      "Montaż",
      "Książka realizacji",
    ],
  },
];

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
        title="Cztery modele współpracy"
        intro="Nie mamy jednego cennika, bo każde wnętrze jest inne. Poniżej cztery najczęstsze scenariusze — w nawiasie orientacyjny koszt projektu. Dokładną wycenę podajemy po rozmowie."
        image="https://images.unsplash.com/photo-1723516908282-b3c795e9416a?auto=format&fit=crop&q=75"
        imageAlt="Lobby hotelowe z holem schodowym"
      />

      {/* Modele współpracy */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <ul className="grid gap-px bg-line md:grid-cols-2">
            {cooperationTypes.map((t, i) => (
              <Reveal
                as="li"
                key={t.title}
                delay={i * 70}
                className="group bg-paper p-8 transition-colors duration-500 hover:bg-white md:p-12"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl leading-tight md:text-3xl">
                    {t.title}
                  </h2>
                  <span className="text-muted text-xs tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-muted mt-4 leading-relaxed">{t.body}</p>
                <ul className="border-line mt-7 space-y-2 border-t pt-5 text-sm">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <span className="bg-clay h-1 w-1 shrink-0 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Koszty */}
      <section className="bg-paper-2 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Koszty"
            title="Ile to kosztuje"
            intro="Orientacyjne stawki. Podajemy je przed zawarciem umowy i nie zmieniamy ich w trakcie projektu — chyba że zmienisz zakres prac."
          />

          <ul className="mt-16 grid gap-8 md:grid-cols-3">
            {engagement.map((e, i) => (
              <Reveal
                as="li"
                key={e.title}
                delay={i * 80}
                className="flex flex-col border-t border-ink/15 pt-8"
              >
                <h3 className="font-display text-2xl">{e.title}</h3>
                <p className="font-display text-clay mt-4 text-3xl">
                  {e.price}
                </p>
                <p className="text-muted mt-3 text-sm leading-relaxed">
                  {e.body}
                </p>
                <ul className="mt-7 space-y-2.5 text-sm">
                  {e.items.map((it) => (
                    <li
                      key={it}
                      className="border-line flex gap-3 border-b pb-2.5"
                    >
                      <span className="bg-clay mt-2 h-1 w-1 shrink-0 rounded-full" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>

          <p className="text-muted mt-12 max-w-3xl text-sm leading-relaxed">
            Kwoty są orientacyjne i nie stanowią oferty w rozumieniu Kodeksu
            cywilnego. Wycena indywidualna jest bezpłatna i wiążąca — wysyłamy
            ją w formie PDF w ciągu 5 dni roboczych od pierwszego spotkania.
          </p>
        </div>
      </section>

      {/* Role + proces */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="relative mt-12 aspect-3/2 overflow-hidden bg-paper-2">
                <Image
                  src="https://images.unsplash.com/photo-1774021793376-6dc8fb472358?auto=format&fit=crop&q=75"
                  alt="Betonowe schody z metalową balustradą"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <p className="eyebrow">Zespół projektowy</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
                {collaborators.map((c) => (
                  <li
                    key={c}
                    className="border-line flex gap-3 border-t pt-4 text-sm"
                  >
                    <span className="bg-clay mt-1.5 h-1 w-1 shrink-0 rounded-full" />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <p className="eyebrow">Warto wiedzieć</p>
                <ul className="mt-6 space-y-5">
                  {process.slice(0, 3).map((p) => (
                    <li key={p.step} className="flex gap-5">
                      <span className="text-clay font-display text-lg tabular-nums">
                        {p.step}
                      </span>
                      <div>
                        <p className="text-sm">{p.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
