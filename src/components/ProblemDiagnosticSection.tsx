"use client";

import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Check,
  MessageCircle,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import {
  getRecommendedPackage,
  problems,
  sectionCopy,
  solutionPillars,
} from "../data/siteData";
import type { SolutionIconName } from "../types/site";

const solutionIcons = {
  ShieldCheck,
  Target,
  ChartNoAxesCombined,
} satisfies Record<SolutionIconName, LucideIcon>;

export function ProblemDiagnosticSection() {
  const { selectedProblems, toggleProblem, openDrawer } = useConsultation();
  const selectedCount = selectedProblems.length;
  const recommendedPackage = getRecommendedPackage(selectedProblems);

  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#0F172A]">
      <section
        id="masalah"
        aria-labelledby="masalah-heading"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
            Mulai dari kondisi bisnis Anda
          </p>
          <h2
            id="masalah-heading"
            className="text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl"
          >
            {sectionCopy.problems.title}
          </h2>
          <p id="masalah-instruction" className="mt-4 text-base leading-7 text-slate-600">
            {sectionCopy.problems.instruction}
          </p>
        </div>

        <div
          role="group"
          aria-labelledby="masalah-heading"
          aria-describedby="masalah-instruction"
          className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
        >
          {problems.map((problem, index) => {
            const isSelected = selectedProblems.some((selected) => {
              const value = selected.trim();
              return value === problem.id || value === problem.title;
            });

            return (
              <button
                key={problem.id}
                type="button"
                aria-pressed={isSelected}
                aria-labelledby={`${problem.id}-title`}
                aria-describedby={`${problem.id}-description`}
                onClick={() => toggleProblem(problem.title)}
                className={`group flex min-h-[48px] min-w-0 flex-col rounded-3xl border-2 p-5 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] motion-reduce:transition-none sm:p-6 ${
                  isSelected
                    ? "border-[#2563EB] bg-blue-50/60 shadow-sm"
                    : "border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:bg-blue-50/30"
                }`}
              >
                <span className="mb-5 flex w-full items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.12em] text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 motion-reduce:transition-none ${
                      isSelected
                        ? "border-[#2563EB] bg-[#2563EB] text-white"
                        : "border-slate-300 bg-white text-transparent group-hover:border-blue-400"
                    }`}
                  >
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                </span>
                <span
                  id={`${problem.id}-title`}
                  className="block text-lg font-bold leading-7 tracking-[-0.02em]"
                >
                  {problem.title}
                </span>
                <span
                  id={`${problem.id}-description`}
                  className="mt-3 block text-sm leading-6 text-slate-600"
                >
                  {problem.description}
                </span>
              </button>
            );
          })}
        </div>

        <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {selectedCount > 0 ? sectionCopy.problems.selectionSummary(selectedCount) : ""}
        </p>

        {selectedCount > 0 && (
          <aside
            aria-labelledby="rekomendasi-paket-heading"
            className="mt-5 min-w-0 rounded-3xl border border-blue-200 bg-white p-5 shadow-sm sm:p-6 lg:flex lg:items-center lg:gap-8"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm leading-6 text-slate-600">
                {sectionCopy.problems.selectionSummary(selectedCount)}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#2563EB]">
                Rekomendasi awal
              </p>
              <h3
                id="rekomendasi-paket-heading"
                className="mt-1 text-xl font-bold leading-7 tracking-[-0.02em]"
              >
                {recommendedPackage.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {recommendedPackage.subtitle}
              </p>
              <p className="mt-3 text-base font-bold text-[#2563EB]">
                {recommendedPackage.priceText}
              </p>
            </div>
            <button
              type="button"
              onClick={() => openDrawer({ offer: recommendedPackage.name })}
              className="mt-5 inline-flex min-h-[48px] w-full min-w-0 items-center justify-center gap-3 rounded-2xl bg-[#059669] px-5 py-3 text-left text-sm font-semibold leading-6 text-white transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#059669] motion-reduce:transition-none sm:w-auto lg:mt-0 lg:max-w-xs lg:shrink-0"
            >
              <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
              <span>Diskusikan Masalah Ini via WhatsApp</span>
              <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
            </button>
          </aside>
        )}
      </section>

      <section
        id="solusi"
        aria-labelledby="solusi-heading"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="mb-7 flex items-center gap-4 sm:mb-8">
          <h2
            id="solusi-heading"
            className="max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl"
          >
            {sectionCopy.solutions.title}
          </h2>
          <span className="hidden h-px flex-1 bg-slate-200 sm:block" aria-hidden="true" />
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
          {solutionPillars.map((solution, index) => {
            const Icon = solutionIcons[solution.iconName];
            const isHighlighted = index === 0;

            return (
              <article
                key={solution.id}
                aria-labelledby={`${solution.id}-title`}
                className={`min-w-0 rounded-3xl border p-6 sm:p-7 ${
                  isHighlighted
                    ? "border-[#0F172A] bg-[#0F172A] text-white"
                    : "border-slate-200 bg-white text-[#0F172A] shadow-sm"
                }`}
              >
                <span
                  className={`mb-6 inline-flex size-12 items-center justify-center rounded-2xl ${
                    isHighlighted ? "bg-white/10 text-emerald-300" : "bg-blue-50 text-[#2563EB]"
                  }`}
                >
                  <Icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
                </span>
                <h3
                  id={`${solution.id}-title`}
                  className="text-xl font-bold leading-7 tracking-[-0.02em]"
                >
                  {solution.title}
                </h3>
                <p className={`mt-3 text-sm leading-7 ${isHighlighted ? "text-slate-300" : "text-slate-600"}`}>
                  {solution.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProblemDiagnosticSection;
