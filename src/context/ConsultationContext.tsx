"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { contacts, packages, portfolio, problems, services } from "../data/siteData";
import type {
  ConsultationContextValue,
  ConsultationFormData,
  OpenDrawerOptions,
} from "../types/site";

export type { ConsultationContextValue, ConsultationFormData, OpenDrawerOptions } from "../types/site";

export interface ConsultationProviderProps {
  children: ReactNode;
}

export const ConsultationContext = createContext<ConsultationContextValue | undefined>(undefined);

function singleLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function resolveOffer(value: string): string {
  const normalized = singleLine(value);
  return packages.find((item) => item.id === normalized || item.name === normalized)?.name
    ?? services.find((item) => item.id === normalized || item.title === normalized)?.title
    ?? normalized;
}

function resolvePortfolio(value: string): string {
  const normalized = singleLine(value);
  return portfolio.find((item) => item.id === normalized || item.brandName === normalized)?.brandName
    ?? normalized;
}

function buildConsultationNeeds(
  selectedProblems: readonly string[],
  selectedServiceOrPackage: string,
  portfolioReference: string | null,
  customNotes = "",
): string {
  const problemTitles = selectedProblems.map((selected) =>
    problems.find((problem) => problem.id === selected || problem.title === selected)?.title
      ?? singleLine(selected),
  );
  const needs = [
    singleLine(selectedServiceOrPackage),
    ...problemTitles,
    portfolioReference ? `Referensi portofolio: ${singleLine(portfolioReference)}` : "",
    singleLine(customNotes),
  ].filter((value) => value.length > 0);

  return [...new Set(needs)].join("; ");
}

export function ConsultationProvider({ children }: ConsultationProviderProps) {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [selectedServiceOrPackage, setSelectedServiceOrPackage] = useState<string>("");
  const [portfolioReference, setPortfolioReference] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleProblem = useCallback((problem: string): void => {
    const normalized = singleLine(problem);
    if (!normalized) return;

    const problemId = problems.find((item) => item.id === normalized || item.title === normalized)?.id
      ?? normalized;

    setSelectedProblems((current) =>
      current.includes(problemId)
        ? current.filter((item) => item !== problemId)
        : [...current, problemId],
    );
    setIsDrawerOpen(true);
  }, []);

  const clearProblems = useCallback((): void => {
    setSelectedProblems([]);
  }, []);

  const openDrawer = useCallback((options?: OpenDrawerOptions): void => {
    if (options?.offer !== undefined) {
      setSelectedServiceOrPackage(resolveOffer(options.offer));
    }

    if (options?.portfolio !== undefined) {
      setPortfolioReference(resolvePortfolio(options.portfolio) || null);
    }

    setIsDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback((): void => {
    setIsDrawerOpen(false);
  }, []);

  const selectOffer = useCallback((offer: string): void => {
    openDrawer({ offer });
  }, [openDrawer]);

  const setPortfolioRef = useCallback((reference: string | null): void => {
    if (reference === null || !singleLine(reference)) {
      setPortfolioReference(null);
      return;
    }

    openDrawer({ portfolio: reference });
  }, [openDrawer]);

  const consultationNeeds = useMemo(() =>
    buildConsultationNeeds(selectedProblems, selectedServiceOrPackage, portfolioReference),
  [selectedProblems, selectedServiceOrPackage, portfolioReference]);

  const generateWhatsAppUrl = useCallback((formData: ConsultationFormData): string => {
    const combinedNeeds = formData.needsOverride === undefined
      ? buildConsultationNeeds(selectedProblems, selectedServiceOrPackage, portfolioReference, formData.customNotes)
      : singleLine(formData.needsOverride);

    const message = [
      "Halo Mas Anggit, saya ingin konsultasi tentang bisnis saya.",
      "",
      `Nama: ${singleLine(formData.name)}`,
      `Nama bisnis: ${singleLine(formData.businessName)}`,
      `Jenis bisnis: ${singleLine(formData.businessType)}`,
      `Kebutuhan atau masalah utama: ${combinedNeeds}`,
      `Instagram/website: ${singleLine(formData.socialOrWeb)}`,
    ].join("\n");

    return `https://wa.me/${contacts.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [selectedProblems, selectedServiceOrPackage, portfolioReference]);

  const value = useMemo<ConsultationContextValue>(() => ({
    consultationNeeds,
    selectedProblems,
    toggleProblem,
    clearProblems,
    selectedServiceOrPackage,
    selectOffer,
    portfolioReference,
    setPortfolioRef,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    generateWhatsAppUrl,
  }), [
    consultationNeeds,
    selectedProblems,
    toggleProblem,
    clearProblems,
    selectedServiceOrPackage,
    selectOffer,
    portfolioReference,
    setPortfolioRef,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    generateWhatsAppUrl,
  ]);

  return <ConsultationContext.Provider value={value}>{children}</ConsultationContext.Provider>;
}

export function useConsultation(): ConsultationContextValue {
  const context = useContext(ConsultationContext);

  if (context === undefined) {
    throw new Error("useConsultation harus digunakan di dalam ConsultationProvider.");
  }

  return context;
}
