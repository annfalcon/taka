import Image from "next/image";
import { heroPoster } from "@/data/portfolio";
import heroShot from "@/assets/pics/lobby3.jpg"; // Import the image from the assets folder

// Import lobby2 image from assets 



export function Hero() {
  const poster = heroShot; // Use the imported image as the poster

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink-2">
      <Image
        src={poster}
        alt={heroPoster.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={82}
      />

      <div className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/35 to-ink/85" />

      <div className="container-x relative flex min-h-[92svh] flex-col justify-end pt-28 pb-14 md:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow text-paper/70 animate-rise">
            Pracownia architektury wnętrz · {`Gdańsk Oliwa`}
          </p>
          <h1
            className="mt-6 text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-paper animate-rise"
            style={{ animationDelay: "120ms" }}
          >
            Tworzymy wnętrza,
            <br />
            które
            <br />
            stają się domem.
          </h1>
          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg animate-rise"
            style={{ animationDelay: "260ms" }}
          >
           Jako zgrany duet projektantek kompleksowo urządzamy mieszkania, domy i biura. Łączymy twardą wiedzę techniczną z kobiecą intuicją i czułością na detal. Od pierwszej kreski po ostatni dodatek - jesteśmy zaangażowane w 100%, by stworzyć wnętrze, o którym marzysz.
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
    </section>
  );
}
