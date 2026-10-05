export const site = {
  name: "TAKA",
  fullName: "TAKA pracownia architektoniczna",
  tagline: "Pracownia architektury wnętrz",
  claim: "Wnętrza, w których chce się mieszkać. Projektujemy od pierwszej rozmowy do ostatniej książki z wyposażeniem.",
  description:
    "TAKA to pracownia architektury wnętrz realizująca mieszkania, domy, biura i wnętrza komercyjne. Kompleksowo: koncepcja, projekt, nadzór nad wykonaniem.",
  founded: "2014",
  city: "Gdańsk Oliwa",
  country: "Polska",
  email: "kontakt@taka-architektura.pl",
  phone: "+48 500 000 000",
  phoneHref: "+48500000000",
  address: {
    street: "ul. Przykładowa 12/4",
    postal: "80-006",
    city: "Gdańsk Oliwa",
  },
  hours: "pon.–pt. 9:00–18:00",
  nip: "000 00 00 000",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

export const nav = [
  { label: "O nas", href: "/o-nas" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Współpraca", href: "/cooperacja" },
  { label: "Nasze produkty", href: "/produkty" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const stats = [
  { value: "11", label: "lat praktyki" },
  { value: "140+", label: "zrealizowanych wnętrz" },
  { value: "38", label: "m² średnio na projekt" },
  { value: "9", label: "nagród i wyróżnień" },
];

export const services = [
  {
    title: "Projekt wnętrz mieszkalnych",
    body: "Mieszkania, domy jednorodzinne i apartamenty. Od układu funkcjonalnego, przez materiały i światło, po ostatni kubek na półce.",
  },
  {
    title: "Projekt wnętrz komercyjnych",
    body: "Biura, showroomy, restauracje, hotele i gabinety. Wnętrza, które pracują na markę i na przychód.",
  },
  {
    title: "Nadzór autorski i realizacja",
    body: "Jesteśmy na budowie. Kontrolujemy wykonawców, materiały i harmonogram, żeby projekt nie rozjechał się w trakcie budowy.",
  },
  {
    title: "Zdobycze i wykończenie",
    body: "Dobór farb, tkanin, oświetlenia i dodatków. Kompletujemy wnętrze jako całość — nie składamy projektu z przypadkowych elementów.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Rozmowa i spotkanie",
    body: "Poznajemy Wasze potrzeby, budżet i styl życia. Mamy już około godziny — czasem wystarczy, czasem spotkanie trwa dłużej. Zawsze zostaje coś do przemyślenia.",
    meta: "1–2 tygodnie",
  },
  {
    step: "02",
    title: "Inwentaryzacja i koncepcja",
    body: "Mierzymy mieszkanie, sprawdzamy stan instalacji i układ ścian. Powstają warianty układu funkcjonalnego i kierunek stylistyczny — do akceptacji.",
    meta: "2–4 tygodnie",
  },
  {
    step: "03",
    title: "Projekt autorski",
    body: "Rysunki, rzuty, przekroje, dobór materiałów, kolory i światło. Na tym etapie zespół podaje wycenę wykonawczą na konkretnych materiałach i robociznach.",
    meta: "6–10 tygodni",
  },
  {
    step: "04",
    title: "Realizacja i nadzór",
    body: "Wybór wykonawcy, harmonogram, cotygodniowe wizyty na budowie, rozstrzyganie kolizji w trakcie. Wszystko spięte w jeden proces.",
    meta: "3–9 miesięcy",
  },
  {
    step: "05",
    title: "Wyposażenie i przekazanie",
    body: "Zamawiamy meble, oświetlenie i dodatki, montujemy, sprzątamy. Oddajemy wnętrze gotowe do wejścia — z książką realizacji i listą dostawców.",
    meta: "4–8 tygodni",
  },
] as const;

export const principles = [
  {
    title: "Jasny budżet, jasne decyzje",
    body: "Zanim powstanie pierwszy rysunek, mówimy wprost, ile kosztuje wykonanie i gdzie są miejsca, na których da się zaoszczędzić bez straty na efektcie.",
  },
  {
    title: "Jeden projektant, cały projekt",
    body: "Nie dzielimy zlecenia między kilka osób. Ten, kto z Tobą rozmawia, prowadzi projekt do końca i bierze za niego odpowiedzialność.",
  },
  {
    title: "Materiały, które znoszą czas",
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
    points: ["Projekt wnętrza", "Nadzór autorski", "Kompletacja", "Po wykonaniu"],
  },
  {
    title: "Inwestor deweloperski",
    body: "Apartamenty na sprzedaż, strefy wspólne, recepcje, modele. Współpraca w pakietach, terminowo i powtarzalnie.",
    points: ["Standardy wykończenia", "Książka standardu", "Partnerskie wykonawstwo", "Terminowość"],
  },
  {
    title: "Firma i usługi",
    body: "Biuro, recepcja, strefa spotkań, showroom. Wnętrze, które pracuje razem z ludźmi, którzy w nim siedzą.",
    points: ["Koncepcja", "Projekt wykonawczy", "Meble na wymiar", "Serwis po montażu"],
  },
  {
    title: "Hotelarstwo i gastronomia",
    body: "Lobby, restauracje, apartamenty na wynajem. Standardy, które wytrzymają dużą rotację gości i sezonowość.",
    points: ["Koncepcja i charakter", "Specyfikacja materiałowa", "Proces zakupowy", "Serwis wykonawczy"],
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
  {
    quote:
      "Mieliśmy wąski budżet i 38 m² do zorganizowania w szybkim tempie. Projekt dostaliśmy w cztery tygodnie, a ekipa montażowa nie potrzebowała ani jednej dodatkowej wizyty. Do dziś nie ma w tym mieszkaniu nic, czego by żałaliśmy.",
    author: "A. i M. Kowalczykowie",
    role: "Mieszkanie 38 m², Praga",
  },
  {
    quote:
      "Najbardziej doceniam jedną rzecz: nikt nie próbował nas sprzedawać. Dostaliśmy trzy warianty, uczciwe koszty i informację, że to rozwiązanie będzie droższe o 18 tysięcy — z wyjaśnieniem dlaczego.",
    author: "Anna Lewandowska",
    role: "Dom jednorodzinny, Podkowa Leśna",
  },
  {
    quote:
      "Zlecaliśmy 24 apartamenty w jednym pakiecie. TAKA poprowadziła to jak zespół projektowy, nie jak wykonawca z rysunkami. Dzięki standardowi wykończenia mamy teraz powtarzalny produkt do kolejnych etapów.",
    author: "Piotr Zawadzki",
    role: "Deweloper, 24 apartamenty",
  },
] as const;