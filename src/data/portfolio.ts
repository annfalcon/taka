/**
 * Portfolio.
 *
 * Zdjęcia pochodzą z `pics/Portfolio/` i są przetwarzane do
 * `src/assets/pics/portfolio/<nazwa-ze-slugiem>/` poleceniem `npm run images`.
 *
 * Pliki są **importowane jako moduły**, a nie podawane jako ścieżki tekstowe:
 * `next/image` nie dokleja `basePath` do zwykłego stringa w `src`, więc na
 * GitHub Pages w podkatalogu (`/taka/`) każde zdjęcie skończyłoby się 404.
 * Import przechodzi przez bundler, który sam dopisuje `basePath` i nadaje
 * plikom nazwy z hashem.
 *
 * Puste pola (`place`, `area`, `year`, `scope`) nie są w ogóle pokazywane —
 * uzupełnij je, kiedy będziesz znał szczegóły realizacji.
 */
import type { StaticImageData } from "next/image";

import kuchnia from "@/assets/pics/portfolio/a-1/kuchnia.jpg";
import lazienkaA1 from "@/assets/pics/portfolio/a-1/lazienka.jpg";
import plan from "@/assets/pics/portfolio/a-1/plan.jpg";
import przedpokoj from "@/assets/pics/portfolio/a-1/przedpokoj.jpg";
import salon from "@/assets/pics/portfolio/a-1/salon.jpg";
import sypialnia from "@/assets/pics/portfolio/a-1/sypialnia.jpg";

import salonA2 from "@/assets/pics/portfolio/a-2/salon-2.jpg";
import sypialniaA2 from "@/assets/pics/portfolio/a-2/sypialnia-1.jpg";
import lazienkaA2 from "@/assets/pics/portfolio/a-2/lazienka-1.jpg";
import lazienkaA2b from "@/assets/pics/portfolio/a-2/lazienka-2.jpg";

import duzyPokojA3 from "@/assets/pics/portfolio/a-3/duzy-pokoj.jpg";
import kominekA3 from "@/assets/pics/portfolio/a-3/kominek.jpg";
import kuchniaA3 from "@/assets/pics/portfolio/a-3/kuchnia-1.jpg";
import lazienkaA3 from "@/assets/pics/portfolio/a-3/lazienka-1.jpg";
import przedpokojA3 from "@/assets/pics/portfolio/a-3/przedpokoj-1.jpg";
import sypialniaA3 from "@/assets/pics/portfolio/a-3/sypialnia-1.jpg";

import salonA4 from "@/assets/pics/portfolio/a-4/salon-2.jpg";
import sypialniaDzieckaA4 from "@/assets/pics/portfolio/a-4/sypialnia-dziecka-2.jpg";
import lazienkaDuzaA4 from "@/assets/pics/portfolio/a-4/lazienka-duza-2.jpg";
import lazienkaMalaA4 from "@/assets/pics/portfolio/a-4/lazienka-mala-2.jpg";

import kuchniaA5 from "@/assets/pics/portfolio/a-5/kuchnia-3.jpg";
import salonA5 from "@/assets/pics/portfolio/a-5/salon-1.jpg";
import sypialniaA5 from "@/assets/pics/portfolio/a-5/sypialnia-1.jpg";
import lazienkaA5 from "@/assets/pics/portfolio/a-5/lazienka-1.jpg";

export type Category = "Mieszkania";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  description?: string;
  summary: string;
  /** Pierwsze zdjęcie — karta w galerii i miniatura. */
  photo: StaticImageData;
  photos: { image: StaticImageData; alt: string; label: string }[];
  /** Puste pola nie są renderowane. */
  year?: string;
  place?: string;
  area?: string;
  scope?: string;
};

export const categories: Category[] = ["Mieszkania"];

