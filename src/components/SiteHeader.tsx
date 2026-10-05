"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="bg-paper/85 fixed inset-x-0 top-0 z-50 backdrop-blur-sm"
    >
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="font-display text-2xl leading-none tracking-tight">
            {site.name}
          </span>
          <span className="hidden text-[0.62rem] tracking-[0.2em] text-muted uppercase sm:inline">
            Pracownia architektoniczna
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm transition-colors ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-clay transition-all duration-400 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden text-sm text-muted transition-colors hover:text-ink xl:inline"
          >
            {site.phone}
          </a>
          <Link
            href="/kontakt"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-clay sm:inline-block"
          >
            Zapytaj o projekt
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-paper transition-[max-height,opacity] duration-500 ease-out-expo lg:hidden ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col pt-2 pb-8">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-line flex items-center justify-between border-b py-4 font-display text-3xl"
            >
              {item.label}
              <span className="text-muted text-sm">0{i + 1}</span>
            </Link>
          ))}
          <a
            href={`tel:${site.phoneHref}`}
            className="text-muted mt-6 text-sm"
          >
            {site.phone} · {site.hours}
          </a>
        </nav>
      </div>
    </header>
  );
}