"use client";

import { StickyBanner } from "./ui/sticky-banner";

export default function Banner() {
  return (
    <StickyBanner
      className="bg-dark min-h-10"
      onClick={() => {
        const section = document.getElementById("forms");
        if (section) {
          // Use smooth scrolling behavior
          window.scrollTo({
            top: section.offsetTop - 100, // Offset for navbar height
            behavior: "smooth",
          });
        }
      }}
    >
      <p className="mx-0 max-w-[90%] text-white drop-shadow-md text-sm text-center py-2">
        Introducing <span className="font-semibold">Deforge Forms</span>, a
        user-friendly interface for your AI agent.
      </p>
    </StickyBanner>
  );
}
