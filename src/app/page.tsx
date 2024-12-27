import AdditionalMealsSection from "@/components/views/sections/AdditionalMealsSection";
import ContactsSection from "@/components/views/sections/ContactsSections";
import HeroSection from "@/components/views/sections/HeroSection";
import HowItWorksSection from "@/components/views/sections/HowItWorksSection";
import PricingSection from "@/components/views/sections/PricingSection";
import ProteinSection from "@/components/views/sections/ProteinSection";
import SpecialsSection from "@/components/views/sections/SpecialsSection";
import {videoAPI} from "@/api/video";

export default async function Home() {
  const videos = await videoAPI.getVideos();

  return (
    <div className="space-y-20">
      <HeroSection videos={videos} />

      <HowItWorksSection />

      <ProteinSection />

      <PricingSection />

      <ContactsSection />
    </div>
  );
}
