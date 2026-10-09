export const site = {
  name: "TAKA",
  fullName: "TAKA pracownia architektoniczna",
  tagline: "Pracownia architektury wnętrz",
  claim:
    "Wnętrza, w których chce się mieszkać. Projektujemy od pierwszej rozmowy do ostatniej książki z wyposażeniem.",
  description:
    "TAKA to pracownia architektury wnętrz realizująca mieszkania, domy, biura i wnętrza komercyjne. Kompleksowo: koncepcja, projekt, nadzór nad wykonaniem.",
  founded: "",
  city: "Gdańsk Oliwa",
  country: "Polska",
  email: "kontakt@takadesign.studio",
  phone: "+48 500 000 000",
  phoneHref: "+48500000000",
  address: {
    street: "ul. Przykładowa 12/4",
    postal: "80-322",
    city: "Gdańsk Oliwa",
  },

  social: [
    { label: "Instagram", href: "https://instagram.com" },
    //{ label: "Facebook", href: "https://facebook.com" },
    //{ label: "Pinterest", href: "https://pinterest.com" },
    //{ label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

export const nav = [
  { label: "O nas", href: "/o-nas" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Oferta", href: "/cooperacja" },
  { label: "Nasze produkty", href: "/produkty" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const stats = [];

export const services = [
  {
    title: "Projekt wnętrz mieszkalnych",
    body: "Mieszkania, domy jednorodzinne i apartamenty. Od układu funkcjonalnego, przez materiały i światło, po ostatni kubek na półce.",
  },
  {
    title: "Nadzór autorski i realizacja",
    body: "Jesteśmy na budowie. Kontrolujemy wykonawców, materiały i harmonogram, żeby projekt nie rozjechał się w trakcie budowy.",
  },
  {
    title: 'Stylizacja i wykończenie "pod klucz"',
    body: "Kompletujemy wnętrze jako spójną całość - nie składamy projektu z przypadkowych elementów.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Rozmowa i spotkanie",
    body: "Poznajemy Wasze potrzeby, budżet i styl życia. Na rozmowę rezerwujemy około godziny - czasem to wystarczy, czasem spotkanie trwa dłużej. Zawsze zostaje coś do przemyślenia.",
  },
  {
    step: "02",
    title: "Inwentaryzacja i koncepcja",
    body: "Mierzymy mieszkanie, sprawdzamy stan instalacji i układ ścian. Powstają warianty układu funkcjonalnego i kierunek stylistyczny — do Waszej akceptacji.",
  },
  {
    step: "03",
    title: "Projekt autorski",
    body: "Rysunki, rzuty, przekroje, dobór materiałów, kolory i światło. Na tym etapie podajemy wycenę wykonawczą opartą na konkretnych materiałach i robociznach.",
  },
  {
    step: "04",
    title: "Realizacja i nadzór",
    body: "Wybór wykonawcy, harmonogram, cotygodniowe wizyty na budowie, rozstrzyganie kolizji w trakcie. Wszystko spięte w jeden proces, nad którym w pełni czuwamy.",
  },
  {
    step: "05",
    title: "Wyposażenie i przekazanie",
    body: "Zamawiamy meble, oświetlenie i dodatki, montujemy, sprzątamy. Oddajemy wnętrze gotowe do wejścia — z książką realizacji i listą dostawców.",
  },
] as const;

export const principles = [
  {
    title: "Jasny budżet, jasne decyzje",
    body: "Zanim powstanie pierwszy rysunek, mówimy wprost, ile kosztuje realizacja i wskazujemy miejsca, w których da się zaoszczędzić bez straty na ostatecznym efekcie.",
  },
  {
    title: "Jeden projekt, dwa spojrzenia.",
    body: "Analizujemy każdą przestrzeń wspólnie, dając Ci to, co najlepsze z obu naszych specjalizacji. Żadnych głuchych telefonów i przypadkowych podwykonawców - rozmawiasz bezpośrednio z nami.",
  },
  {
    title: "Materiały - jakość, która nie przemija",
    body: "Dobieramy wykończenia pod realną eksploatację. Podłoga ma wytrzymać 20 lat, nie 20 zdjęć na Pinterest.",
  },
  {
    title: "Detale, których nie widać na zdjęciach",
    body: "Gniazda, wyloty, dostęp do filtrów, wysokość blatu. 90% udanej realizacji jest zapisane w warstwie, której klient nigdy nie zobaczy.",
  },
] as const;

export const cooperationTypes = [
  {
    title: "Inwestor prywatny",
    body: "Mieszkanie, dom, apartament. Najczęstszy scenariusz: zakup lub sprzedaż lokalu, potrzeba układu i charakteru.",
    points: [
      "Projekt wnętrza",
      "Nadzór autorski",
      "Kompletacja",
      "Po wykonaniu",
    ],
  },
  {
    title: "Firma i usługi",
    body: "Biuro, recepcja, strefa spotkań, showroom. Wnętrze, które pracuje razem z ludźmi, którzy w nim siedzą.",
    points: [
      "Koncepcja",
      "Projekt wykonawczy",
      "Meble na wymiar",
      "Serwis po montażu",
    ],
  },
  {
    title: "Hotelarstwo i gastronomia",
    body: "Lobby, restauracje, apartamenty na wynajem. Standardy, które wytrzymają dużą rotację gości i sezonowość.",
    points: [
      "Koncepcja i charakter",
      "Specyfikacja materiałowa",
      "Proces zakupowy",
      "Serwis wykonawczy",
    ],
  },
] as const;

export const collaborators = [
  "Generalny wykonawca",
  "Projektant branżowy",
  "Architekt konstrukcji",
  "Instalacje i wentylacja",
  "Producenci mebli na wymiar",
  "Firmy wykończeniowe",
  "Oświetlenie i elektryka",
  "Dostawcy materiałów",
] as const;

export const reviews = [
 
] as const;
