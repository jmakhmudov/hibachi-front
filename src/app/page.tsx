import AdditionalMealsSection from "@/components/sections/AdditionalMealsSection";
import ContactsSection from "@/components/sections/ContactsSections";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import ProteinSection from "@/components/sections/ProteinSection";
import SpecialsSection from "@/components/sections/SpecialsSection";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />

      <HowItWorksSection />

      <ProteinSection />

      <AdditionalMealsSection />

      <PricingSection />

      <SpecialsSection />

      <ContactsSection />
    </div>
  );
}
