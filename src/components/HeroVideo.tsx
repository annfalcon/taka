"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  // No autoPlay attribute: the element is inert during SSR and hydration, so the
  // video payload is only fetched once we ask for playback after mount. The
  // poster image stays as the LCP candidate.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {
      /* autoplay blocked — the poster image remains, which is fine */
    });
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover opacity-60"
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
    />
  );
}