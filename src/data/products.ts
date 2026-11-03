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
import wineRack1 from "@/assets/pics/our-products/dla-domu/winerack/wr1.jpg";
import wineRack2 from "@/assets/pics/our-products/dla-domu/winerack/wr2.jpg";
import lampaOkno from "@/assets/pics/our-products/lampa/lampa-okno.jpg";
import showcase from "@/assets/pics/our-products/showcase.jpg";
import stolik from "@/assets/pics/our-products/stolik.jpg";
import stolikSkladany from "@/assets/pics/our-products/stolik-skladany.jpg";
import biurko10 from "@/assets/pics/our-products/biurko/biurko1-0.jpg";
import stolikEnzo from "@/assets/pics/our-products/stolik-enzo.jpg";
import dm1 from "@/assets/pics/our-products/drewnianamuszla/dm1.jpg";
import dm2 from "@/assets/pics/our-products/drewnianamuszla/dm2.jpg";
import retroHarmonia1 from "@/assets/pics/our-products/konsole/retroharmonia/rh1.jpg";
import retroHarmonia2 from "@/assets/pics/our-products/konsole/retroharmonia/rh2.jpg";
import retroImpuls1 from "@/assets/pics/our-products/konsole/retroimpuls/ri1.jpg";
import retroImpuls2 from "@/assets/pics/our-products/konsole/retroimpuls/ri2.jpg";
import vinylLoft1 from "@/assets/pics/our-products/konsole/vinylloft/vl1.jpg";
import vinylLoft2 from "@/assets/pics/our-products/konsole/vinylloft/vl2.jpg";

export type ProductCategory = "Stoliki" | "Domowe akcenty" | "Konsole";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  image: StaticImageData;
  images?: StaticImageData[];
  imagePosition?: "left" | "center" | "right";
  alt: string;
  lead: string;
  specs?: { label: string; value: string }[];
  price?: string;
};

export const productCategories: ProductCategory[] = [
  "Stoliki",
  "Domowe akcenty",
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
    category: "Stoliki",
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
    slug: "drewniana-muszla",
    name: "Drewniana Muszla",
    category: "Stoliki",
    image: dm1,
    images: [dm1, dm2],
    alt: "Drewniana Muszla — produkt pracowni TAKA",
    lead: "Stolik o organicznej, muszlowej formie — ciepło drewna i miękka linia.",
  },
  {
    slug: "domek-roof",
    name: "Domek Roof",
    category: "Domowe akcenty",
    image: domekDlaPsa,
    alt: "Domek Roof — produkt pracowni TAKA",
    lead: "Domek dla psa — wnętrze, które kończy się na kanapie.",
  },
  {
    slug: "wine-rack",
    name: "Wine Rack",
    category: "Domowe akcenty",
    image: wineRack1,
    images: [wineRack1, wineRack2],
    imagePosition: "left",
    alt: "Wine Rack — produkt pracowni TAKA",
    lead: "Autorski element wyposażenia domu, projektowany i wykonywany w naszej pracowni.",
  },
  {
    slug: "lampa-alma",
    name: "Lampa Alma",
    category: "Domowe akcenty",
    image: lampaOkno,
    alt: "Lampa Alma — produkt pracowni TAKA",
    lead: "Lampa o konstrukcji nawiązującej do okna. Światło ukierunkowane, konstrukcja lekka.",
  },
  {
    slug: "konsola-retro-harmonia",
    name: "Konsola Retro Harmonia",
    category: "Konsole",
    image: retroHarmonia1,
    images: [retroHarmonia1, retroHarmonia2],
    imagePosition: "left",
    alt: "Konsola Retro Harmonia — produkt pracowni TAKA",
    lead: "Konsola o retro formie, która porządkuje wnętrze i nadaje mu charakter.",
  },
  {
    slug: "konsola-retro-impuls",
    name: "Konsola Retro Impuls",
    category: "Konsole",
    image: retroImpuls1,
    images: [retroImpuls1, retroImpuls2],
    imagePosition: "left",
    alt: "Konsola Retro Impuls — produkt pracowni TAKA",
    lead: "Smukła konsola z wyrazistym detalem — do przedpokoju, salonu lub sypialni.",
  },
  {
    slug: "konsola-vinyl-loft",
    name: "Konsola Vinyl Loft",
    category: "Konsole",
    image: vinylLoft1,
    images: [vinylLoft1, vinylLoft2],
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
  image: showcase,
  alt: "Produkty pracowni TAKA — zdjęcie zbiorcze",
};
