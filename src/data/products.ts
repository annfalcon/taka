/**
 * Produkty własnej produkcji pracowni.
 *
 * Zdjęcia pochodzą z `src/assets/pics/` i są generowane ze źródeł w `pics/`
 * poleceniem `npm run images` — skrypt zmniejsza je i slugifikuje nazwy plików.
 *
 * Pliki są **importowane jako moduły**, a nie podawane jako ścieżki tekstowe:
 * `next/image` nie dokleja `basePath` do zwykłego stringa w `src`, więc na
 * GitHub Pages w podkatalogu (`/taka/`) każde zdjęcie skończyłoby się 404.
 * Import przechodzi przez bundler, który sam dopisuje `basePath` i nadaje
 * plikom nazwy z hashem.
 *
 * `specs` i `price` są opcjonalne — pole bez wartości nie jest pokazywane
 * na stronie, więc możesz je uzupełniać stopniowo.
 */
import type { StaticImageData } from "next/image";

import domekDlaPsa from "@/assets/pics/our-products/domek-dla-psa.jpg";
import lampaOkno from "@/assets/pics/our-products/lampa/lampa-okno.jpg";
import lampaSerca from "@/assets/pics/our-products/lampa/lampa-serca.jpg";
import lampaSerduszka from "@/assets/pics/our-products/lampa/lampa-serduszka.jpg";
import ogolne from "@/assets/pics/our-products/ogolne.jpg";
import skrzynkaNaKorki from "@/assets/pics/our-products/skrzynka-na-korki.jpg";
import stolik from "@/assets/pics/our-products/stolik.jpg";
import stolikSkladany from "@/assets/pics/our-products/stolik-skladany.jpg";
import biurko10 from "@/assets/pics/our-products/biurko/biurko1-0.jpg";
import biurko11 from "@/assets/pics/our-products/biurko/biurko1-1.jpg";
import biurko111 from "@/assets/pics/our-products/biurko/biurko1-1-1.jpg";

export type ProductCategory = "Lampy" | "Stoliki" | "Biurka" | "Dla domu";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  image: StaticImageData;
  alt: string;
  lead: string;
  specs?: { label: string; value: string }[];
  price?: string;
};

export const productCategories: ProductCategory[] = [
  "Lampy",
  "Stoliki",
  "Biurka",
  "Dla domu",
];

export const products: Product[] = [
  {
    slug: "lampa-okno",
    name: "Lampa Okno",
    category: "Lampy",
    image: lampaOkno,
    alt: "Lampa Okno — produkt pracowni TAKA",
    lead: "Lampa o konstrukcji nawiązującej do okna. Światło ukierunkowane, konstrukcja lekka.",
  },
  {
    slug: "lampa-serca",
    name: "Lampa Serca",
    category: "Lampy",
    image: lampaSerca,
    alt: "Lampa Serca — produkt pracowni TAKA",
    lead: "Serce wprost w nazwie — poziomy materiałowy w praktycznym wykonaniu.",
  },
  {
    slug: "lampa-serduszka",
    name: "Lampa Serduszka",
    category: "Lampy",
    image: lampaSerduszka,
    alt: "Lampa Serduszka — produkt pracowni TAKA",
    lead: "Mniejsza wersja lampy w kształcie serca. Do sypialni, narożnika, nad stolik.",
  },
  {
    slug: "stolik",
    name: "Stolik",
    category: "Stoliki",
    image: stolik,
    alt: "Stolik — produkt pracowni TAKA",
    lead: "Podstawowy stolik z oferty. Prosta forma, solidne wykonanie.",
  },
  {
    slug: "stolik-skladany",
    name: "Stolik Składany",
    category: "Stoliki",
    image: stolikSkladany,
    alt: "Stolik składany — produkt pracowni TAKA",
    lead: "Wersja składana — do mieszkań, w których liczy się każdy centymetr.",
  },
  {
    slug: "biurko-1-0",
    name: "Biurko 1.0",
    category: "Biurka",
    image: biurko10,
    alt: "Biurko 1.0 — produkt pracowni TAKA",
    lead: "Pierwsza wersja biurka z oferty. Wersja bazowa.",
  },
  {
    slug: "biurko-1-1",
    name: "Biurko 1.1",
    category: "Biurka",
    image: biurko11,
    alt: "Biurko 1.1 — produkt pracowni TAKA",
    lead: "Poprawiona wersja 1.0 — poprawiona ergonomia i proporcje.",
  },
  {
    slug: "biurko-1-1-1",
    name: "Biurko 1.1.1",
    category: "Biurka",
    image: biurko111,
    alt: "Biurko 1.1.1 — produkt pracowni TAKA",
    lead: "Najnowsza wersja biurka z oferty.",
  },
  {
    slug: "domek-dla-psa",
    name: "Domek dla Psa",
    category: "Dla domu",
    image: domekDlaPsa,
    alt: "Domek dla psa — produkt pracowni TAKA",
    lead: "Domek dla psa — wnętrze, które kończy się na kanapie.",
  },
  {
    slug: "skrzynka-na-korki",
    name: "Skrzynka na Korki",
    category: "Dla domu",
    image: skrzynkaNaKorki,
    alt: "Skrzynka na korki — produkt pracowni TAKA",
    lead: "Skrzynka na butelki po winie. Porządek w miejscu, w którym nikt go nie planował.",
  },
];

/** Zdanie wprowadzające na stronie. */
export const productsIntro =
  "Poza projektowaniem wnętrz robimy też meble i lampy. Nie wszystko od razu, nie na skalę — ale to, co wychodzi z pracowni, wychodzi po naszej stronie.";

/** Okładka strony. */
export const productsCover = {
  image: ogolne,
  alt: "Produkty pracowni TAKA — zdjęcie zbiorcze",
};
