"use server"


import {contactAPI} from "@/api/contact";

export async function sendMessageAction(
  _actionState: any,
  formData: FormData
) {
  try {
    const data = await contactAPI.sendMessage(formData)
    console.log(data)

    return data;
  } catch (error) {
    console.log(error)
    return {
      error: 'error',
    }
  }
}