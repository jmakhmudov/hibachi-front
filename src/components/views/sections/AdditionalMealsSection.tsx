import { Meal } from "@/types";
import PageLayout from "../../layouts/PageLayout";
import { menuAPI } from "@/api/menu";
import MealCard from "../../MealCard";

export default async function AdditionalMealsSection() {
  const meals: Meal[] = (await menuAPI.getMeals()).additional_meals;
  console.log(meals)

  return (
    <PageLayout
      title="Additional Meals"
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5 w-full">
        {
          meals.map(meal => (
            <MealCard key={meal.name} meal={meal} />
          ))
        }
      </div>
    </PageLayout>
  )
}