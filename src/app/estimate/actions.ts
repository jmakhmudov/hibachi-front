"use server"

import {pricingAPI} from "@/api/pricing";


export async function estimateAction(
  _actionState: any,
  formData: FormData
) {
  try {
    const body = JSON.stringify({
      adults_qty: formData.get("adults_qty"),
      kids_qty: formData.get("kids_qty"),
      closest_location: formData.get("closest_location"),
      how_far: formData.get("how_far"),
      additional_meals: JSON.parse(formData.get("additional_meals") as string || "[]")
  })
    const data = await pricingAPI.estimateCost(body)
    console.log(data)

    return data;
  } catch (error) {
    console.log(error)
    return {
      error: 'error',
    }
  }
}