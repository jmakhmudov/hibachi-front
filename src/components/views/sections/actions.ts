"use server";

import { contactAPI } from "@/api/contact";

const SITE_SECRET = process.env.SITE_SECRET;

export async function sendMessageAction(_actionState: any, formData: FormData) {
  try {
    const captchaValue = formData.get("g-recaptcha-response");

    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SITE_SECRET}&response=${captchaValue}`
    ).then((res) => res.json());

    if (!captchaResponse.success) {
      return {
        error: "Captcha verification failed. Please try again.",
      };
    }

    const data = await contactAPI.sendMessage(formData);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong, please try again later.",
    };
  }
}
