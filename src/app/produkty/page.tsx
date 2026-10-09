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
            intro="Projektując wnętrza, ciągle słyszeliśmy to samo: „Szkoda, że tego stolika nie można nigdzie kupić”. W końcu postanowiliśmy wziąć sprawy w swoje ręce i stworzyć go sami."
          />

          <ul className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {[
              {
                title: "Projektowane pod wnętrze",
                body: "Tworzymy produkty z myślą o konkretnych wnętrzach i sami je montujemy, dlatego doskonale wiemy, jak zachowają się w docelowym świetle i przestrzeni.",
              },
              {
                title: "Małe serie",
                body: "Tworzymy meble i dodatki, których nie znajdziesz nigdzie indziej. Tylko pojedyncze sztuki i limitowane serie - realizowane od początku do końca na Twoje indywidualne zamówienie.",
              },
              {
                title: "Poprawki po naszej stronie",
                body: "Kameralna skala produkcji pozwala nam na pełną elastyczność, dlatego jeśli cokolwiek wymaga korekty, przyjeżdżamy na miejsce lub zabieramy produkt do naszej pracowni na poprawki.",
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