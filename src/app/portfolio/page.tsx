import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Realizacje pracowni TAKA: mieszkania, domy, kuchnie, biura i wnętrza komercyjne. Zobacz projekty, zakresy i metraże.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Rzeczy, w których się mieszka"
        intro="Projekty z ostatnich lat: mieszkania, domy, biura i wnętrza komercyjne. Kliknij realizację, żeby zobaczyć szczegóły i zakres prac."
        meta={["140+ realizacji", "6 kategorii", "2014–2026"]}
      />
      <section className="container-x pb-24 md:pb-36">
        <PortfolioGallery showFilters />
      </section>
    </>
  );
}