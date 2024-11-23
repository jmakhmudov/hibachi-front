export interface Meal {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface PricingDetails {
  id: number;
  created_at: string;
  updated_at: string;
  minimum_charge: number;
  adult_price: string;
  child_price: string;
  free_miles: number;
  mile_price: string;
}
