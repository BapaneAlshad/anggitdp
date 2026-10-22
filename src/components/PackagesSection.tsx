"use client";

import { ArrowUpRight, Check, Info, Sparkles } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { packages, pricingNote, sectionCopy } from "../data/siteData";

export function PackagesSection() {
  const { openDrawer } = useConsultation();

  return (
    <section
      id="paket"
      aria-labelledby="paket-heading"
      aria-describedby="paket-pricing-note"
      className="scroll-mt-28 overflow-x-hidden bg-[#FAF9F6] py-16 text-[#0F172A] sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
            Pilih langkah yang sesuai untuk bisnis Anda
          </p>
          <h2
            id="paket-heading"
            className="text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl"
          >
            {sectionCopy.packages.title}
          </h2>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              aria-labelledby={`${pkg.id}-name`}
              aria-describedby={`${pkg.id}-subtitle`}
              className={`flex min-w-0 flex-col rounded-3xl border-2 p-5 shadow-sm sm:p-6 ${
                pkg.isPopular
                  ? "border-[#2563EB] bg-[#0F172A] text-white"
                  : "border-slate-200 bg-white text-[#0F172A]"
              }`}
            >
              {pkg.badge && (
                <div className="mb-5">
                  <span
                    className={`inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold leading-5 ${
                      pkg.isPopular
                        ? "bg-blue-500/20 text-blue-100"
                        : "bg-blue-50 text-[#2563EB]"
                    }`}
                  >
                    {pkg.isPopular && <Sparkles className="size-3.5 shrink-0" aria-hidden="true" />}
                    <span>{pkg.badge}</span>
                  </span>
                </div>
              )}

              <h3
                id={`${pkg.id}-name`}
                className="text-xl font-bold leading-7 tracking-[-0.02em]"
              >
                {pkg.name}
              </h3>
              <p
                id={`${pkg.id}-subtitle`}
                className={`mt-3 text-sm leading-6 ${pkg.isPopular ? "text-slate-300" : "text-slate-600"}`}
              >
                {pkg.subtitle}
              </p>
              <p
                id={`${pkg.id}-price`}
                className={`mt-6 text-2xl font-extrabold leading-9 tracking-[-0.02em] ${
                  pkg.isPopular ? "text-white" : "text-[#2563EB]"
                }`}
              >
                {pkg.priceText}
              </p>

              <div className={`my-6 h-px ${pkg.isPopular ? "bg-slate-700" : "bg-slate-200"}`} aria-hidden="true" />

              <ul className="mb-7 flex-1 space-y-4" aria-label={`Cakupan paket ${pkg.name}`}>
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex min-w-0 items-start gap-3">
                    <Check
                      className={`mt-1 size-4 shrink-0 ${pkg.isPopular ? "text-emerald-300" : "text-[#059669]"}`}
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <span className={`min-w-0 text-sm leading-6 ${pkg.isPopular ? "text-slate-200" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                aria-describedby={`${pkg.id}-name ${pkg.id}-price`}
                onClick={() => openDrawer({ offer: pkg.name })}
                className={`inline-flex min-h-[48px] w-full min-w-0 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold leading-6 text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none ${
                  pkg.isPopular
                    ? "bg-[#059669] hover:bg-emerald-700 focus-visible:outline-emerald-300"
                    : "bg-[#2563EB] hover:bg-blue-700 focus-visible:outline-[#2563EB]"
                }`}
              >
                <span>{sectionCopy.packages.ctaLabel}</span>
                <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 sm:px-5">
          <Info className="mt-0.5 size-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
          <p id="paket-pricing-note" className="min-w-0 text-sm leading-6 text-slate-600">
            {pricingNote}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
