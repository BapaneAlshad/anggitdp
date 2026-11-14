"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { sectionCopy } from "../data/siteData";

export function PortfolioConsultationButton({ brand }: { brand: string }) {
  const { openDrawer } = useConsultation();
  return (
    <button type="button" className="button button--primary" onClick={() => openDrawer({ portfolio: brand })}>
      <MessageCircle aria-hidden="true" />{sectionCopy.portfolio.ctaLabel(brand)}<ArrowUpRight aria-hidden="true" />
    </button>
  );
}
