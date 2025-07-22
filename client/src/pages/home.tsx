import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import StructureSection from "@/components/structure-section";
import DepartmentsSection from "@/components/departments-section";
import RecruitmentSection from "@/components/recruitment-section";
import TrainingSection from "@/components/training-section";
import ToolsSection from "@/components/tools-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StructureSection />
      <DepartmentsSection />
      <RecruitmentSection />
      <TrainingSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
