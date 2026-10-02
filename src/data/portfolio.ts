/**
 * Portfolio.
 *
 * Na razie jedna realizacja w jednej kategorii — zdjęcia pochodzą z
 * `pics/Portfolio/a_1/` i są przetwarzane do `src/assets/pics/portfolio/a-1/`
 * poleceniem `npm run images`.
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
import lazienka from "@/assets/pics/portfolio/a-1/lazienka.jpg";
import plan from "@/assets/pics/portfolio/a-1/plan.jpg";
import przedpokoj from "@/assets/pics/portfolio/a-1/przedpokoj.jpg";
import salon from "@/assets/pics/portfolio/a-1/salon.jpg";
import sypialnia from "@/assets/pics/portfolio/a-1/sypialnia.jpg";

export type Category = "Mieszkania";

export type Project = {
  slug: string;
  title: string;
  category: Category;
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
    title: "Apartament A1",
    category: "Mieszkania",
    summary:
      "Pełen zakres realizacji mieszkania — od układu funkcjonalnego po wyposażenie poszczególnych pomieszczeń.",
    photo: salon,
    photos: [
      { image: salon, alt: "Salon w apartamencie A1", label: "Salon" },
      { image: kuchnia, alt: "Kuchnia w apartamencie A1", label: "Kuchnia" },
      { image: sypialnia, alt: "Sypialnia w apartamencie A1", label: "Sypialnia" },
      { image: lazienka, alt: "Łazienka w apartamencie A1", label: "Łazienka" },
      { image: przedpokoj, alt: "Przedpokój w apartamencie A1", label: "Przedpokój" },
      { image: plan, alt: "Rzut apartamentu A1", label: "Rzut" },
    ],
  },
];

export const heroVideo = {
  src: "https://videos.pexels.com/video-files/7578540/7578540-hd_1920_1080_30fps.mp4",
  poster: "photo-1758915753369-6a33c7bc1d76",
  credit: {
    name: "Pexels",
    url: "https://www.pexels.com",
  },
};

/** Zdjęcie zastępcze dla sekcji, które nie odwołują się do konkretnej realizacji. */
export const stockImage = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&q=75`;