export const projects: Project[] = [
  {
    slug: "apartament-a1",
    title: "Mieszkanie Warszawa Wilanów",
    description:"Całe mieszkanie zostało połączone jednolitą myślą przewodnią: głębokie szarości, czarne matowe detale oraz subtelne, liniowe oświetlenie LED tworzą kameralny, wręcz wieczorowy klimat w każdym pomieszczeniu. Otwarta strefa dzienna z aneksem kuchennym płynnie łączy się z prywatnym ogródkiem, a lustrzane zabudowy i przemyślane meble na wymiar maksymalizują funkcjonalność bez przytłaczania metrażu. To harmonijny azyl zaprojektowany z myślą o odpoczynku od miejskiego zgiełku.",
    category: "Mieszkania",
    summary:
      "Pełen zakres realizacji mieszkania - od układu funkcjonalnego po wyposażenie poszczególnych pomieszczeń.",
    photo: salon,
    photos: [
      { image: salon, alt: "Salon w apartamencie A1", label: "Salon" },
      { image: kuchnia, alt: "Kuchnia w apartamencie A1", label: "Kuchnia" },
      { image: sypialnia, alt: "Sypialnia w apartamencie A1", label: "Sypialnia" },
      { image: lazienkaA1, alt: "Łazienka w apartamencie A1", label: "Łazienka" },
      { image: przedpokoj, alt: "Przedpokój w apartamencie A1", label: "Przedpokój" },
      { image: plan, alt: "Rzut apartamentu A1", label: "Rzut" },
    ],
  },
  {
    slug: "apartament-a2",
    title: "Kamienica Dwupoziomowa Warszawa",
    description:"W odpowiedzi na potrzebę wyciszenia stworzyliśmy wnętrze sprzyjające relaksowi. Jednym z kluczowych zadań było rozplanowanie dwóch łazienek o odmiennych funkcjach. Aby uniknąć monotonii, postawiliśmy na wyraźny kontrast: funkcjonalną strefę walk-in skontrastowaliśmy z naszą koncepcją nastrojowego SPA, przełamanego akcentem głębokiego szmaragdu.",
    category: "Mieszkania",
    summary:
      "",
    photo: salonA2, 
    photos: [
      { image: salonA2, alt: "Salon w apartamencie A2", label: "Salon" },
      { image: sypialniaA2, alt: "Sypialnia w apartamencie A2", label: "Sypialnia" },
      { image: lazienkaA2, alt: "Łazienka w apartamencie A2", label: "Łazienka" },
      { image: lazienkaA2b, alt: "Łazienka na piętrze w apartamencie A2", label: "Łazienka 2" },
    ],
  },
  {
    slug: "apartament-a3",
    title: "Kamienica z Kominkiem w Gdańsku",
    description: "Klienci pragnęli wnętrza z duszą o wyrazistym, nietuzinkowym charakterze z odniesieniami do stylu retro, vintage oraz klimatu klasycznych kamienic. Wykorzystaliśmy czerwoną, postarzaną cegłę na ścianie w strefie dziennej i kuchennej oraz zaprojektowaliśmy minimalistyczną obudowę kominka z podświetlaną, pionową wnęką na drewno. Dobraliśmy czarną i mosiężną armaturę oraz uchwyty, a także ozdobne, drewniane osłony grzejnikowe i oprawy drzwiowe, które spinają całe mieszkanie w spójną całość.",
    category: "Mieszkania",
    summary:
      "Mieszkanie w kamienicy — salon z kominkiem, duży pokój, kuchnia, sypialnia i przedpokój w kameralnej, klasycznej scenerii.",
    photo: duzyPokojA3,
    photos: [
      { image: duzyPokojA3, alt: "Duży pokój w apartamencie A3", label: "Duży pokój" },
      { image: kuchniaA3, alt: "Kuchnia w apartamencie A3", label: "Kuchnia" },
      { image: sypialniaA3, alt: "Sypialnia w apartamencie A3", label: "Sypialnia" },
      { image: lazienkaA3, alt: "Łazienka w apartamencie A3", label: "Łazienka" },
      { image: przedpokojA3, alt: "Przedpokój w apartamencie A3", label: "Przedpokój" },
      { image: kominekA3, alt: "Kominek w apartamencie A3", label: "Kominek" },
    ],
  },
  {
    slug: "apartament-a4",
    title: "Nowoczesne Mieszkanie Rodzinne w Warszawie",
    description: "Inwestorami tego projektu była młoda rodzina z dzieckiem, która marzyła o stworzeniu ciepłej, niezwykle funkcjonalnej i bezpiecznej przestrzeni do wspólnego życia. W odpowiedzi na ich potrzeby połączyliśmy szlachetny dąb z jasnymi, neutralnymi barwami i nastrojowym oświetleniem LED, dbając o dużą ilość ukrytej zabudowy do przechowywania. Stworzyliśmy przestronną łazienkę rodzinną z wanną i dwiema umywalkami oraz drugą, szybką strefę z prysznicem walk-in. Dopełnieniem całości jest bajkowy pokój dla dziecka z łóżkiem-domkiem i motywem górskich szczytów, w którym maluch może swobodnie się bawić i odpoczywać.",
    category: "Mieszkania",
    summary:
      "Apartament rodzinny — salon, pokój dziecka oraz dwie łazienki w jasnej, spójnej aranżacji.",
    photo: salonA4,
    photos: [
      { image: salonA4, alt: "Salon w apartamencie A4", label: "Salon" },
      { image: sypialniaDzieckaA4, alt: "Pokój dziecka w apartamencie A4", label: "Pokój dziecka" },
      { image: lazienkaDuzaA4, alt: "Duża łazienka w apartamencie A4", label: "Łazienka" },
      { image: lazienkaMalaA4, alt: "Mała łazienka w apartamencie A4", label: "Mała łazienka" },
    ],
  },
  {
    slug: "apartament-a5",
    title: "Mieszkanie Z Otwartą Strefą Dzienną w Warszawie",
    description: "Chęć obcowania z naturą zainspirowała nas do stworzenia wnętrza w ciepłych odcieniach ziemi, pięknie wyeksponowanych przez światło wypełniające przestrzeń. Główną osią projektu jest otwarta, funkcjonalna strefa dzienna. Indywidualny charakter aranżacji nadają autorskie akcenty – ściana z białej cegły w salonie, botaniczna tapeta w toalecie, mosiężne detale oraz przytulne tkaniny. Dzięki dyskretnym zabudowom na wymiar i dębowemu stołowi w jadalni, mieszkanie zyskało harmonijny i wysoce praktyczny wymiar.",
    category: "Mieszkania",
    summary:
      "Mieszkanie z otwartą strefą dzienną — funkcjonalna kuchnia, salon, sypialnia i łazienka.",
    photo: salonA5,
    photos: [
      { image: salonA5, alt: "Salon w apartamencie A5", label: "Salon" },
      { image: kuchniaA5, alt: "Kuchnia w apartamencie A5", label: "Kuchnia" },
      { image: sypialniaA5, alt: "Sypialnia w apartamencie A5", label: "Sypialnia" },
      { image: lazienkaA5, alt: "Łazienka w apartamencie A5", label: "Łazienka" },
    ],
  },
];

export const heroPoster = {
  photo: "photo-1758915753369-6a33c7bc1d76",
  alt: "Nowoczesny salon z kominkiem i designerskimi meblami",
};

/** Zdjęcie zastępcze dla sekcji, które nie odwołują się do konkretnej realizacji. */
export const stockImage = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&q=75`;