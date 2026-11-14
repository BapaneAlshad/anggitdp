"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ArrowUp, ArrowUpRight, Facebook, Instagram, Mail, MessageCircle, Music2, Plus } from "lucide-react";
import { useConsultation } from "../context/ConsultationContext";
import { contactLinks, contacts, faqs, presentation, profile, sectionCopy } from "../data/siteData";
import { BrandMark } from "./DesignSystem";

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
    setOpenFaqs((current) => current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id]);
  }
  return (
    <>
      <section id="faq" aria-labelledby="faq-heading" className="section section--paper">
        <div className="site-shell faq-grid">
          <div className="faq-intro" data-reveal>
            <p className="eyebrow"><span>07</span><span className="eyebrow__line" aria-hidden="true" />{presentation.faq.label}</p>
            <h2 id="faq-heading" className="section-title">{sectionCopy.faq.title}</h2>
            <button type="button" className="text-link" onClick={() => openDrawer()}>{presentation.faq.cta}<ArrowUpRight aria-hidden="true" /></button>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq, index) => {
              const isExpanded = openFaqs.includes(faq.id);
              const triggerId = `${faqGroupId}-${faq.id}-trigger`;
              const panelId = `${faqGroupId}-${faq.id}-panel`;
              return (
                <div key={faq.id} className="faq-item">
                  <h3>
                    <button id={triggerId} type="button" aria-expanded={isExpanded} aria-controls={panelId} onClick={() => toggleFaq(faq.id)} className="faq-trigger">
                      <span className="faq-trigger__label"><span className="faq-trigger__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span>{faq.question}</span></span><Plus aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={triggerId} aria-hidden={!isExpanded} className={`faq-panel${isExpanded ? " faq-panel--open" : ""}`}>
                    <div><p>{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section aria-labelledby="final-cta-heading" className="closing-section">
        <div className="site-shell closing-inner">
          <span className="closing-art" aria-hidden="true" />
          <div data-reveal>
            <p className="eyebrow">{presentation.closing.label}</p>
            <h2 id="final-cta-heading" className="closing-title">{presentation.closing.title}<span className="editorial-serif">{presentation.closing.titleAccent}</span></h2>
          </div>
          <div data-reveal>
            <p className="closing-description">{sectionCopy.finalCta.headline}</p>
            <div className="closing-actions">
              <button type="button" className="button button--white" onClick={() => openDrawer()}><MessageCircle aria-hidden="true" />{sectionCopy.finalCta.primaryCtaLabel}<ArrowUpRight aria-hidden="true" /></button>
              <a href={sectionCopy.finalCta.secondaryCtaHref} className="button button--outline-light">{sectionCopy.finalCta.secondaryCtaLabel}<ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SiteFooter() {
  const { openDrawer } = useConsultation();
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-grid">
          <div>
            <div className="footer-brand"><BrandMark inverse /><p>{profile.name}</p></div>
            <p className="footer-positioning">{profile.positioning}</p>
            <p className="footer-role">{profile.role}<br />{profile.company}</p>
          </div>
          <div>
            <h2 className="footer-heading">Hubungi Anggit</h2>
            <address className="not-italic">
              <a href={contactLinks.email} className="footer-contact"><Mail aria-hidden="true" /><span>{contacts.email}</span></a>
              <button type="button" className="footer-contact" onClick={() => openDrawer()}><MessageCircle aria-hidden="true" /><span>WhatsApp<small>{contacts.whatsappDisplayNumber}</small></span></button>
            </address>
          </div>
          <nav aria-label="Media sosial Anggit">
            <h2 className="footer-heading">Temui di media sosial</h2>
            <ul>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return <li key={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" className="footer-contact">
                  <Icon aria-hidden="true" /><span><small>{social.label}</small>{social.handle}</span><ArrowUpRight aria-hidden="true" className="footer-social-arrow" /><span className="sr-only">(terbuka di tab baru)</span>
                </a></li>;
              })}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom"><p>© {profile.name}. {profile.positioning}.</p><Link href="/#beranda" className="footer-top">Ke beranda<ArrowUp aria-hidden="true" /></Link></div>
      </div>
    </footer>
  );
}
export default FaqAndFooter;
