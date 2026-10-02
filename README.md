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
| Zespół, zasady, cennik, FAQ | `src/app/o-nas`, `src/app/cooperacja` |
| Domena w sitemap/robots/OG | `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx` |
| Mapa (dziś OpenStreetMap, w placeholderze Warszawa) | `src/app/kontakt/page.tsx` |

## Multimedia

Zdjęcia z [Unsplash](https://unsplash.com), film w hero z [Pexels](https://pexels.com)
— licencje pozwalają na użycie komercyjne. W stopce i w lightboxie są kredyty
autorskie. To materiały poglądowe: **podmień je na własne realizacje**
(w `logo/Logo.jpeg` masz już swoje logo).

Zdjęcia serwowane są wprost z CDN (`images.unoptimized: true`), bo na GitHub
Pages nie ma serwera optymalizującego obrazy. Zapytania mają parametry
`?auto=format&fit=crop&q=75`, więc pliki są rozsądnego rozmiaru.