export type Category =
  | "Mieszkania"
  | "Kuchnie"
  | "Dom"
  | "Biuro"
  | "Komercyjne"
  | "Detale";

export type Credit = {
  photographer: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  place: string;
  area: string;
  scope: string;
  summary: string;
  /** Unsplash CDN photo id, e.g. `photo-1605774337664-7a846e9cdf17` */
  photo: string;
  photos: { photo: string; alt: string }[];
  credit: Credit;
};

const u = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&q=75`;

export const categories: Category[] = [
  "Mieszkania",
  "Kuchnie",
  "Dom",
  "Biuro",
  "Komercyjne",
  "Detale",
];

export const projects: Project[] = [
  {
    slug: "apartament-jeziorna",
    title: "Apartament Jeziorna",
    category: "Mieszkania",
    year: "2024",
    place: "Warszawa, Mokotów",
    area: "72 m²",
    scope: "Projekt wnętrza, nadzór, kompletacja",
    summary:
      "Układ otwarty w kierunku okna, trzy strefy: praca, odpoczynek, jadalnia. Ciepły dąb, tynk wapienny i dużo pustej przestrzeni — mieszkanie, które oddechające.",
    photo: "photo-1605774337664-7a846e9cdf17",
    photos: [
      { photo: "photo-1605774337664-7a846e9cdf17", alt: "Minimalistyczny salon z szarym sofa i drewnianym stolikiem" },
      { photo: "photo-1631510390389-c1e4fb20ff31", alt: "Fotel przy oknie, miękkie światło dzienne" },
      { photo: "photo-1513694203232-719a280e022f", alt: "Kommoda obok sofa" },
    ],
    credit: {
      photographer: "Unsplash",
      url: "https://unsplash.com/photos/gray-2-seat-sofa-near-brown-wooden-coffee-table-77JACslA8G0",
    },
  },
  {
    slug: "mieszkanie-polska",
    title: "Mieszkanie Polska",
    category: "Mieszkania",
    year: "2023",
    place: "Warszawa, Śródmieście",
    area: "48 m²",
    scope: "Projekt wnętrza, kompletacja",
    summary:
      "Klasyczne mieszkanie z 1937 roku wróciło do formy: wysokie sufity, sztukateria, parkiet z dokładką. Nowość weszła dyskretnie — w postaci światła i koloru.",
    photo: "photo-1778731525538-3bbeaac46ece",
    photos: [
      { photo: "photo-1778731525538-3bbeaac46ece", alt: "Luksusowy salon z białymi sofami, kominkiem i żyrandolem" },
      { photo: "photo-1758915753369-6a33c7bc1d76", alt: "Nowoczesny salon z kominkiem i lampą wiszącą" },
      { photo: "photo-1593696140826-c58b021acf8b", alt: "Czarno-biały stół i krzesła, kontrastowy układ" },
    ],
    credit: {
      photographer: "Franco Debartolo",
      url: "https://unsplash.com/photos/modern-living-room-with-white-sofas-fireplace-and-chandelier-VB6h-h54qIk",
    },
  },
  {
    slug: "apartament-nad-parkiem",
    title: "Apartament Nad Parkiem",
    category: "Mieszkania",
    year: "2024",
    place: "Kraków, Stare Miasto",
    area: "91 m²",
    scope: "Projekt wnętrza, nadzór autorski",
    summary:
      "Trzy pokoje, dwie łazienki i pełna ekspozycja zieleni. Projektowaliśmy wokół widoku: wszystkie ściany w strefie dziennej skierowane do okna, reszta kameralna.",
    photo: "photo-1761319914911-71b059a655d8",
    photos: [
      { photo: "photo-1761319914911-71b059a655d8", alt: "Przytulny salon z kominkiem i dużymi oknami" },
      { photo: "photo-1746476853109-224eb8812e9f", alt: "Elegacka zieleń, rośliny i wygodne meble" },
      { photo: "photo-1567016376408-0226e4d0c1ea", alt: "Skórzany fotel tuba przy ścianie, ciepły klimat" },
    ],
    credit: {
      photographer: "Clay Banks",
      url: "https://unsplash.com/photos/cozy-living-room-with-fireplace-and-large-windows-vNecZJJQRLE",
    },
  },
  {
    slug: "kuchnia-polska-pol",
    title: "Kuchnia Polska",
    category: "Kuchnie",
    year: "2025",
    place: "Warszawa, Wilanów",
    area: "18 m²",
    scope: "Projekt, zabudowa na wymiar, oświetlenie",
    summary:
      "Wyspa na środku, fronty bezuchwytowe, blat z konglomeratu. Wysoka szafka po sufit schowała spiżarnię — kuchnia wygląda na dwa razy większą niż jest.",
    photo: "photo-1671197244266-73129c97c096",
    photos: [
      { photo: "photo-1671197244266-73129c97c096", alt: "Nowoczesna kuchnia z blatami z marmuru i stołkami" },
      { photo: "photo-1502005097973-6a7082348e28", alt: "Biała wyspa kuchenna i szafki przy drzwiach szklanych" },
      { photo: "photo-1760072513457-651955c7074d", alt: "Zabudowa Poliform, wyspa z marmuru i okap" },
    ],
    credit: {
      photographer: "Unsplash",
      url: "https://unsplash.com/photos/a-modern-kitchen-with-marble-counter-tops-and-stools-1jy1WNfqHos",
    },
  },
  {
    slug: "kuchnia-grafit",
    title: "Kuchnia Grafit",
    category: "Kuchnie",
    year: "2024",
    place: "Gdańsk, Wrzeszcz",
    area: "14 m²",
    scope: "Projekt, dobór materiałów",
    summary:
      "Ciemna zabudawa i stalowe akcenty. Zamiast kafelków użyliśmy jednego dużego formatu kamienia, żeby nie rozbijać małej przestrzeni.",
    photo: "photo-1769739132671-ac41c439d51e",
    photos: [
      { photo: "photo-1769739132671-ac41c439d51e", alt: "Ciemna zabudowa kuchenna i duże przeszklenia" },
      { photo: "photo-1772567732902-2d239d957f29", alt: "Szare fronty i stalowe urządzenia" },
      { photo: "photo-1771862956702-4e8b247e28b5", alt: "Fronty z lampami wiszącymi" },
    ],
    credit: {
      photographer: "Sayless studios",
      url: "https://unsplash.com/photos/modern-kitchen-with-dark-cabinets-and-large-glass-doors-Ufl9eXzRc8U",
    },
  },
  {
    slug: "kuchnia-swiatlo",
    title: "Kuchnia Światło",
    category: "Kuchnie",
    year: "2023",
    place: "Poznań, Jeżyce",
    area: "22 m²",
    scope: "Projekt, meble, montaż",
    summary:
      "Białe fronty, drewniany sufit i okno nad zlewem. Najtańszy w realizacji projekt w portfolio — klient postawił na proporcje zamiast na detale.",
    photo: "photo-1643949915134-73a4c880f7c7",
    photos: [
      { photo: "photo-1643949915134-73a4c880f7c7", alt: "Białe szafki kuchenne z drewnianym sufitem" },
      { photo: "photo-1725257928373-dc6d2ac7b145", alt: "Otwarty układ kuchni i jadalni" },
      { photo: "photo-1757387240036-d7eb9b096c40", alt: "Jasna kuchnia, białe fronty i akcenty stylistyczne" },
    ],
    credit: {
      photographer: "Unsplash",
      url: "https://unsplash.com/photos/a-kitchen-with-white-cabinets-and-a-wooden-ceiling-PkepZpGteGQ",
    },
  },
  {
    slug: "jadalnia-dab",
    title: "Jadalnia Dąb",
    category: "Dom",
    year: "2025",
    place: "Podkowa Leśna",
    area: "184 m²",
    scope: "Projekt wnętrza, nadzór, wyposażenie",
    summary:
      "Dom jednorodzinny na działce leśnej. Konstrukcja zostawiona surowo, wyposażenie miękkie — cała robota polegała na podziale metra kwadratowego.",
    photo: "photo-1604578762246-41134e37f9cc",
    photos: [
      { photo: "photo-1604578762246-41134e37f9cc", alt: "Drewniany stół jadalniany z krzesłami" },
      { photo: "photo-1519710164239-da123dc03ef4", alt: "Biały fotel, okrągły stół i dywan" },
      { photo: "photo-1676538627353-03b8e1eff168", alt: "Długi korytarz z kafelkową podłogą i oknami" },
    ],
    credit: {
      photographer: "Unsplash",
      url: "https://unsplash.com/photos/black-and-white-wooden-table-and-chairs-wRzBarqn3hs",
    },
  },
  {
    slug: "biuro-studio",
    title: "Biuro Studio",
    category: "Biuro",
    year: "2025",
    place: "Warszawa, Wola",
    area: "210 m²",
    scope: "Koncepcja, projekt wykonawczy, meble na wymiar",
    summary:
      "Biuro dla dwudziestu osób w dawnej hali magazynowej. Podział na strefę cichą, wspólną i serwisową — wszystko jednym systemem meblowym.",
    photo: "photo-1755436612165-56c6bfa5218b",
    photos: [
      { photo: "photo-1755436612165-56c6bfa5218b", alt: "Domowe biuro, stanowisko pracy z komputerem" },
      { photo: "photo-1755436612984-cb18dd2efbf6", alt: "Minimalistyczne biurko w ciepłym świetle" },
      { photo: "photo-1753800558596-9ad08a31413c", alt: "Wizualizacja wnętrza, regały i światło pośrednie" },
    ],
    credit: {
      photographer: "Unsplash",
      url: "https://unsplash.com/photos/a-modern-home-office-desk-setup-with-a-computer-and-chair-xk8dimKIAaY",
    },
  },
  {
    slug: "recepcja-biurowa",
    title: "Recepcja Biurowa",
    category: "Biuro",
    year: "2024",
    place: "Kraków, Śródmieście",
    area: "85 m²",
    scope: "Projekt, meble na wymiar, montaż",
    summary:
      "Strefa wejściowa w budynku biurowym klasy A. Krzywizna drewnianej ściany rozwiązała akustykę i dała znak rozpoznawczy bez logo na froncie.",
    photo: "photo-1759038086403-c607d67bb245",
    photos: [
      { photo: "photo-1759038086403-c607d67bb245", alt: "Lobby z zakrzywioną drewnianą ścianą i barem" },
      { photo: "photo-1746173098661-45ae0ccb6030", alt: "Nowoczesna recepcja i strefa oczekiwania" },
      { photo: "photo-1756392740252-7bbb3ef8d521", alt: "Lobby hotelowe z dekoracjami świetlnymi" },
    ],
    credit: {
      photographer: "Neon Wang",
      url: "https://unsplash.com/photos/interior-of-a-modern-hotel-lobby-with-curved-wooden-walls-vEO-8ck28fY",
    },
  },
  {
    slug: "apartamenty-kolonia",
    title: "Apartamenty Kolonia",
    category: "Komercyjne",
    year: "2026",
    place: "Wrocław, Śródmieście",
    area: "24 × 41 m²",
    scope: "Koncepcja, standard wykończenia, książka standardu",
    summary:
      "24 apartamenty na sprzedaż. Trzy typy wykończenia, jeden zestaw materiałów — dzięki temu realizacja idzie równolegle i nie rozjeżdża się kosztowo.",
    photo: "photo-1775866914943-ba1415a35afc",
    photos: [
      { photo: "photo-1775866914943-ba1415a35afc", alt: "Luksusowe lobby z dużymi oknami" },
      { photo: "photo-1723516908282-b3c795e9416a", alt: "Lobby z holem schodowym prowadzącym na górę" },
      { photo: "photo-1646991761123-d83ce47c30c9", alt: "Lobby z fotelami i żyrandolem" },
    ],
    credit: {
      photographer: "Unsplash",
      url: "https://unsplash.com/photos/luxurious-hotel-lobby-with-modern-decor-and-large-windows-q2jfK0Fq6XA",
    },
  },
  {
    slug: "lobby-hotelowe",
    title: "Lobby Hotelowe",
    category: "Komercyjne",
    year: "2025",
    place: "Zakopane",
    area: "160 m²",
    scope: "Koncepcja charakteru, specyfikacja, nadzór",
    summary:
      "Hotel butikowy w górskim klimacie. Lobby musi działać o trzeciej w nocy i o trzeciej w południe — dlatego jedna tapeta, jedna paleta, zero ozdobności.",
    photo: "photo-1718687283852-4f4a5be2cb62",
    photos: [
      { photo: "photo-1718687283852-4f4a5be2cb62", alt: "Strefa wypoczynku z fotelami w jednym kolorze" },
      { photo: "photo-1755644046048-989506b73a5c", alt: "Nowoczesna strefa wypoczynku z kompozycją kwiatową" },
    ],
    credit: {
      photographer: "Unsplash",
      url: "https://unsplash.com/photos/a-room-with-a-bunch-of-blue-chairs-in-it-YEHNqHc_4Ls",
    },
  },
  {
    slug: "klatka-schodowa-szklo",
    title: "Klatka Schodowa — Szkło",
    category: "Detale",
    year: "2024",
    place: "Warszawa, Wola",
    area: "element komunikacyjny",
    scope: "Koncept materiałowy, uzgodnienia",
    summary:
      "Szkło i stal w miejscu, gdzie inni kładą tapetę. Projekt detalu, który miał zostać wyrzucony z budżetu, a został — bo zmienił całą klatkę.",
    photo: "photo-1749209698823-8b5c2076396b",
    photos: [
      { photo: "photo-1749209698823-8b5c2076396b", alt: "Szklana fasada i wewnętrzne schody z poręczą" },
      { photo: "photo-1774021793376-6dc8fb472358", alt: "Betonowe schody z metalową balustradą" },
      { photo: "photo-1749984739767-afd0cb96c3cb", alt: "Spiralne schody w budynku z surowego betonu" },
    ],
    credit: {
      photographer: "Declan Sun",
      url: "https://unsplash.com/photos/architectural-details-glass-facade-and-interior-staircase-dTaxNSbIxpA",
    },
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

export function projectImages(p: Project) {
  return p.photos.map((ph) => ({
    ...ph,
    src: u(ph.photo),
  }));
}

export function projectCover(p: Project) {
  return u(p.photo);
}