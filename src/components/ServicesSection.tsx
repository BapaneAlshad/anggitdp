"use client";

import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Globe,
  Handshake,
  Megaphone,
  Palette,
  Search,
  type LucideIcon,
} from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { sectionCopy, services } from "../data/siteData";

const serviceIcons: Readonly<Record<string, LucideIcon>> = {
  "bedah-brand-marketing": Search,
  "rapikan-tampilan-brand": Palette,
  "konten-bisnis": CalendarDays,
  "website-landing-page": Globe,
  "iklan-online": Megaphone,
  "pendampingan-marketing": Handshake,
};

export function ServicesSection() {
  const { openDrawer } = useConsultation();

  return (
    <section
      id="layanan"
      aria-labelledby="layanan-heading"
      className="overflow-x-hidden bg-[#FAF9F6] py-16 text-[#0F172A] scroll-mt-28 sm:py-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <h2
            id="layanan-heading"
            className="text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl"
          >
            {sectionCopy.services.title}
          </h2>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] ?? Search;

            return (
              <article
                key={service.id}
                aria-labelledby={`${service.id}-heading`}
                className="flex min-w-0 flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md motion-reduce:transition-none sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
                    <Icon className="size-6" aria-hidden="true" strokeWidth={1.75} />
                  </span>
                  <span aria-hidden="true" className="text-xs font-semibold tracking-[0.12em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  id={`${service.id}-heading`}
                  className="break-words text-xl font-bold leading-7 tracking-[-0.02em]"
                >
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul role="list" className="mb-6 mt-5 space-y-3 border-t border-slate-100 pt-5">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex min-w-0 items-start gap-2.5 text-sm leading-6 text-slate-600">
                      <Check className="mt-1 size-4 shrink-0 text-[#059669]" aria-hidden="true" strokeWidth={2.5} />
                      <span className="min-w-0 break-words">{deliverable}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  aria-label={`${service.ctaLabel}: ${service.title}`}
                  onClick={() => openDrawer({ offer: service.title })}
                  className="mt-auto inline-flex min-h-[48px] w-full min-w-0 items-center justify-between gap-3 rounded-2xl border border-blue-200 bg-blue-50/50 px-4 py-3 text-left text-sm font-semibold leading-6 text-[#2563EB] transition-colors duration-200 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] motion-reduce:transition-none"
                >
                  <span className="min-w-0">{service.ctaLabel}</span>
                  <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
