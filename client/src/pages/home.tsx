import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section-new";
import StructureSection from "@/components/structure-section";
import DepartmentsSection from "@/components/departments-section";
import RecruitmentSection from "@/components/recruitment-section";
import TrainingSection from "@/components/training-section";
import ToolsSection from "@/components/tools-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import StatusIndicator from "@/components/status-indicator";
import BackgroundAnimations from "@/components/background-animations";
import EasterEggHints from "@/components/easter-egg-hints";
import AdvancedGimmicks from "@/components/advanced-gimmicks";
import FAQSection from "@/components/faq-section";
import GimmickTestEnhanced from "@/components/gimmick-test-enhanced";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <BackgroundAnimations />
      <Navigation />
      <div className="pt-16 relative z-10"> {/* Add spacing to prevent overlap with fixed navbar */}
        <HeroSection />
        <AboutSection />
        <StructureSection />
        <DepartmentsSection />
        <RecruitmentSection />
        <TrainingSection />
        <ToolsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <StatusIndicator />
        <EasterEggHints />
        <AdvancedGimmicks />
        <GimmickTestEnhanced />
      </div>
    </div>
  );
}
