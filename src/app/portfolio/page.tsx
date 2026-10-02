import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Realizacje pracowni TAKA — mieszkania projektowane i realizowane od koncepcji po wyposażenie.",
};

export default function PortfolioPage() {
  const photoCount = projects.reduce((n, p) => n + p.photos.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Rzeczy, w których się mieszka"
        intro="Kliknij realizację, żeby przejść przez poszczególne pomieszczenia."
        meta={[
          `${projects.length} ${projects.length === 1 ? "realizacja" : "realizacji"}`,
          `${photoCount} zdjęć`,
          "kategoria: mieszkania",
        ]}
      />
      <section className="container-x pb-24 md:pb-36">
        <PortfolioGallery showFilters />
      </section>
    </>
  );
}