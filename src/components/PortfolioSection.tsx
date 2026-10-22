"use client";

import { ArrowUpRight, Info, MessageCircle, TrendingUp } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { useConsultation } from "../context/ConsultationContext";
import { portfolio, portfolioContentNote, sectionCopy } from "../data/siteData";
import type { PortfolioCaseStudy } from "../types/site";

type PortfolioTabId = "challenge-role" | "approach" | "result-insight";
type PortfolioField = keyof Pick<PortfolioCaseStudy, "challenge" | "role" | "approach" | "result" | "insight">;

interface PortfolioTab {
  id: PortfolioTabId;
  label: string;
  fields: readonly PortfolioField[];
}

interface PortfolioCardProps {
  item: PortfolioCaseStudy;
}

const portfolioTabs = [
  { id: "challenge-role", label: "Tantangan & Peran", fields: ["challenge", "role"] },
  { id: "approach", label: "Pendekatan Strategis", fields: ["approach"] },
  { id: "result-insight", label: "Hasil & Insight", fields: ["result", "insight"] },
] as const satisfies readonly PortfolioTab[];

function PortfolioCard({ item }: PortfolioCardProps) {
  const { openDrawer } = useConsultation();
  const [activeTab, setActiveTab] = useState<PortfolioTabId>("challenge-role");
  const uniqueId = useId();
  const cardId = `${uniqueId}-${item.id}`;
  const tabRefs = useRef<Partial<Record<PortfolioTabId, HTMLButtonElement | null>>>({});

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, tabId: PortfolioTabId): void {
    const currentIndex = portfolioTabs.findIndex((tab) => tab.id === tabId);
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % portfolioTabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + portfolioTabs.length) % portfolioTabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = portfolioTabs.length - 1;
        break;
      default:
        return;
    }

    const nextTab = portfolioTabs[nextIndex];
    if (!nextTab) return;

    event.preventDefault();
    setActiveTab(nextTab.id);
    tabRefs.current[nextTab.id]?.focus();
  }

  return (
    <article aria-labelledby={`${cardId}-title`} className="flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="min-w-0 bg-[#0F172A] p-5 text-white sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs leading-6 text-slate-300">{item.category}</p>
            <h3 id={`${cardId}-title`} className="mt-1 text-2xl font-bold tracking-tight">{item.brandName}</h3>
          </div>
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
            <TrendingUp aria-hidden="true" className="size-5" />
          </span>
        </div>
        <p className="mt-6 text-xl font-bold leading-8 tracking-tight text-emerald-300 sm:text-2xl">{item.metricHighlight}</p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <div
          role="tablist"
          aria-label={`Studi kasus ${item.brandName}`}
          aria-orientation="horizontal"
          className="grid min-w-0 grid-cols-3 gap-1 rounded-2xl bg-slate-100 p-1"
        >
          {portfolioTabs.map((tab) => {
            const isSelected = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                ref={(node) => { tabRefs.current[tab.id] = node; }}
                id={`${cardId}-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`${cardId}-panel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, tab.id)}
                className={`inline-flex min-h-[48px] min-w-0 items-center justify-center rounded-xl px-1.5 py-3 text-center text-[11px] font-semibold leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none sm:text-xs ${isSelected ? "bg-[#2563EB] text-white shadow-sm" : "text-slate-600 hover:bg-white hover:text-[#2563EB]"}`}
              >
                <span className="min-w-0 break-words">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {portfolioTabs.map((tab) => (
          <div
            key={tab.id}
            id={`${cardId}-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${cardId}-tab-${tab.id}`}
            tabIndex={0}
            hidden={activeTab !== tab.id}
            className="mt-4 h-[22rem] min-w-0 space-y-5 overflow-y-auto rounded-2xl border border-slate-100 bg-[#FAF9F6] p-4 [scrollbar-gutter:stable] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]"
          >
            {tab.fields.map((field) => (
              <div key={field} className="min-w-0">
                <h4 className="text-sm font-bold leading-6 text-[#0F172A]">{sectionCopy.portfolio.fieldLabels[field]}</h4>
                <p className="mt-2 break-words text-sm leading-7 text-slate-600">{item[field]}</p>
              </div>
            ))}
          </div>
        ))}

        <button
          type="button"
          onClick={() => openDrawer({ portfolio: item.brandName })}
          className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#059669] px-4 py-3 text-left text-sm font-semibold leading-6 text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-4 motion-reduce:transition-none"
        >
          <MessageCircle aria-hidden="true" className="size-5 shrink-0" />
          <span className="min-w-0">Terapkan Pendekatan {item.brandName} di Bisnis Saya</span>
          <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
        </button>
      </div>
    </article>
  );
}

export function PortfolioSection() {
  return (
    <section id="portofolio" aria-labelledby="portfolio-title" className="scroll-mt-24 overflow-x-hidden bg-[#FAF9F6] py-14 text-[#0F172A] sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <h2 id="portfolio-title" className="max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">{sectionCopy.portfolio.title}</h2>
          <div role="note" className="mt-5 flex max-w-4xl items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
            <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#2563EB]" />
            <p className="min-w-0 text-xs leading-6 text-slate-500">{portfolioContentNote}</p>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item) => <PortfolioCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
