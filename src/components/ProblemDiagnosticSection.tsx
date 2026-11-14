"use client";

import { ArrowUpRight, CalendarClock, ChartNoAxesCombined, Check, Globe, Megaphone, Palette, Plus, ShieldCheck, Smartphone, Store, Target, type LucideIcon } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { getRecommendedPackage, presentation, problems, sectionCopy, solutionPillars } from "../data/siteData";
import type { SolutionIconName } from "../types/site";
import { SectionHeading } from "./DesignSystem";

const solutionIcons = { ShieldCheck, Target, ChartNoAxesCombined } satisfies Record<SolutionIconName, LucideIcon>;
const problemIcons: Readonly<Record<string, LucideIcon>> = {
  "posting-belum-berhasil": Smartphone,
  "desain-tidak-konsisten": Palette,
  "promosi-spontan": CalendarClock,
  "brand-belum-profesional": Store,
  "khawatir-budget-iklan": Megaphone,
  "belum-punya-website": Globe,
};

export function ProblemDiagnosticSection() {
  const { selectedProblems, toggleProblem, openDrawer } = useConsultation();
  const selectedCount = selectedProblems.length;
  const recommendedPackage = getRecommendedPackage(selectedProblems);

  return (
    <section id="masalah" aria-labelledby="masalah-heading" className="section section--paper diagnostic-section">
      <div className="site-shell">
        <SectionHeading id="masalah-heading" index="02" label={presentation.diagnostic.label} title={sectionCopy.problems.title} description={<p id="masalah-instruction">{sectionCopy.problems.instruction}</p>} />
        <div role="group" aria-labelledby="masalah-heading" aria-describedby="masalah-instruction" className="diagnostic-grid">
          {problems.map((problem) => {
            const Icon = problemIcons[problem.id] ?? Target;
            const isSelected = selectedProblems.some((value) => value.trim() === problem.id || value.trim() === problem.title);
            return (
              <button key={problem.id} type="button" aria-pressed={isSelected} aria-labelledby={`${problem.id}-title`} aria-describedby={`${problem.id}-description`}
                onClick={() => toggleProblem(problem.id)} className="problem-card problem-card--icon">
                <span className="feature-icon"><Icon aria-hidden="true" /></span>
                <span id={`${problem.id}-title`} className="problem-card__title">{problem.shortLabel}</span>
                <span id={`${problem.id}-description`} className="sr-only">{problem.description}</span>
                <span className="selection-check" aria-hidden="true"><Check /></span>
              </button>
            );
          })}
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{selectedCount > 0 ? sectionCopy.problems.selectionSummary(selectedCount) : ""}</p>
        {selectedCount > 0 && (
          <aside aria-labelledby="rekomendasi-paket-heading" className="recommendation">
            <div>
              <p className="recommendation__summary">{sectionCopy.problems.selectionSummary(selectedCount)}</p>
              <h3 id="rekomendasi-paket-heading">{recommendedPackage.name}</h3>
              <p className="recommendation__summary">{recommendedPackage.subtitle}</p>
              <p className="recommendation__price">{recommendedPackage.priceText}</p>
            </div>
            <button type="button" className="button button--primary" onClick={() => openDrawer({ offer: recommendedPackage.name })}>
              {sectionCopy.problems.consultationLabel}<ArrowUpRight aria-hidden="true" />
            </button>
          </aside>
        )}
        <details id="solusi" className="solutions compact-details">
          <summary>{sectionCopy.solutions.title}<Plus aria-hidden="true" /></summary>
          <div className="solution-grid">
            {solutionPillars.map((solution) => {
              const Icon = solutionIcons[solution.iconName];
              return <article key={solution.id} className="solution-item"><Icon aria-hidden="true" /><div><h3>{solution.title}</h3><p>{solution.description}</p></div></article>;
            })}
          </div>
        </details>
      </div>
    </section>
  );
}
export default ProblemDiagnosticSection;
