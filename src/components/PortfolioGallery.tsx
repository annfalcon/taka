"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  categories,
  projects,
  type Category,
  type Project,
} from "@/data/portfolio";
import { Lightbox } from "./Lightbox";

const ALL = "Wszystkie" as const;
type Filter = Category | typeof ALL;

export function PortfolioGallery({
  showFilters = true,
  limit,
}: {
  showFilters?: boolean;
  limit?: number;
}) {
  const [filter, setFilter] = useState<Filter>(ALL);
  const [active, setActive] = useState<Project | null>(null);

  const list = useMemo(() => {
    const base =
      filter === ALL ? projects : projects.filter((p) => p.category === filter);
    return typeof limit === "number" ? base.slice(0, limit) : base;
  }, [filter, limit]);

  const options: Filter[] =
    showFilters && !limit ? [ALL, ...categories] : [ALL];

  return (
    <>
      {showFilters ? (
        <div className="no-scrollbar -mx-5 mb-12 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:mb-16 md:flex-wrap md:px-0">
          {options.map((opt) => {
            const on = filter === opt;
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
              </button>
            );
          })}
        </div>
      ) : null}

      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <li key={p.slug} className="group">
            <button
              type="button"
              onClick={() => setActive(p)}
              className="block w-full cursor-zoom-in text-left"
              aria-label={`Otwórz realizację: ${p.title}`}
            >
              <div className="relative aspect-4/5 overflow-hidden bg-paper-2">
                <Image
                  src={p.photo}
                  alt={p.title}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[0.65rem] tracking-[0.18em] text-paper/70 uppercase">
                    {p.category}
                    {p.year ? ` · ${p.year}` : ""}
                  </p>
                  <p className="mt-1.5 font-display text-2xl text-paper">
                    {p.title}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl leading-tight">
                  {p.title}
                </h3>
                {p.area ? (
                  <span className="text-muted shrink-0 text-xs">{p.area}</span>
                ) : null}
              </div>
              {p.place || p.scope ? (
                <p className="text-muted mt-1 text-sm">
                  {[p.place, p.scope].filter(Boolean).join(" · ")}
                </p>
              ) : (
                <p className="text-muted mt-1 text-sm">
                  {p.photos.length} zdjęć w realizacji
                </p>
              )}
            </button>
          </li>
        ))}
      </ul>

      {list.length === 0 ? (
        <p className="text-muted py-20 text-center">Brak realizacji w tej kategorii.</p>
      ) : null}

      {/* key remounts the lightbox per project, resetting the slide index */}
      <Lightbox
        key={active?.slug ?? "none"}
        project={active}
        onClose={() => setActive(null)}
      />
    </>
  );
}