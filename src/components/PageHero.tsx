import Image from "next/image";
import type { StaticImageData } from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  meta?: string[];
  image?: string | StaticImageData;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  meta,
  image,
  imageAlt,
}: Props) {
  return (
    <section className="pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="container-x">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1
          className="mt-6 max-w-4xl text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.98] animate-rise"
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>
        {intro ? (
          <p
            className="text-muted mt-8 max-w-2xl text-lg leading-relaxed animate-rise"
            style={{ animationDelay: "200ms" }}
          >
            {intro}
          </p>
        ) : null}

        {meta?.length ? (
          <ul
            className="border-line mt-14 flex flex-wrap gap-x-12 gap-y-5 border-t pt-8 animate-rise"
            style={{ animationDelay: "300ms" }}
          >
            {meta.map((m) => (
              <li key={m} className="text-muted text-sm">
                {m}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {image ? (
        <div className="container-x mt-14">
          <div className="relative aspect-16/9 w-full overflow-hidden bg-paper-2 md:aspect-21/9">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}