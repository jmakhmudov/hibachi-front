import { Meal } from "@/types";
import PageLayout from "../../layouts/PageLayout";
import { menuAPI } from "@/api/menu";
import MealCard from "../../MealCard";

export default async function ProteinSection() {
  const meals: Meal[] = (await menuAPI.getMeals()).default_meals;
  const additional_meals: Meal[] = (await menuAPI.getMeals()).additional_meals;

  return (
    <PageLayout
      title="Menu"
      id="menu"
    >
      <div className="flex flex-col md:flex-row gap-10 justify-between">
        <div className="w-full">
          <div>
            <div className="pathway text-3xl uppercase font-black">Protein Choices</div>
            <ul className="list-disc pl-5 text-lg">
              {
                meals.map(meal => (
                  <li>{meal.name}</li>
                ))
              }
            </ul>
          </div>

          <div className="mt-10">
            <div className="pathway text-3xl uppercase font-black">Upgrades</div>
            <ul className="list-disc pl-5 text-lg">
              {
                additional_meals.map(meal => (
                  <li>{meal.name} <span className="font-bold text-main-red">${Number(meal.price).toLocaleString("us")}</span></li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className=" w-full">
          <div className="pathway text-3xl uppercase font-black">What's included</div>
          <p>2 Proteins Per Person</p>
        </div>
      </div>
    </PageLayout>
  )
}