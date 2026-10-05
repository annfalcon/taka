# taka-pracownia-architektoniczna

Strona pracowni architektury wnętrz — **Next.js 16 (App Router) + Tailwind CSS 4**,
eksportowana statycznie do **GitHub Pages**.

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # → statyczny eksport w ./out
npm start          # podgląd eksportu (npx serve out)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run images     # przetworzy pics/ -> src/assets/pics/
```

`next start` **nie działa** przy `output: "export"` — do podglądu builda
używaj `npm start` albo dowolnego serwera statycznego.

## Wdrożenie na GitHub Pages

Push na `main` uruchamia `.github/workflows/deploy.yml`, który buduje stronę
i publikuje ją na `gh-pages`.

1. Utwórz repozytorium o nazwie **`taka`** (nazwa musi się zgadzać z `basePath`).
2. Wypchnij kod na `main`.
3. **Settings → Pages → Source: _GitHub Actions_**.
4. Strona będzie dostępna pod `https://<twoj-user>.github.io/taka`.

Jeśli zmienisz nazwę repozytorium, popraw `basePath` w `next.config.ts`.

### Własna domena
Ustaw `basePath: ""` w `next.config.ts` (bez podkreślenia!), zmień
`https://twojadomena.pl` w `sitemap.ts`, `robots.ts` i `metadataBase`
w `layout.tsx`. W `Settings → Pages` podaj domenę i włącz HTTPS.

### Dlaczego `public/.nojekyll`?
GitHub Pages buduje stronę Jekylliem, który ignoruje katalogi zaczynające się
od `_`. Bez pliku `.nojekyll` cały katalog `_next/` znika i strona jest biała.

## Formularz kontaktowy

Eksport statyczny nie ma backendu, więc formularz nie może POST-ować na własną
domenę. Są dwa warianty:

- **Bez konfiguracji (domyślnie)** — formularz otwiera klienta pocztowego
  gościa z gotową treścią. Działa od razu, bez rejestracji.
- **Z backendem** — ustaw `NEXT_PUBLIC_CONTACT_ENDPOINT` (np. w GitHub:
  *Settings → Secrets and variables → Actions → Variables*) na adres
  formularza z Formspree, Web3Forms, Basin lub własnej funkcji.
  Formularz wyśle tam dane jako JSON.

Bez tego endpointu zapytania nie trafiają do Ciebie automatycznie.

## Dane do podmiany

Cała treść jest placeholderem — przed publikacją wymień:

| Co | Gdzie |
|---|---|
| Dane firmy, telefon, e-mail, NIP, adres, social | `src/data/site.ts` |
| Realizacje w portfolio | `src/data/portfolio.ts` |
| **Produkty własne** | `src/data/products.ts` |
| Zespół, zasady, cennik, FAQ | `src/app/o-nas`, `src/app/cooperacja` |
| Domena w sitemap/robots/OG | `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx` |
| Mapa (dziś OpenStreetMap, w placeholderze Gdańsk Oliwa) | `src/app/kontakt/page.tsx` |

## Dodawanie zdjęć produktów

Oryginały trzymaj w `pics/` (katalog jest ignorowany przez git), a potem:

```bash
npm run images
```

Skrypt zmniejsza je do 1500 px, kompresuje do JPEG (q82) i **slugifikuje
nazwy plików oraz katalogów** — `Lampa okno.jpg` staje się `lampa-okno.jpg`,
a `our products/` staje się `our-products/`, bo spacje i polskie znaki
w URL-u są kłopotliwe. Wynik ląduje w `src/assets/pics/` i to właśnie ten
katalog jest w repozytorium.

Struktura oryginałów odwzorowuje to, co jest na stronie:

```
pics/
  our products/       -> src/assets/pics/our-products/    (strona /produkty)
  Portfolio/a_1/      -> src/assets/pics/portfolio/a-1/   (kategoria Mieszkania)
```

Zdjęcia są **importowane jako moduły**, a nie podawane jako ścieżki tekstowe.
`next/image` nie dokleja `basePath` do zwykłego stringa w `src`, więc pliki
z `public/` gubiłyby się przy wdrożeniu w podkatalogu (`/taka/`) — każde
zdjęcie kończyłoby się 404. Import przez bundler sam dopisuje `basePath`
i nadaje nazwy z hashem.

Po dodaniu nowego produktu dopisz wpis w `src/data/products.ts`,
a po zdjęciach nowej realizacji — w `src/data/portfolio.ts`
(`specs`/`price` oraz `year`/`place`/`area`/`scope` są opcjonalne —
puste pola nie są w ogóle renderowane).

## Zdjęcia stockowe

W `src/data/portfolio.ts` została już tylko jedna kategoria (`Mieszkania`)
z własnymi zdjęciami. Nadal korzystamy z kilku zdjęć stockowych poza
portfolio — plakat w hero na stronie głównej oraz dwie ilustracje
w sekcjach „Proces” i „Skala”. Źródła są w `heroPoster.photo` oraz
w `stockImage()` w `src/data/portfolio.ts` — podmień je na własne,
gdy będziesz mieć zdjęcia z realizacji.

## Multimedia

Zdjęcia z [Unsplash](https://unsplash.com) i [Pexels](https://pexels.com)
— licencje pozwalają na użycie komercyjne. W stopce i w lightboxie są kredyty
autorskie. To materiały poglądowe: **podmień je na własne realizacje**
(w `logo/Logo.jpeg` masz już swoje logo).

Zdjęcia serwowane są wprost z CDN (`images.unoptimized: true`), bo na GitHub
Pages nie ma serwera optymalizującego obrazy. Zapytania mają parametry
`?auto=format&fit=crop&q=75`, więc pliki są rozsądnego rozmiaru.