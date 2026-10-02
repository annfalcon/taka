"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { projectImages, type Project } from "@/data/portfolio";

export function Lightbox({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);

  const images = project ? projectImages(project) : [];

  const close = useCallback(() => onClose(), [onClose]);

  const step = useCallback(
    (dir: number) => {
      if (images.length < 2) return;
      setIndex((i) => (i + dir + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, close, step]);

  if (!project) return null;

  const current = images[Math.min(index, images.length - 1)];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-90 animate-[rise_0.4s_var(--ease-out-expo)]"
    >
      <button
        type="button"
        aria-label="Zamknij podgląd"
        onClick={close}
        className="absolute inset-0 h-full w-full cursor-zoom-out bg-ink/92 backdrop-blur-sm"
      />

      <div className="relative flex h-full flex-col overflow-y-auto">
        <div className="container-x flex items-center justify-between py-5">
          <div>
            <p className="eyebrow text-paper/50">
              {project.category} · {project.year} · {project.area}
            </p>
            <h2 className="mt-1.5 font-display text-2xl text-paper md:text-3xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
            aria-label="Zamknij"
          >
            ✕
          </button>
        </div>

        <div className="container-x flex-1 pb-8">
          <div className="relative mx-auto aspect-4/3 w-full max-w-5xl overflow-hidden bg-ink-2 md:aspect-16/10">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-cover"
              quality={85}
            />
          </div>

          {images.length > 1 ? (
            <div className="mx-auto mt-4 flex max-w-5xl items-center justify-between">
              <button
                type="button"
                onClick={() => step(-1)}
                className="border-paper/25 text-paper hover:bg-paper hover:text-ink rounded-full border px-5 py-2 text-sm transition-colors"
              >
                ← Poprzednie
              </button>
              <span className="text-paper/50 text-sm tabular-nums">
                {index + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="border-paper/25 text-paper hover:bg-paper hover:text-ink rounded-full border px-5 py-2 text-sm transition-colors"
              >
                Następne →
              </button>
            </div>
          ) : null}

          <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-paper/75 text-base leading-relaxed md:text-lg">
                {project.summary}
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 text-sm md:grid-cols-3">
                <div>
                  <dt className="text-paper/40">Lokalizacja</dt>
                  <dd className="mt-1 text-paper">{project.place}</dd>
                </div>
                <div>
                  <dt className="text-paper/40">Metraż</dt>
                  <dd className="mt-1 text-paper">{project.area}</dd>
                </div>
                <div>
                  <dt className="text-paper/40">Rok</dt>
                  <dd className="mt-1 text-paper">{project.year}</dd>
                </div>
                <div className="col-span-2 md:col-span-3">
                  <dt className="text-paper/40">Zakres</dt>
                  <dd className="mt-1 text-paper">{project.scope}</dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-5">
              <p className="text-paper/40 text-[0.65rem] tracking-[0.18em] uppercase">
                Zdjęcie
              </p>
              <a
                href={project.credit.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-paper/70 hover:text-paper mt-2 inline-block text-sm underline underline-offset-4"
              >
                {project.credit.photographer} · Unsplash
              </a>
              <Link
                href="/kontakt"
                onClick={close}
                className="mt-8 block rounded-full bg-paper px-6 py-3.5 text-center text-sm text-ink transition-colors hover:bg-clay hover:text-paper"
              >
                Chcę podobne wnętrze
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}