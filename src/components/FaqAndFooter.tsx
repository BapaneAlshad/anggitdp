"use client";

import { useId, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Music2,
} from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { contactLinks, contacts, faqs, profile, sectionCopy } from "../data/siteData";

const socialLinks = [
  { label: "Instagram", handle: contacts.instagram, href: contactLinks.instagram, icon: Instagram },
  { label: "TikTok", handle: contacts.tiktok, href: contactLinks.tiktok, icon: Music2 },
  { label: "Facebook", handle: contacts.facebook, href: contactLinks.facebook, icon: Facebook },
] as const;

export function FaqAndFooter() {
  const { openDrawer } = useConsultation();
  const faqGroupId = useId();
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);

  function toggleFaq(id: string): void {
    setOpenFaqs((current) => (
      current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id]
    ));
  }

  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#0F172A]">
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
              Sebelum mulai berdiskusi
            </p>
            <h2
              id="faq-heading"
              className="text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl"
            >
              {sectionCopy.faq.title}
            </h2>
          </div>

          <div className="min-w-0 space-y-3">
            {faqs.map((faq) => {
              const isExpanded = openFaqs.includes(faq.id);
              const triggerId = `${faqGroupId}-${faq.id}-trigger`;
              const panelId = `${faqGroupId}-${faq.id}-panel`;

              return (
                <div
                  key={faq.id}
                  className={`min-w-0 rounded-2xl border bg-white transition-colors duration-200 motion-reduce:transition-none ${
                    isExpanded ? "border-blue-200" : "border-slate-200"
                  }`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(faq.id)}
                      className="flex min-h-[48px] w-full min-w-0 items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-base font-semibold leading-7 transition-colors duration-200 hover:bg-blue-50/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] motion-reduce:transition-none sm:px-6"
                    >
                      <span className="min-w-0">{faq.question}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-5 shrink-0 text-[#2563EB] transition-transform duration-300 motion-reduce:transition-none ${
                          isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isExpanded}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="final-cta-heading"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="min-w-0 rounded-3xl bg-[#0F172A] px-5 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <h2
            id="final-cta-heading"
            className="max-w-2xl text-2xl font-extrabold leading-snug tracking-[-0.02em] sm:text-3xl"
          >
            {sectionCopy.finalCta.headline}
          </h2>
          <div className="mt-7 flex min-w-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0 lg:flex-col">
            <button
              type="button"
              onClick={() => openDrawer()}
              className="inline-flex min-h-[48px] min-w-0 items-center justify-center gap-3 rounded-2xl bg-[#059669] px-5 py-3 text-sm font-semibold leading-6 text-white transition-colors duration-200 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 motion-reduce:transition-none"
            >
              <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
              <span>{sectionCopy.finalCta.primaryCtaLabel}</span>
            </button>
            <a
              href={contactLinks.email}
              className="inline-flex min-h-[48px] min-w-0 items-center justify-center gap-3 rounded-2xl border border-slate-600 px-5 py-3 text-sm font-semibold leading-6 text-white transition-colors duration-200 hover:border-slate-400 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 motion-reduce:transition-none"
            >
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              <span>Email Anggit</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white pb-8 pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-w-0 gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="min-w-0 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white"
                >
                  {profile.monogram}
                </span>
                <p className="text-lg font-bold tracking-[-0.02em]">{profile.name}</p>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">{profile.positioning}</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                {profile.role}<br />{profile.company}
              </p>
            </div>

            <div className="min-w-0">
              <h2 className="mb-3 text-sm font-bold">Hubungi Anggit</h2>
              <address className="space-y-2 not-italic">
                <a
                  href={contactLinks.email}
                  className="flex min-h-[48px] min-w-0 items-center gap-3 rounded-xl px-2 py-2 text-sm leading-6 text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] motion-reduce:transition-none"
                >
                  <Mail className="size-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
                  <span className="min-w-0 break-words">{contacts.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => openDrawer()}
                  className="flex min-h-[48px] w-full min-w-0 items-center gap-3 rounded-xl px-2 py-2 text-left text-sm leading-6 text-slate-600 transition-colors duration-200 hover:bg-emerald-50 hover:text-[#059669] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669] motion-reduce:transition-none"
                >
                  <MessageCircle className="size-5 shrink-0 text-[#059669]" aria-hidden="true" />
                  <span className="min-w-0">WhatsApp<br />{contacts.whatsappDisplayNumber}</span>
                </button>
              </address>
            </div>

            <nav className="min-w-0" aria-label="Media sosial Anggit">
              <h2 className="mb-3 text-sm font-bold">Temui di media sosial</h2>
              <ul className="space-y-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[48px] min-w-0 items-center gap-3 rounded-xl px-2 py-2 text-sm leading-6 text-slate-600 transition-colors duration-200 hover:bg-blue-50 hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] motion-reduce:transition-none"
                      >
                        <Icon className="size-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs text-slate-500">{social.label}</span>
                          <span className="break-words">{social.handle}</span>
                        </span>
                        <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                        <span className="sr-only">(terbuka di tab baru)</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <p className="mt-9 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
            © {profile.name}. {profile.positioning}.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default FaqAndFooter;
