"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds the `in` class to every `.reveal` element as it scrolls into view.
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
