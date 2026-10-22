"use client";

import { ArrowUpRight, BriefcaseBusiness, Check, CheckCheck, MessageCircle, PanelsTopLeft, Tag, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { useConsultation } from "../context/ConsultationContext";
import { businessTypes, packages, problems, sectionCopy } from "../data/siteData";

type FormField = "name" | "businessName" | "businessType" | "needs";
type FormErrors = Record<FormField, string>;

const emptyErrors: FormErrors = { name: "", businessName: "", businessType: "", needs: "" };

function mergeNeeds(current: string, previousBase: string, nextBase: string): string {
  if (previousBase === nextBase) return current;
  if (!current.trim() || current.trim() === previousBase.trim()) return nextBase;

  if (previousBase && current.startsWith(previousBase)) {
    const notes = current.slice(previousBase.length).replace(/^[\s;]+/, "");
    return [nextBase, notes].filter((value) => value.trim().length > 0).join("\n\n");
  }

  const automaticParts = new Set(
    [previousBase, nextBase].flatMap((value) => value.split(/[;\n]+/).map((part) => part.trim())).filter(Boolean),
  );
  const editedNotes = current.split(/[;\n]+/).filter((part) => !automaticParts.has(part.trim())).join("\n").trim();

  return [nextBase, editedNotes].filter((value) => value.trim().length > 0).join("\n\n");
}

export function SmartWhatsAppDrawer() {
  const {
    selectedProblems,
    selectedServiceOrPackage,
    portfolioReference,
    consultationNeeds,
    isDrawerOpen,
    selectOffer,
    closeDrawer,
    generateWhatsAppUrl,
  } = useConsultation();
  const uniqueId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const businessTypeRef = useRef<HTMLButtonElement>(null);
  const needsRef = useRef<HTMLTextAreaElement>(null);
  const previousNeedsRef = useRef(consultationNeeds);
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [needsText, setNeedsText] = useState(consultationNeeds);
  const [socialOrWeb, setSocialOrWeb] = useState("");
  const [errors, setErrors] = useState<FormErrors>(emptyErrors);

  useEffect(() => {
    const previousBase = previousNeedsRef.current;
    previousNeedsRef.current = consultationNeeds;
    setNeedsText((current) => mergeNeeds(current, previousBase, consultationNeeds));
    if (consultationNeeds.trim()) {
      setErrors((current) => current.needs ? { ...current, needs: "" } : current);
    }
  }, [consultationNeeds]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!isDrawerOpen) {
      if (dialog.open) dialog.close();
      return;
    }

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      const bodyPadding = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${bodyPadding + scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    const focusFrame = window.requestAnimationFrame(() => nameRef.current?.focus({ preventScroll: true }));

    return () => {
      window.cancelAnimationFrame(focusFrame);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isDrawerOpen]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>): void {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      closeDrawer();
    }
  }

  function clearError(field: FormField): void {
    setErrors((current) => current[field] ? { ...current, [field]: "" } : current);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const nextErrors: FormErrors = {
      name: name.trim() ? "" : "Isi nama Anda terlebih dahulu.",
      businessName: businessName.trim() ? "" : "Isi nama bisnis Anda terlebih dahulu.",
      businessType: businessTypes.includes(businessType) ? "" : "Pilih salah satu jenis bisnis Anda.",
      needs: needsText.trim() ? "" : "Ceritakan kebutuhan bisnis Anda atau pilih salah satu paket.",
    };
    setErrors(nextErrors);

    if (nextErrors.name) { nameRef.current?.focus(); return; }
    if (nextErrors.businessName) { businessNameRef.current?.focus(); return; }
    if (nextErrors.businessType) { businessTypeRef.current?.focus(); return; }
    if (nextErrors.needs) { needsRef.current?.focus(); return; }

    const url = generateWhatsAppUrl({
      name: name.trim(),
      businessName: businessName.trim(),
      businessType,
      customNotes: "",
      socialOrWeb: socialOrWeb.trim(),
      needsOverride: needsText,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const problemTitles = selectedProblems.map((value) => problems.find((problem) => problem.id === value || problem.title === value)?.title ?? value);
  const hasSelections = problemTitles.length > 0 || Boolean(selectedServiceOrPackage) || Boolean(portfolioReference);
  const inputClassName = "mt-2 min-h-[48px] w-full min-w-0 rounded-xl border bg-white px-4 py-3 text-base text-[#0F172A] outline-none transition-colors focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 motion-reduce:transition-none";

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby={`${uniqueId}-title`}
      aria-describedby={`${uniqueId}-description`}
      onCancel={(event) => { event.preventDefault(); closeDrawer(); }}
      onClose={() => { if (!dialogRef.current?.open) closeDrawer(); }}
      onClick={handleBackdropClick}
      className="fixed inset-x-0 top-auto bottom-0 m-0 mx-auto max-h-[92dvh] w-full max-w-2xl overflow-hidden rounded-t-[2rem] border-0 bg-white p-0 text-[#0F172A] shadow-2xl backdrop:bg-slate-900/55 backdrop:backdrop-blur-sm md:inset-y-0 md:my-auto md:rounded-[2rem]"
    >
      <div className="flex max-h-[92dvh] min-h-0 flex-col">
        <div aria-hidden="true" className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-slate-200 md:hidden" />
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-200 px-4 pb-4 pt-3 sm:px-6 md:pt-5">
          <div className="min-w-0 pt-1">
            <h2 id={`${uniqueId}-title`} className="text-xl font-bold leading-7 tracking-tight sm:text-2xl">{sectionCopy.drawer.title}</h2>
            <p id={`${uniqueId}-description`} className="mt-2 text-sm leading-6 text-slate-600">Ceritakan kondisi bisnis Anda. Pilihan dan catatan Anda akan disiapkan menjadi pesan WhatsApp.</p>
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label={sectionCopy.drawer.closeLabel}
            className="inline-flex min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] motion-reduce:transition-none"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="min-h-0 min-w-0 flex-1 space-y-6 overflow-y-auto px-4 py-5 sm:px-6">
            <section aria-labelledby={`${uniqueId}-summary-title`} className="min-w-0 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
              <h3 id={`${uniqueId}-summary-title`} className="flex items-center gap-2 text-sm font-bold text-[#2563EB]">
                <CheckCheck aria-hidden="true" className="size-4 shrink-0" />Ringkasan pilihan Anda
              </h3>
              {hasSelections ? (
                <dl className="mt-3 space-y-3 text-sm leading-6">
                  {selectedServiceOrPackage && <div><dt className="font-semibold">Layanan / paket</dt><dd className="break-words text-slate-600">{selectedServiceOrPackage}</dd></div>}
                  {problemTitles.length > 0 && <div><dt className="font-semibold">Masalah bisnis</dt><dd><ul className="mt-1 list-disc space-y-1 pl-5 text-slate-600">{problemTitles.map((title, index) => <li key={`${index}-${title}`} className="break-words">{title}</li>)}</ul></dd></div>}
                  {portfolioReference && <div><dt className="font-semibold">Referensi portofolio</dt><dd className="break-words text-slate-600">{portfolioReference}</dd></div>}
                </dl>
              ) : <p className="mt-2 text-sm leading-6 text-slate-600">Belum memilih layanan? Anda bisa langsung menceritakan kondisi bisnis atau memilih paket di bawah ini.</p>}
            </section>

            <fieldset className="min-w-0">
              <legend className="text-sm font-semibold">Pilihan paket <span className="font-normal text-slate-500">(opsional)</span></legend>
              <p className="mt-1 text-xs leading-6 text-slate-500">Pilih paket yang ingin didiskusikan. Catatan tambahan Anda tetap tersimpan.</p>
              <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
                {packages.map((pkg) => {
                  const isSelected = selectedServiceOrPackage === pkg.name;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => selectOffer(pkg.name)}
                      className={`inline-flex min-h-[48px] min-w-0 items-center justify-between gap-2 rounded-xl border px-3 py-3 text-left text-sm font-medium leading-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none ${isSelected ? "border-[#2563EB] bg-blue-50 text-[#2563EB]" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"}`}
                    >
                      <span className="min-w-0 break-words">{pkg.name}</span>
                      {isSelected && <Check aria-hidden="true" className="size-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor={`${uniqueId}-name`} className="text-sm font-semibold">{sectionCopy.drawer.nameLabel} <span className="text-red-600" aria-hidden="true">*</span></label>
                <input
                  ref={nameRef}
                  id={`${uniqueId}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => { setName(event.target.value); clearError("name"); }}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${uniqueId}-name-error` : undefined}
                  className={`${inputClassName} ${errors.name ? "border-red-400" : "border-slate-300"}`}
                />
                {errors.name && <p id={`${uniqueId}-name-error`} className="mt-2 text-xs leading-5 text-red-600">{errors.name}</p>}
              </div>
              <div className="min-w-0">
                <label htmlFor={`${uniqueId}-business-name`} className="text-sm font-semibold">{sectionCopy.drawer.businessNameLabel} <span className="text-red-600" aria-hidden="true">*</span></label>
                <input
                  ref={businessNameRef}
                  id={`${uniqueId}-business-name`}
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  required
                  value={businessName}
                  onChange={(event) => { setBusinessName(event.target.value); clearError("businessName"); }}
                  aria-invalid={Boolean(errors.businessName)}
                  aria-describedby={errors.businessName ? `${uniqueId}-business-name-error` : undefined}
                  className={`${inputClassName} ${errors.businessName ? "border-red-400" : "border-slate-300"}`}
                />
                {errors.businessName && <p id={`${uniqueId}-business-name-error`} className="mt-2 text-xs leading-5 text-red-600">{errors.businessName}</p>}
              </div>
            </div>

            <fieldset className="min-w-0" aria-describedby={errors.businessType ? `${uniqueId}-business-type-error` : undefined}>
              <legend className="text-sm font-semibold">{sectionCopy.drawer.businessTypeLabel} <span className="text-red-600" aria-hidden="true">*</span><span className="sr-only">wajib dipilih</span></legend>
              <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
                {businessTypes.map((type, index) => {
                  const isSelected = businessType === type;
                  return (
                    <button
                      key={type}
                      ref={index === 0 ? businessTypeRef : undefined}
                      type="button"
                      aria-pressed={isSelected}
                      aria-invalid={Boolean(errors.businessType)}
                      aria-describedby={errors.businessType ? `${uniqueId}-business-type-error` : undefined}
                      onClick={() => { setBusinessType(type); clearError("businessType"); }}
                      className={`inline-flex min-h-[48px] min-w-0 items-center justify-between gap-2 rounded-xl border px-3 py-3 text-left text-sm font-medium leading-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 motion-reduce:transition-none ${isSelected ? "border-[#2563EB] bg-blue-50 text-[#2563EB]" : errors.businessType ? "border-red-300 bg-white text-slate-600" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"}`}
                    >
                      <span className="min-w-0 break-words">{type}</span>
                      {isSelected && <Check aria-hidden="true" className="size-4 shrink-0" />}
                    </button>
                  );
                })}
              </div>
              {errors.businessType && <p id={`${uniqueId}-business-type-error`} className="mt-2 text-xs leading-5 text-red-600">{errors.businessType}</p>}
            </fieldset>

            <div className="min-w-0">
              <label htmlFor={`${uniqueId}-needs`} className="text-sm font-semibold">{sectionCopy.drawer.needsLabel} <span className="text-red-600" aria-hidden="true">*</span></label>
              <p id={`${uniqueId}-needs-hint`} className="mt-1 text-xs leading-6 text-slate-500">Pilihan Anda sudah disiapkan. Silakan sesuaikan dan tambahkan catatan tentang bisnis Anda.</p>
              <textarea
                ref={needsRef}
                id={`${uniqueId}-needs`}
                name="needs"
                rows={5}
                required
                value={needsText}
                onChange={(event) => { setNeedsText(event.target.value); clearError("needs"); }}
                aria-invalid={Boolean(errors.needs)}
                aria-describedby={`${uniqueId}-needs-hint${errors.needs ? ` ${uniqueId}-needs-error` : ""}`}
                className={`${inputClassName} min-h-[140px] resize-y leading-7 ${errors.needs ? "border-red-400" : "border-slate-300"}`}
              />
              {errors.needs && <p id={`${uniqueId}-needs-error`} className="mt-2 text-xs leading-5 text-red-600">{errors.needs}</p>}
            </div>

            <div className="min-w-0">
              <label htmlFor={`${uniqueId}-social`} className="text-sm font-semibold">{sectionCopy.drawer.socialOrWebLabel} <span className="font-normal text-slate-500">(opsional)</span></label>
              <input
                id={`${uniqueId}-social`}
                name="socialOrWeb"
                type="text"
                autoComplete="url"
                value={socialOrWeb}
                onChange={(event) => setSocialOrWeb(event.target.value)}
                className={`${inputClassName} border-slate-300`}
              />
            </div>
            <p className="text-xs leading-6 text-slate-500"><span aria-hidden="true">*</span> Kolom wajib diisi.</p>
          </div>

          <div className="shrink-0 border-t border-slate-200 bg-white px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
            <button
              type="submit"
              className="inline-flex min-h-[48px] w-full min-w-0 items-center justify-center gap-3 rounded-2xl bg-[#059669] px-4 py-3 text-left text-sm font-semibold leading-6 text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-4 motion-reduce:transition-none sm:text-base"
            >
              <MessageCircle aria-hidden="true" className="size-5 shrink-0" />
              <span className="min-w-0">{sectionCopy.drawer.submitLabel}</span>
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </button>
            <p className="mt-2 text-center text-xs leading-5 text-slate-500">Pesan akan dibuka di WhatsApp untuk Anda tinjau dan kirim.</p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export function StickyContactBar() {
  const { openDrawer } = useConsultation();

  function navigateToSection(event: MouseEvent<HTMLAnchorElement>, href: "#paket" | "#portofolio"): void {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    window.history.pushState(null, "", href);
  }

  return (
    <>
      <nav aria-label="Akses cepat konsultasi" className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 grid min-w-0 grid-cols-[1fr_1fr_1.1fr] gap-1 rounded-2xl border border-slate-200 bg-white/95 p-1.5 text-[#0F172A] shadow-[0_8px_30px_rgba(15,23,42,0.16)] backdrop-blur-xl md:hidden">
        <a href="#paket" onClick={(event) => navigateToSection(event, "#paket")} className="flex min-h-[48px] min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-[11px] font-semibold transition-colors hover:bg-blue-50 hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] motion-reduce:transition-none">
          <Tag aria-hidden="true" className="size-4 shrink-0" />
          <span>{sectionCopy.mobileBar.packagesLabel}</span>
        </a>
        <a href="#portofolio" onClick={(event) => navigateToSection(event, "#portofolio")} className="flex min-h-[48px] min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-center text-[11px] font-semibold transition-colors hover:bg-blue-50 hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] motion-reduce:transition-none">
          <PanelsTopLeft aria-hidden="true" className="size-4 shrink-0" />
          <span>{sectionCopy.mobileBar.portfolioLabel}</span>
        </a>
        <button type="button" onClick={() => openDrawer()} className="flex min-h-[48px] min-w-0 flex-col items-center justify-center gap-1 rounded-xl bg-[#059669] px-1 py-1.5 text-center text-[11px] font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-2 motion-reduce:transition-none">
          <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
          <span>{sectionCopy.mobileBar.consultationLabel}</span>
        </button>
      </nav>
      <button
        type="button"
        onClick={() => openDrawer()}
        aria-label="Konsultasi bisnis via WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#059669] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-4 motion-reduce:transition-none md:flex"
      >
        <MessageCircle aria-hidden="true" className="size-5 shrink-0" />
        <span>{sectionCopy.mobileBar.consultationLabel}</span>
        <BriefcaseBusiness aria-hidden="true" className="size-4 shrink-0" />
      </button>
    </>
  );
}

export default SmartWhatsAppDrawer;
