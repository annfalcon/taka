"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import type { Product } from "@/data/products";
import { site } from "@/data/site";

export function ProductLightbox({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label={product.name} className="fixed inset-0 z-90">
      <button
        type="button"
        aria-label="Zamknij podgląd"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-zoom-out bg-ink/92 backdrop-blur-sm"
      />

      <div className="relative flex h-full flex-col overflow-y-auto">
        <div className="container-x flex items-center justify-between gap-6 py-5">
          <div>
            <p className="eyebrow text-paper/50">{product.category}</p>
            <h2 className="mt-1.5 font-display text-2xl text-paper md:text-3xl">
              {product.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
            aria-label="Zamknij"
          >
            ✕
          </button>
        </div>

        <div className="container-x flex-1 pb-10">
          <div className="relative mx-auto aspect-4/5 w-full max-w-2xl overflow-hidden bg-ink-2">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain"
              quality={85}
            />
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <p className="text-paper/75 leading-relaxed">{product.lead}</p>

            {product.specs?.length ? (
              <dl className="border-paper/15 mt-8 grid gap-x-10 gap-y-4 border-t pt-6 sm:grid-cols-2">
                {product.specs.map((s) => (
                  <div key={s.label}>
                    <dt className="text-paper/40 text-xs">{s.label}</dt>
                    <dd className="mt-1 text-paper text-sm">{s.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {product.price ? (
                <span className="font-display text-paper-2 text-3xl">
                  {product.price}
                </span>
              ) : null}
              <Link
                href="/kontakt"
                onClick={onClose}
                className="rounded-full bg-paper px-7 py-3.5 text-center text-sm text-ink transition-colors hover:bg-clay hover:text-paper sm:ml-auto"
              >
                Zapytaj o {product.name}
              </Link>
            </div>

            <p className="text-paper/40 mt-8 text-xs leading-relaxed">
              Pytania? Napisz na{" "}
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>{" "}
              lub zadzwoń: {site.phone}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}