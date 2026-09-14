import HeroSection from '@/components/HeroSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import SolutionsSection from '@/components/SolutionsSection';
import BorderGuardSection from '@/components/BorderGuardSection';
import SecurityOpsSection from '@/components/SecurityOpsSection';
import CasesSection from '@/components/CasesSection';
import PartnersSection from '@/components/PartnersSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F7F9FB] overflow-x-hidden">
      <HeroSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <BorderGuardSection />
      <SecurityOpsSection />
      <CasesSection />
      <PartnersSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
