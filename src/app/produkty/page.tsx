import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductGallery } from "@/components/ProductGallery";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { products, productsCover, productsIntro } from "@/data/products";

export const metadata: Metadata = {
  title: "Nasze produkty",
  description:
    "Lampy, stoliki, biurka i drobiazgi projektowane i wytwarzane przez pracownię TAKA. Produkty z małych serii.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nasze produkty"
        title="Rzeczy, które robimy własnymi rękami"
        intro={productsIntro}
        meta={[`${products.length} produktów`, "Małe serie", "Projekt i wykonanie"]}
        image={productsCover.image}
        imageAlt={productsCover.alt}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <ProductGallery />
        </div>
      </section>

      {/* Dlaczego własne produkty */}
      <section className="bg-paper-2 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Dlaczego własne"
            title="Bo w projekcie zawsze brakuje jednej rzeczy"
            intro="Pracując nad wnętrzami, ciągle słyszymy to samo: „szkoda, tylko że tej lampy nie ma normalnie”. Postanowiliśmy zrobić te rzeczy sami."
          />

          <ul className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {[
              {
                title: "Projektowane pod wnętrze",
                body: "Każdy produkt powstaje przy okazji konkretnego projektu. Wiemy, jak się zachowuje przy określonym świetle i na tle konkretnej ściany — bo sami to zainstalowaliśmy.",
              },
              {
                title: "Małe serie",
                body: "Robimy pojedyncze sztuki i krótkie serie. Nie utrzymujemy magazynu, więc nie zostaniemy z pięćset lamp, których nikt nie chce.",
              },
              {
                title: "Poprawki po Twojej stronie",
                body: "Jak coś nie pasuje — przyjeżdżamy. Albo odbieramy i przerabiamy. Przy małej skali to jest realne, przy dużej już nie.",
              },
            ].map((c, i) => (
              <Reveal
                as="li"
                key={c.title}
                delay={i * 80}
                className="border-line border-t pt-7"
              >
                <h3 className="font-display text-2xl leading-tight">{c.title}</h3>
                <p className="text-muted mt-4 leading-relaxed">{c.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120} className="mt-16">
            <p className="text-muted max-w-2xl text-sm leading-relaxed">
              Interesuje Cię któryś z tych produktów albo masz pomysł na
              następny? Napisz do nas bezpośrednio.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}