"use server";

import { bookingAPI } from "@/api/booking";

const SITE_SECRET = process.env.SITE_SECRET;

export async function confirmAppointment(state: any, formData: FormData) {
  try {
    const captchaValue = formData.get("g-recaptcha-response");

    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`
    ).then((res) => res.json());

    if (!captchaResponse.success) {
      return {
        error: "Captcha verification failed. Please try again.",
        payload: formData,
      };
    }

    const orders = formData.getAll("orders");

    orders.join(", ");

    formData.set("orders", orders.toString());
    console.log(formData);

    const data = await bookingAPI.makeReservation(formData);
    console.log(data);

    return {
      error: "",
      message: "success",
      data: data,
      payload: formData,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong, please try again later.",
      payload: formData,
    };
  }
}
