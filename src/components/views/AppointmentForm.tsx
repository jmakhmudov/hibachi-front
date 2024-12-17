'use client'

import { bookingAPI } from "@/api/booking";
import { confirmAppointment } from "@/app/appointment/[locationId]/actions";
import { AppointmentType, Meal, TimeSlotType } from "@/types";
import { heardBy } from "@/utils/constants";
import { useActionState, useEffect, useState, useTransition } from "react";
import Button from "../ui/button";
import { Calendar } from "../ui/calendar";
import Input from "../ui/input";
import Select from "../ui/select";
import TextArea from "../ui/textarea";
import TimeSlot from "../ui/time-slot";

const convertTo12HourFormat = (time: string): string => {
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const adjustedHour = hour % 12 || 12;
  return `${adjustedHour}:${minute.toString().padStart(2, "0")} ${period}`;
};

function toLocaleISOString(date: Date) {
  function pad(number: any) {
      if (number < 10) {
          return '0' + number;
      }
      return number;
  }

  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate())

}

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

  if (date) console.log(toLocaleISOString(date))
  useEffect(() => {
    setSelectedTimeId(0)

    setTranstion(() => {
      async function fetchTimeSlots() {
        if (date) {
          const time_slots = (await bookingAPI.getTimeSlots(toLocaleISOString(date), locationId))
            .sort((a: TimeSlotType, b: TimeSlotType) => {
              const timeA = a.time.split(":").map(Number);
              const timeB = b.time.split(":").map(Number);
              return timeA[0] - timeB[0] || timeA[1] - timeB[1];
            })
            .map((slot: TimeSlotType) => ({
              ...slot,
              time: convertTo12HourFormat(slot.time),
            }));
          setTimeSlots(time_slots)
        }
      }

      fetchTimeSlots()
    })

  }, [date, state, locationId])

  console.log(timeSlots)

  return (
    <form className=" relative grid grid-cols-1 gap-10" action={confirm}>
      <div className="flex flex-col md:flex-row justify-between gap-2 h-fit w-fit md:w-full md:max-w-[600px]">
        <Calendar
          mode="single"
          fromDate={new Date()}
          selected={date}
          onSelect={(date) => setDate(date)}
          className="rounded-md border-2 border-primary w-fit bg-white h-fit"
        />

        <div className="bg-white w-full rounded-md p-4 border-2 border-primary h-fit">
          <div className="font-bold mb-2">Time Slots</div>

          {
            isPending ?
              <div>loading</div>
              :
              <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-1">
                {
                  timeSlots.length > 0 ?
                    timeSlots.map(slot => (
                      <TimeSlot
                        selected={selectedTimeId === slot.id}
                        onClick={() => setSelectedTimeId(slot.id)}
                        timeSlot={slot}
                        key={slot.time}
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
        (!!selectedTimeId && date) &&
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

          <hr />

          <div>
            <div className="space-y-4 mt-2">
              <div>
                <div className="font-medium">Proteins (2 per person)</div>
                <ul className="list-disc pl-5 text-sm">
                  {
                    meals.default_meals.map(meal => (
                      <li key={meal.name}>{meal.name}</li>
                    ))
                  }
                </ul>
              </div>

              <div className="">
                <div className="font-medium">Upgrades</div>
                <ul className="list-disc pl-5 text-sm">
                  {
                    meals.additional_meals.map(meal => (
                      <li key={meal.name}>{meal.name} <span className="text-main-red font-semibold ml-2">${Number(meal.price).toLocaleString("us")}</span></li>
                    ))
                  }
                </ul>
              </div>

              <div>
                <TextArea
                  label="Food order"
                  name="orders"
                  required
                />
                <div className="text-xs md:text-sm opacity-50 mt-1">EXAMPLE: (Party of 10 adults & 5 kids)- Adults: 10 chicken, 5 steak, 5 shrimp. Kids: 5 chicken, 5 steak.</div>
              </div>
            </div>
          </div>

          <hr />

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

          <input type="text" name="timeslot_id" readOnly value={selectedTimeId} className="hidden" />
          <input type="text" name="date" value={toLocaleISOString(date)} className="hidden" />

          <Button type="submit">Confirm Appointment</Button>
        </div>
      }
      {state.error && <div className="font-bold text-4xl">Something went wrong, try again later!</div>}
      {state.message && <div className="font-bold text-4xl">You have successfully made a reservation!</div>}
    </form>
  )
}
