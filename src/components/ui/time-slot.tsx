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
  const time = timeSlot.start_time

  return (
    <button
      {...props}
      data-selected={selected}
      className="p-1.5 px-3 border-2 border-primary rounded-md font-semibold data-[selected=true]:bg-primary data-[selected=true]:text-white"
    >
      {time}
    </button>
  )
}