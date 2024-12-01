'use client'

import { bookingAPI } from "@/api/booking";
import { confirmAppointment } from "@/app/appointment/[locationId]/actions";
import { AppointmentType, Meal, TimeSlotType } from "@/types";
import { heardBy } from "@/utils/constants";
import { useActionState, useEffect, useState, useTransition } from "react";
import Button from "../ui/button";
import { Calendar } from "../ui/calendar";
import Checkbox from "../ui/checkbox";
import Input from "../ui/input";
import Select from "../ui/select";
import TextArea from "../ui/textarea";
import TimeSlot from "../ui/time-slot";

export default function AppointmentForm({
  locationId,
  meals
}: {
  locationId: number,
  meals: {
    default_meals: Meal[],
    additional_meals: Meal[]
  }
}) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlots, setTimeSlots] = useState<TimeSlotType[]>([]);
  const [isPending, setTranstion] = useTransition();
  const [selectedTimeId, setSelectedTimeId] = useState<number>();
  const [state, confirm] = useActionState(confirmAppointment, {
    error: '',
    message: '',
    data: {} as AppointmentType
  });

  useEffect(() => {
    setSelectedTimeId(0)

    setTranstion(() => {
      async function fetchTimeSlots() {
        if (date) {
          const time_slots = await bookingAPI.getTimeSlots(date.toLocaleDateString(), locationId);
          setTimeSlots(time_slots)
        }
      }

      fetchTimeSlots()
    })

  }, [date, state])

  return (
    <form className=" relative grid grid-cols-1 gap-10" action={confirm}>
      <div className="flex flex-col md:flex-row justify-between gap-2 h-fit w-fit">
        <Calendar
          mode="single"
          fromDate={new Date()}
          selected={date}
          onSelect={setDate}
          className="rounded-md border-2 border-primary w-fit bg-white h-fit"
        />
        <div className="bg-white w-full rounded-md p-4 border-2 border-primary h-fit">
          <div className="font-bold mb-2">Time Slots</div>

          {
            isPending ?
              <div>loading</div>
              :
              <div className="grid grid-cols-[repeat(auto-fill,minmax(70px,1fr))] gap-1">
                {
                  timeSlots.length > 0 ?
                    timeSlots.map(slot => (
                      <TimeSlot
                        selected={selectedTimeId === slot.id}
                        onClick={() => setSelectedTimeId(slot.id)}
                        timeSlot={slot}
                        key={slot.start_time}
                      />
                    ))
                    :
                    <div>No time slots are available.</div>
                }
              </div>
          }
        </div>
      </div>

      {
        !!selectedTimeId &&
        <div className="pb-56 space-y-3">
          <Input
            label="First Name"
            name="first_name"
            required
          />

          <Input
            label="Last Name"
            name="last_name"
            required
          />

          <Input
            label="Phone number"
            name="phone_number"
            required
          />

          <Input
            label="Email"
            name="email_address"
            type="email"
            required
          />

          <Input
            label="Number of adults"
            name="num_adults"
            type="number"
            min={0}
            step={1}
            required
          />

          <Input
            label="Number of kids"
            name="num_kids"
            type="number"
            min={0}
            step={1}
            required
          />

          <div>
            <div>Orders<span className="text-main-red">*</span></div>
            <div className="space-y-3 mt-2">
              {
                meals.default_meals.map(meal => (
                  <Checkbox
                    key={meal.name}
                    label={meal.name}
                    value={meal.name}
                    name="orders"
                  />
                ))
              }
              {
                meals.additional_meals.map(meal => (
                  <div className="flex items-center gap-3">
                    <Checkbox
                      key={meal.name}
                      label={meal.name}
                      value={meal.name}
                      name="orders"
                    />
                    <div className="text-main-red text-sm font-semibold">${Number(meal.price).toLocaleString()}/person</div>
                  </div>
                ))
              }
            </div>
          </div>

          <TextArea
            label="Additional message"
            name="additional_message"
          />

          <TextArea
            label="Allergies"
            name="allergies"
            required
          />

          <TextArea
            label="Occasion"
            name="occasion"
            required
          />

          <Input
            label="Promo or referal code"
            name="promo_or_ref_code"
          />

          <Input
            label="Chef preference"
            name="chef_preference"
          />

          <Select
            label="Heard by"
            name="heard_by"
            options={heardBy}
            required
          />

          <input type="text" name="time_slot" readOnly value={selectedTimeId} className="hidden" />

          <Button type="submit">Confirm Appointment</Button>
        </div>
      }
      {state.error && <div className="font-bold text-4xl">Something went wrong, try again later!</div>}
      {state.message && <div className="font-bold text-4xl">You have successfully made a reservation!</div>}
    </form>
  )
}
