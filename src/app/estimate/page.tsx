import {locationsAPI} from "@/api/locations";
import {menuAPI} from "@/api/menu";
import PageLayout from "@/components/layouts/PageLayout";
import {LocationType, Meal} from "@/types";
import EstimateForm from "@/components/views/EstimateForm";

export default async function EstimatePage() {
  const locations: LocationType[] = await locationsAPI.getAll();
  const additional_meals: Meal[] = (await menuAPI.getMeals()).additional_meals;

  return (
    <PageLayout title="Estimate Cost" form>
      <EstimateForm locations={locations} additional_meals={additional_meals} />
    </PageLayout>
  )
}
