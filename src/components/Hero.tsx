import Image from "next/image";
import { heroVideo } from "@/data/portfolio";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  const poster = `https://images.unsplash.com/${heroVideo.poster}?auto=format&fit=crop&q=75`;

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink-2">
      <Image
        src={poster}
        alt="Nowoczesny salon z kominkiem i designerskimi meblami"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={82}
      />
      <HeroVideo src={heroVideo.src} />

      <div className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/35 to-ink/85" />

      <div className="container-x relative flex min-h-[92svh] flex-col justify-end pt-28 pb-14 md:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-paper/70 animate-rise">
            Pracownia architektury wnętrz · {`Warszawa`}
          </p>
          <h1
            className="mt-6 text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-paper animate-rise"
            style={{ animationDelay: "120ms" }}
          >
            Wnętrza,
            <br />
            w których
            <br />
            chce się mieszkać.
          </h1>
          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg animate-rise"
            style={{ animationDelay: "260ms" }}
          >
            Projektujemy mieszkania, domy, biura i wnętrza komercyjne —
            kompleksowo, od pierwszej rozmowy do ostatniej książki
            z wyposażeniem.
          </p>
        </div>

        <div
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 animate-rise"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="/portfolio"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-paper px-8 py-4 text-sm text-ink transition-colors hover:bg-clay hover:text-paper"
          >
            Zobacz realizacje
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-paper/35 px-8 py-4 text-sm text-paper transition-colors hover:border-paper hover:bg-paper/10"
          >
            Umów pierwszą rozmowę
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 bottom-6 hidden text-[0.6rem] tracking-[0.18em] text-paper/40 uppercase md:block">
        Wideo: Pexels
      </div>
    </section>
  );
}