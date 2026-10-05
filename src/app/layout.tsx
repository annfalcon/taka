import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/data/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taka-architektura.pl"),
  title: {
    default: `${site.fullName} — projekt wnętrz ${site.city}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "projekt wnętrz",
    "architekt wnętrz",
    "pracownia architektoniczna",
    "projektant wnętrz Gdańsk Oliwa",
    "aranżacja mieszkania",
    "wykończenie mieszkania",
  ],
  authors: [{ name: site.fullName }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: site.fullName,
    title: `${site.fullName} — projekt wnętrz`,
    description: site.description,
    url: "/",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f4f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          // Runs before paint so scroll-reveal styles apply without a flash.
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="min-h-dvh bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Przejdź do treści
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}