# taka-pracownia-architektoniczna

Strona pracowni architektonicznej / wnętrzarskiej — Next.js 16 (App Router) + Tailwind CSS 4.

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produkcyjny
npm run start    # podgląd builda
npm run lint     # eslint
```

## Struktura

- `src/app/` — routing (App Router), `globals.css` z tokenami designu
- `src/components/` — nagłówek, stopka, sekcje, galeria, formularz kontaktowy
- `src/data/` — treści strony (portfolio, zespół, proces) — jedno miejsce do edycji
- `public/` — assety statyczne

## Multimedia

Zdjęcia pochodzą z [Unsplash](https://unsplash.com) i [Pexels](https://pexels.com)
(licencje do darmowego użycia komercyjnego) i są serwowane przez `next/image`
z optymalizacją. Film w sekcji hero — [Pexels](https://pexels.com).
Linki do źródeł znajdują się w `src/data/portfolio.ts` oraz w stopce.

## Dane do podmiany

Placeholdery (e-mail, telefon, adres, NIP, social) są w `src/data/site.ts`.