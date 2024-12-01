"use client"

import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Checkbox from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import { LocationType, Meal} from "@/types";
import {estimateAction} from "@/app/estimate/actions";
import {useActionState, useState} from "react";

interface EstimateType {
  total_cost: number;
}

export default function EstimateForm({
  locations,
  additional_meals
}: {
  locations: LocationType[];
  additional_meals: Meal[];
}) {
  const [state, estimate] = useActionState(estimateAction, {
    error: '',
    data: {} as EstimateType
  });
  const [selectedMeals, setSelectedMeals] = useState<{ meal_id: number; quantity: number }[]>([]);

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

  return (
    <form className="grid grid-cols-1 gap-8" action={estimate}>
      <div className="space-y-2">
        <Input
          label="Number of adults"
          type="number"
          name="adults_qty"
          min={0}
          step={1}
          required
        />

        <Input
          label="Number of kids"
          type="number"
          name="kids_qty"
          min={0}
          step={1}
          required
        />

        <Select
          label="Closest location"
          name="closest_location"
          options={locations.map(l => ({value: l.id.toString(), label: l.name}))}
          required
        />

        <Input
          label="How far (in miles)"
          type="number"
          name="how_far"
          min={0}
          step={1}
          required
        />
      </div>

      <div className="">
        <div className="font-bold mb-4">Additional Meals</div>
        <div className="space-y-2">
          {
            additional_meals.map(meal => (
              <div key={meal.name}>
                <div className="flex items-center gap-3">
                  <Checkbox
                    onStatusChange={(status) => handleMealSelect(meal.id, status)}
                    label={meal.name}
                  />
                  <div className="text-main-red text-sm font-semibold">${Number(meal.price).toLocaleString()}</div>
                </div>


                <div
                  data-selected={selectedMeals.some((selectedMeal) => selectedMeal.meal_id === meal.id)}
                  className="hidden data-[selected=true]:block"
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
            ))
          }
        </div>
      </div>

      <input
        type="hidden"
        name="additional_meals"
        value={JSON.stringify(selectedMeals)}
      />

      <Button type="submit">Estimate</Button>

      {state.total_cost && <div className="font-bold text-3xl">${state.total_cost.toLocaleString()}</div>}
    </form>
  )
}