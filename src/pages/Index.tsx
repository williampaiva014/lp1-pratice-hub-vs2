import Navbar from "@/components/Navbar";
import GlowOrbs from "@/components/GlowOrbs";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import StorytellingSection from "@/components/StorytellingSection";
import ProofSection from "@/components/ProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <GlowOrbs />
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <StorytellingSection />
      <ProofSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
