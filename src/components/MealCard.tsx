import { Meal } from "@/types"
import Image from "next/image"

interface MealCardProps {
  meal: Meal
}

export default function MealCard({
  meal
}: MealCardProps) {
  return (
    <div className="bg-white rounded-2xl p-3.5 space-y-3 select-none">
      <Image
        src={meal.image}
        alt={meal.name}
        width={300}
        height={180}
        className="object-cover w-full rounded-lg aspect-[3/2]"
      />

      <div className="flex items-center justify-between">
        <div className="font-semibold">{meal.name}</div>
        <div className="bg-main-green text-white p-1 px-2 rounded-lg font-semibold text-xs md:text-sm text-right">
          {
            meal.price ?
            `$ ${meal.price.toLocaleString()}`
            :
            '2 pp'
          }
        </div>
      </div>
    </div>
  )
}