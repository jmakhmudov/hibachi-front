import { pricingAPI } from "@/api/pricing";
import PageLayout from "../../layouts/PageLayout";
import PricingCard from "../../PricingCard";
import { PricingDetails } from "@/types";

export default async function PricingSection() {
  const pricing: PricingDetails = (await pricingAPI.getPricing())[0];

  return (
    <PageLayout title="Pricing">
      <div className="grid md:grid-cols-2 gap-2 md:gap-5">
        <PricingCard title="Per adult" price={Number(pricing.adult_price)} />
        <PricingCard title="Per child" price={Number(pricing.child_price)} />
        <PricingCard title="Minimum charge" price={Number(pricing.minimum_charge)} />
        <PricingCard title="Mile price" price={Number(pricing.mile_price)} />
      </div>

      <div className="mt-10">
        <p className="flex items-start gap-1"><span className="text-main-red">*</span>We offer tables and chairs rentals, contact us for a quote</p>
        <p className="flex items-start gap-1"><span className="text-main-red">*</span>For Large Event Buffet Catering, contact us directly for a quote</p>
        <p className="flex items-start gap-1"><span className="text-main-red">*</span>We can accommodate most dietary restrictions upon request</p>
        <p className="flex items-start gap-1"><span className="text-main-red">*</span>Travel fee may be applied for any orders further than {pricing.free_miles} miles</p>
        <p className="flex items-start gap-1"><span className="text-main-red">*</span>Terms apply for giveaway bookings</p>
      </div>
    </PageLayout>
  )
}