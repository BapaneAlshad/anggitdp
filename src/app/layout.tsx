import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { SmartWhatsAppDrawer, StickyContactBar } from "../components/SmartWhatsAppDrawer";
import { ConsultationProvider } from "../context/ConsultationContext";
import { profile, seo } from "../data/siteData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans", display: "swap" });

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: "/" } } : {}),
  title: seo.title,
  description: seo.description,
  applicationName: profile.name,
  authors: [{ name: profile.fullName }],
  creator: profile.name,
  category: "business",
  keywords: ["Anggit Prakoso", "Marketing UMKM", "Branding F&B", "Konsultan Marketing", "Website Bisnis", "Digital Growth"],
  openGraph: {
    type: "website",
    locale: seo.locale,
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
    images: siteUrl ? [{ url: new URL("/og-image.png", siteUrl), width: 1200, height: 630, alt: seo.title }] : [],
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: siteUrl ? [new URL("/og-image.png", siteUrl)] : [],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF9F6",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable}`}>
        <ConsultationProvider>
          <a href="#konten-utama" className="sr-only z-[100] min-h-[48px] items-center rounded-xl bg-[#0F172A] px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:inline-flex focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[#2563EB]">
            Lewati ke konten utama
          </a>
          <div id="site-content">{children}<StickyContactBar /></div>
          <SmartWhatsAppDrawer />
        </ConsultationProvider>
      </body>
    </html>
  );
}
