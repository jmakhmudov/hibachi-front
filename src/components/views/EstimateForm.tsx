"use client";

import Checkbox from "@/components/ui/checkbox";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import { LocationType, Meal, PricingDetails } from "@/types";
import { useState, useEffect } from "react";

export default function EstimateForm({
  locations,
  additional_meals,
  pricing
}: {
  locations: LocationType[];
  additional_meals: Meal[];
  pricing: PricingDetails;
}) {
  const [selectedMeals, setSelectedMeals] = useState<{ meal_id: number; quantity: number }[]>([]);
  const [adultsQty, setAdultsQty] = useState(0);
  const [kidsQty, setKidsQty] = useState(0);
  const [extraProteins, setExtraProteins] = useState(0);
  const [distance, setDistance] = useState(0);
  const [travelingFees, setTravelingFees] = useState(0);
  const [mealTotal, setMealTotal] = useState(0);
  const [tipsSuggestion, setTipsSuggestion] = useState(0);

  const handleMealSelect = (meal_id: number, isSelected: boolean) => {
    if (isSelected) {
      setSelectedMeals((prev) => [...prev, { meal_id, quantity: 1 }]);
    } else {
      setSelectedMeals((prev) => prev.filter((meal) => meal.meal_id !== meal_id));
    }
  };

  const handleQuantityChange = (meal_id: number, quantity: number) => {
    setSelectedMeals((prev) =>
      prev.map((meal) =>
        meal.meal_id === meal_id ? { ...meal, quantity } : meal
      )
    );
  };

  const calculatePricing = () => {
    const additionalMiles = Math.max(0, distance - pricing.free_miles);
    const travelCost = additionalMiles * parseFloat(pricing.mile_price);
    const extraProt = extraProteins * 15;

    const adultCost = adultsQty * parseFloat(pricing.adult_price);
    const kidCost = kidsQty * parseFloat(pricing.child_price);

    const selectedMealsCost = selectedMeals.reduce((total, meal) => {
      const mealDetails = additional_meals.find((m) => m.id === meal.meal_id);
      const mealPrice = mealDetails ? Number(mealDetails.price) : 0;
      return total + mealPrice * meal.quantity;
    }, 0);

    const totalMealCost = adultCost + kidCost + selectedMealsCost + extraProt;

    const tips = (totalMealCost + travelCost) * 0.2;

    setTravelingFees(travelCost);
    setMealTotal(totalMealCost + travelCost);
    setTipsSuggestion(tips);
  };

  useEffect(() => {
    calculatePricing();
  }, [adultsQty, kidsQty, distance, selectedMeals, extraProteins]);

  return (
    <form className="grid grid-cols-1 gap-8">
      <div className="space-y-2">
        <Input
          label="Number of adults"
          infoText="Adults who are 13 years old or older"
          name="adults_qty"
          type="number"
          min={0}
          step={1}
          value={adultsQty}
          onChange={(e) => setAdultsQty(Number(e.target.value))}
        />

        <Input
          label="Number of kids"
          infoText="12 years old and under, 3 and under are free"
          type="number"
          name="kids_qty"
          min={0}
          step={1}
          value={kidsQty}
          onChange={(e) => setKidsQty(Number(e.target.value))}
        />

        <Input
          label="Extra proteins"
          infoText="Each person gets two proteins. the third proteins will be an add on"
          type="number"
          name="kids_qty"
          min={0}
          step={1}
          value={extraProteins}
          onChange={(e) => setExtraProteins(Number(e.target.value))}
        />

        <div className="">
          <div className="font-bold mb-4">Upgrades</div>
          <div className="space-y-2">
            {additional_meals.map((meal) => (
              <div key={meal.name}>
                <div className="flex items-center gap-3">
                  <Checkbox
                    onStatusChange={(status) => handleMealSelect(meal.id, status)}
                    label={meal.name}
                  />
                  <div className="text-main-red text-sm font-semibold">
                    ${Number(meal.price).toLocaleString()}
                  </div>
                </div>

                <div
                  data-selected={selectedMeals.some((selectedMeal) => selectedMeal.meal_id === meal.id)}
                  className="hidden data-[selected=true]:block mt-2"
                >
                  <Input
                    label="Quantity"
                    type="number"
                    min={1}
                    step={1}
                    defaultValue={1}
                    onChange={(e) =>
                      handleQuantityChange(meal.id, Number(e.target.value))
                    }
                    className="w-20"
                    required
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Select
          label="Closest location"
          name="closest_location"
          options={locations.map((l) => ({ value: l.id.toString(), label: l.name }))}
          required
        />

        <Input
          label="How far from selected location?"
          infoText={pricing.free_miles > 0 ? `In miles, first ${pricing.free_miles} miles are free` : "In miles"}
          type="number"
          name="how_far"
          min={0}
          step={1}
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          required
        />
      </div>

      <input
        type="hidden"
        name="additional_meals"
        value={JSON.stringify(selectedMeals)}
      />

      <div className="bg-foreground p-4 rounded-lg text-white space-y-5">
        <div>
          <div className="font-medium text-sm md:text-base">Traveling fees</div>
          <div className="font-bold text-4xl">$ {travelingFees.toFixed(0)}</div>
        </div>

        <div>
          <div className="font-medium text-sm md:text-base">Total cash for meal (Traveling fees are included already)</div>
          <div className="font-bold text-4xl">$ {mealTotal.toFixed(0)}</div>
        </div>

        <div>
          <div className="font-medium text-sm md:text-base">20% Tips suggestion</div>
          <div className="font-bold text-4xl">$ {tipsSuggestion.toFixed(0)}</div>
        </div>
      </div>
    </form>
  );
}
