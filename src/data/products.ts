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
import ogolne from "@/assets/pics/our-products/ogolne.jpg";
import stolik from "@/assets/pics/our-products/stolik.jpg";
import stolikSkladany from "@/assets/pics/our-products/stolik-skladany.jpg";
import biurko10 from "@/assets/pics/our-products/biurko/biurko1-0.jpg";
import stolikEnzo from "@/assets/pics/our-products/stolik-enzo.jpg";

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
    slug: "stolik-vigo",
    name: "Stolik Vigo",
    category: "Stoliki",
    image: stolik,
    alt: "Stolik Vigo - produkt pracowni TAKA",
    lead: "Podstawowy stolik z oferty. Prosta forma, solidne wykonanie.",
  },
  {
    slug: "stolik-otto",
    name: "Stolik Otto",
    category: "Stoliki",
    image: stolikSkladany,
    alt: "Stolik Otto - produkt pracowni TAKA",
    lead: "Wersja składana — do mieszkań, w których liczy się każdy centymetr.",
  },
    {
    slug: "biurko-hugo",
    name: "Biurko Hugo",  
    category: "Biurka",
    image: biurko10,
    alt: "Biurko Hugo — produkt pracowni TAKA",
    lead: "Pierwsza wersja biurka z oferty. Wersja bazowa.",
  },
  {
    slug: "stolik-enzo",
    name: "Stolik Enzo",
    category: "Stoliki",
    image: stolikEnzo,
    alt: "Stolik Enzo — produkt pracowni TAKA",
    lead: "Stolik o wyraźnej, konstrukcyjnej formie — prosty, lecz bardzo charakterystyczny.",
  },
  {
    slug: "domek-roof",
    name: "Domek Roof",
    category: "Dla domu",
    image: domekDlaPsa,
    alt: "Domek Roof — produkt pracowni TAKA",
    lead: "Domek dla psa — wnętrze, które kończy się na kanapie.",
  },
  {
    slug: "lampa-alma",
    name: "Lampa Alma",
    category: "Lampy",
    image: lampaOkno,
    alt: "Lampa Alma — produkt pracowni TAKA",
    lead: "Lampa o konstrukcji nawiązującej do okna. Światło ukierunkowane, konstrukcja lekka.",
  },
];

/** Zdanie wprowadzające na stronie. */
export const productsIntro =
  "Poza projektowaniem wnętrz robimy też meble i lampy. Nie wszystko od razu, nie na skalę - ale to, co wychodzi z pracowni, wychodzi po naszej stronie.";

/** Okładka strony. */
export const productsCover = {
  image: ogolne,
  alt: "Produkty pracowni TAKA — zdjęcie zbiorcze",
};
