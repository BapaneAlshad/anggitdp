"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { navigation, profile, sectionCopy } from "../data/siteData";
import { BrandMark } from "./DesignSystem";

export function Navbar() {
  const { openDrawer } = useConsultation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { setIsMenuOpen(false); menuButtonRef.current?.focus(); }
    }
    function handleOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsMenuOpen(false);
    }
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    function handleDesktopChange(event: MediaQueryListEvent) { if (event.matches) setIsMenuOpen(false); }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    desktopQuery.addEventListener("change", handleDesktopChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isMenuOpen]);

  const isPortfolio = pathname.startsWith("/portofolio");
  function handleConsultation() { setIsMenuOpen(false); openDrawer(); }

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" aria-label={`${profile.name}, beranda`} className="site-brand" onNavigate={() => setIsMenuOpen(false)}>
          <BrandMark /><span className="site-brand__name">{profile.name}<small>{profile.positioning}</small></span>
        </Link>
        <nav aria-label="Navigasi utama" className="desktop-navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={isPortfolio && item.href === "/portofolio/" ? "location" : undefined}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button type="button" onClick={handleConsultation} className="button button--primary">{sectionCopy.header.consultationLabel}<ArrowUpRight aria-hidden="true" /></button>
          <button ref={menuButtonRef} type="button" aria-expanded={isMenuOpen} aria-controls={mobileMenuId} aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            onClick={() => setIsMenuOpen((current) => !current)} className="menu-toggle">
            {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>
      <nav id={mobileMenuId} aria-label="Navigasi seluler" hidden={!isMenuOpen} className="mobile-navigation">
        {navigation.map((item, index) => <Link key={item.href} href={item.href} onNavigate={() => setIsMenuOpen(false)} aria-current={isPortfolio && item.href === "/portofolio/" ? "location" : undefined}>{item.label}<span>{String(index + 1).padStart(2, "0")} ↗</span></Link>)}
      </nav>
    </header>
  );
}
export default Navbar;
