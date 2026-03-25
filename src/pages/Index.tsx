import Navbar from "@/components/Navbar";
import GlowOrbs from "@/components/GlowOrbs";
import HeroSection from "@/components/HeroSection";
import ScrollTextSection from "@/components/ScrollTextSection";
import LogoSmokeSection from "@/components/LogoSmokeSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import StorytellingSection from "@/components/StorytellingSection";
import ProofSection from "@/components/ProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlowOrbs />
      <HeroSection />
      <LogoSmokeSection />
      <ProblemSection />
      <ScrollTextSection />
      <BenefitsSection />
      <StorytellingSection />
      <ProofSection />
      <FinalCTASection />
      <Footer />
      <Navbar />
      <CookieConsent />
    </div>
  );
};

export default Index;
