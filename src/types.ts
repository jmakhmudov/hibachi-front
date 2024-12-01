export interface Meal {
  id: number;
  name: string;
  image: string;
  price: string;
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

export interface LocationType {
  id: number;
  name: string;
  zip_code: string;
}

export interface TimeSlotType {
  id: number;
  location: number;
  date: string;
  start_time: number;
  is_available: boolean;
}

export interface AppointmentType {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email_address: string;
  num_adults: number;
  num_kids: number;
  orders: string;
  additional_message?: string;
  allergies: string;
  occasion: string;
  promo_or_ref_code?: string;
  chef_preference?: string;
  heard_by: string;
  time_slot: number;
}

export interface VideoType {
  id: number;
  video_file: string;
}

