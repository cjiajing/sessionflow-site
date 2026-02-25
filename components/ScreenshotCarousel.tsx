"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  label?: string;
};

export default function ScreenshotCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/screenshots/Dashboard.png", alt: "SessionFlow dashboard", label: "Dashboard" },
      { src: "/screenshots/Payment-Tracking.png", alt: "Payment tracking", label: "Payments" },
      { src: "/screenshots/PDF-Invoice.png", alt: "PDF invoice export", label: "Invoice" },
      { src: "/screenshots/clients.png", alt: "Client list", label: "Clients" },
      { src: "/screenshots/Schedule.png", alt: "Schedule view", label: "Schedule" },
      { src: "/screenshots/Calendar.png", alt: "Calendar view", label: "Calendar" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4 shadow-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between px-2 pb-3">
        <div className="text-sm font-semibold">App preview</div>
        <div className="text-xs text-slate-500">
          {slides[index].label ?? `Slide ${index + 1}`} • {index + 1}/{total}
        </div>
      </div>

      {/* Slide */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        {/* Fixed height on desktop so hero stays compact */}
        <div className="relative h-[420px] w-full md:h-[520px]">
          <Image
            key={slides[index].src}
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            className="object-contain p-2"
            priority
          />
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-white"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-white"
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={[
              "h-2.5 w-2.5 rounded-full border",
              i === index
                ? "border-slate-900 bg-slate-900"
                : "border-slate-300 bg-white hover:bg-slate-100",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
