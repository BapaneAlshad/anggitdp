import AboutSection from "../components/AboutSection";
import FaqAndFooter from "../components/FaqAndFooter";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PackagesSection from "../components/PackagesSection";
import PortfolioSection from "../components/PortfolioSection";
import ProblemDiagnosticSection from "../components/ProblemDiagnosticSection";
import ProcessAndTestimonials from "../components/ProcessAndTestimonials";
import ServicesSection from "../components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="konten-utama" tabIndex={-1}>
        <HeroSection />
        <ProblemDiagnosticSection />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <PortfolioSection />
        <ProcessAndTestimonials />
        <FaqAndFooter />
      </main>
    </>
  );
}
