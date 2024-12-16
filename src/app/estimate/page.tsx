import {locationsAPI} from "@/api/locations";
import {menuAPI} from "@/api/menu";
import PageLayout from "@/components/layouts/PageLayout";
import {LocationType, Meal} from "@/types";
import EstimateForm from "@/components/views/EstimateForm";
import { pricingAPI } from "@/api/pricing";

export default async function EstimatePage() {
  const locations: LocationType[] = await locationsAPI.getAll();
  const additional_meals: Meal[] = (await menuAPI.getMeals()).additional_meals;
  const pricing = (await pricingAPI.getPricing())[0];

  return (
    <PageLayout title="Estimate Cost" form>
      <EstimateForm locations={locations} additional_meals={additional_meals} pricing={pricing} />
    </PageLayout>
  )
}
