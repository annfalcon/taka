"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  productCategories,
  products,
  type Product,
  type ProductCategory,
} from "@/data/products";
import { ProductLightbox } from "./ProductLightbox";

const ALL = "Wszystkie" as const;
type Filter = ProductCategory | typeof ALL;

export function ProductGallery() {
  const [filter, setFilter] = useState<Filter>(ALL);
  const [active, setActive] = useState<Product | null>(null);

  const list = useMemo(
    () => (filter === ALL ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="no-scrollbar -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:mb-16 md:flex-wrap md:px-0">
        {([ALL, ...productCategories] as Filter[]).map((opt) => {
          const on = filter === opt;
          const count =
            opt === ALL ? products.length : products.filter((p) => p.category === opt).length;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setFilter(opt)}
              aria-pressed={on}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
                on
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {opt}
              <span className={on ? "text-paper/50 ml-2" : "text-muted/60 ml-2"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={p.slug} className="group">
            <button
              type="button"
              onClick={() => setActive(p)}
              className="block w-full cursor-zoom-in text-left"
              aria-label={`Powiększ: ${p.name}`}
            >
              <div className="relative aspect-4/5 overflow-hidden bg-paper-2">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-xl leading-tight">{p.name}</h2>
                <span className="text-muted shrink-0 text-xs">{p.category}</span>
              </div>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">{p.lead}</p>
            </button>
          </li>
        ))}
      </ul>

      <ProductLightbox
        key={active?.slug ?? "none"}
        product={active}
        onClose={() => setActive(null)}
      />
    </>
  );
}