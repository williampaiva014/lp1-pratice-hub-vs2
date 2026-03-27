import Navbar from "@/components/Navbar";
import GlowOrbs from "@/components/GlowOrbs";
import HeroSection from "@/components/HeroSection";
import ScrollTextSection from "@/components/ScrollTextSection";
import MarketContextSection from "@/components/MarketContextSection";
import SocialProofSection from "@/components/SocialProofSection";
import StorytellingSection from "@/components/StorytellingSection";
import VideoSection from "@/components/VideoSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <GlowOrbs />
      <HeroSection />
      <MarketContextSection />
      <SocialProofSection />
      <ScrollTextSection />
      <StorytellingSection />
      <VideoSection />
      <TargetAudienceSection />
      <DifferentiationSection />
      <Footer />
      <Navbar />
      <CookieConsent />
    </div>
  );
};

export default Index;
