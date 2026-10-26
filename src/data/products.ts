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
import wineRack from "@/assets/pics/our-products/winerack.jpg";
import lampaOkno from "@/assets/pics/our-products/lampa/lampa-okno.jpg";
import ogolne from "@/assets/pics/our-products/ogolne.jpg";
import stolik from "@/assets/pics/our-products/stolik.jpg";
import stolikSkladany from "@/assets/pics/our-products/stolik-skladany.jpg";
import biurko10 from "@/assets/pics/our-products/biurko/biurko1-0.jpg";
import stolikEnzo from "@/assets/pics/our-products/stolik-enzo.jpg";
import retroHarmonia from "@/assets/pics/our-products/konsole/retroharmonia.jpg";
import retroImpuls from "@/assets/pics/our-products/konsole/retroimpuls.jpg";
import vinylLoft from "@/assets/pics/our-products/konsole/vinylloft.jpg";

export type ProductCategory = "Stoliki" | "Biurka" | "Dla domu" | "Konsole";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  image: StaticImageData;
  imagePosition?: "left" | "center" | "right";
  alt: string;
  lead: string;
  specs?: { label: string; value: string }[];
  price?: string;
};

export const productCategories: ProductCategory[] = [
  "Stoliki",
  "Biurka",
  "Dla domu",
  "Konsole"
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
    slug: "wine-rack",
    name: "Wine Rack",
    category: "Dla domu",
    image: wineRack,
    imagePosition: "left",
    alt: "Wine Rack — produkt pracowni TAKA",
    lead: "Autorski element wyposażenia domu, projektowany i wykonywany w naszej pracowni.",
  },
  {
    slug: "lampa-alma",
    name: "Lampa Alma",
    category: "Dla domu",
    image: lampaOkno,
    alt: "Lampa Alma — produkt pracowni TAKA",
    lead: "Lampa o konstrukcji nawiązującej do okna. Światło ukierunkowane, konstrukcja lekka.",
  },
  {
    slug: "konsola-retro-harmonia",
    name: "Konsola Retro Harmonia",
    category: "Konsole",
    image: retroHarmonia,
    imagePosition: "left",
    alt: "Konsola Retro Harmonia — produkt pracowni TAKA",
    lead: "Konsola o retro formie, która porządkuje wnętrze i nadaje mu charakter.",
  },
  {
    slug: "konsola-retro-impuls",
    name: "Konsola Retro Impuls",
    category: "Konsole",
    image: retroImpuls,
    imagePosition: "left",
    alt: "Konsola Retro Impuls — produkt pracowni TAKA",
    lead: "Smukła konsola z wyrazistym detalem — do przedpokoju, salonu lub sypialni.",
  },
  {
    slug: "konsola-vinyl-loft",
    name: "Konsola Vinyl Loft",
    category: "Konsole",
    image: vinylLoft,
    imagePosition: "left",
    alt: "Konsola Vinyl Loft — produkt pracowni TAKA",
    lead: "Loftowa konsola łącząca prostą bryłę z ciepłem naturalnego drewna.",
  },
];

/** Zdanie wprowadzające na stronie. */
export const productsIntro =
  "Tworzymy nie tylko wnętrza, ale i autorskie meble oraz lampy. Zamiast skali stawiamy na unikalność - każdy obiekt powstaje w naszej pracowni, pod naszą pełną autorską kontrolą.";

/** Okładka strony. */
export const productsCover = {
  image: ogolne,
  alt: "Produkty pracowni TAKA — zdjęcie zbiorcze",
};
