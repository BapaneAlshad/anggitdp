"use client";

import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { navigation, profile, sectionCopy } from "../data/siteData";
import type { NavigationItem } from "../types/site";

export function Navbar() {
  const { openDrawer } = useConsultation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    function handleDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) setIsMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isMenuOpen]);

  function navigateToSection(event: MouseEvent<HTMLAnchorElement>, href: NavigationItem["href"]) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    setIsMenuOpen(false);
    const target = document.getElementById(href.slice(1));

    if (!target) return;

    event.preventDefault();
    const headerHeight = barRef.current?.getBoundingClientRect().height ?? 80;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.history.pushState(null, "", href);
    window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion ? "instant" : "smooth" });
  }

  function handleConsultation() {
    setIsMenuOpen(false);
    openDrawer();
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-[#FAF9F6]/95 text-[#0F172A] shadow-[0_1px_12px_rgba(15,23,42,0.03)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#FAF9F6]/85"
    >
      <div
        ref={barRef}
        className="mx-auto flex min-h-[80px] w-full max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8"
      >
        <a
          href="/"
          aria-label={`${profile.name}, beranda`}
          className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] sm:gap-3"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-sm font-bold tracking-tight text-white sm:h-11 sm:w-11 sm:text-base">
            {profile.monogram}
          </span>
          <span className="text-[13px] font-bold tracking-tight sm:text-base">{profile.name}</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => navigateToSection(event, item.href)}
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] motion-reduce:transition-none xl:px-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={handleConsultation}
            className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] px-3 text-xs font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2563EB] motion-reduce:transition-none sm:px-4 sm:text-sm"
          >
            {sectionCopy.header.consultationLabel}
            <ArrowUpRight aria-hidden="true" className="hidden h-4 w-4 sm:block" />
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0F172A] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#2563EB] motion-reduce:transition-none lg:hidden"
          >
            {isMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav
        id={mobileMenuId}
        aria-label="Navigasi seluler"
        hidden={!isMenuOpen}
        className="absolute inset-x-0 top-full border-b border-t border-slate-200/80 bg-[#FAF9F6] px-4 pb-4 pt-2 shadow-lg shadow-slate-900/5 lg:hidden"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => navigateToSection(event, item.href)}
              className="flex min-h-[48px] items-center justify-between gap-3 rounded-xl px-4 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] motion-reduce:transition-none"
            >
              {item.label}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-slate-400" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
