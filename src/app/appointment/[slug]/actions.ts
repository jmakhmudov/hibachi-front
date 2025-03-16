"use server"

import { bookingAPI } from "@/api/booking"

export async function confirmAppointment(
  state: any,
  formData: FormData
) {
  try {
    const orders = await formData.getAll('orders')
  
    orders.join(', ')
  
    await formData.set('orders', orders.toString())
    console.log(formData)

    const data = await bookingAPI.makeReservation(formData)
    console.log(data)
    
    return {
      error: '',
      message: 'success',
      data: data
    }
  } catch (error) {
    console.log(error)
    return {
      error: 'error'
    }
  }
}