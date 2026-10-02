import Link from "next/link";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: { label: string; href: string };
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex flex-col gap-8 ${
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <Reveal className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
        {eyebrow ? (
          <p className={`eyebrow ${dark ? "text-paper/50" : ""}`}>{eyebrow}</p>
        ) : null}
        <h2
          className={`mt-4 text-4xl leading-[1.05] md:text-6xl ${
            dark ? "text-paper" : ""
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={`mt-6 text-base leading-relaxed md:text-lg ${
              dark ? "text-paper/70" : "text-muted"
            }`}
          >
            {intro}
          </p>
        ) : null}
      </Reveal>

      {action ? (
        <Reveal delay={120} className="shrink-0">
          <Link
            href={action.href}
            className={`group inline-flex items-center gap-3 border-b pb-1 text-sm transition-colors ${
              dark
                ? "border-paper/30 text-paper hover:border-clay-soft"
                : "border-ink/25 text-ink hover:border-clay"
            }`}
          >
            {action.label}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      ) : null}
    </div>
  );
}