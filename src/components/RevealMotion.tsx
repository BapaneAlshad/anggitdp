"use client";

import { useEffect } from "react";

export function RevealMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.06, rootMargin: "0px 0px 24px 0px" });

    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.dataset.visible = "true";
      } else {
        observer.observe(element);
      }
    }
    document.documentElement.dataset.motion = "ready";

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return null;
}
