import AboutSection from "../components/AboutSection";
import FaqAndFooter from "../components/FaqAndFooter";
import HeroSection from "../components/HeroSection";
import PackagesSection from "../components/PackagesSection";
import PortfolioSection from "../components/PortfolioSection";
import ProblemDiagnosticSection from "../components/ProblemDiagnosticSection";
import ProcessAndTestimonials from "../components/ProcessAndTestimonials";
import ServicesSection from "../components/ServicesSection";
import { RevealMotion } from "../components/RevealMotion";
import { seo } from "../data/siteData";
import { createPageMetadata } from "./siteMetadata";

export const metadata = createPageMetadata("/", seo.title, seo.description);

export default function HomePage() {
  return (
    <>
      <main id="konten-utama" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ProblemDiagnosticSection />
        <PackagesSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessAndTestimonials />
        <FaqAndFooter />
      </main>
      <RevealMotion />
    </>
  );
}
