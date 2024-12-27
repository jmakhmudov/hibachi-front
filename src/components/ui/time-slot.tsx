import { TimeSlotType } from "@/types"

interface TimeSlotProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  timeSlot: TimeSlotType;
  selected: boolean;
}


export default function TimeSlot({
  timeSlot,
  selected,
  ...props
}: TimeSlotProps) {
  const time = timeSlot.time

  return (
    <button
      {...props}
      data-selected={selected}
      className="p-1.5 px-3 border-2 border-white rounded-md font-semibold data-[selected=true]:bg-main-red data-[selected=true]:text-black"
    >
      {time}
    </button>
  )
}