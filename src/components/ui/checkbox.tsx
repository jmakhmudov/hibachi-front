'use client'

import {useState} from "react";
import {FaCheck} from "react-icons/fa6";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onStatusChange?: (status: boolean) => void;
}

export default function Checkbox({
  label,
  onStatusChange,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    setChecked(!checked)
    if (onStatusChange) onStatusChange(!checked);
  }

  return (
    <div className="flex items-center gap-2">
      <div
        data-checked={checked}
        className="bg-white data-[checked=true]:bg-primary text-white cursor-pointer p-0.5 rounded-md border-2 border-primary"
        onClick={handleClick}
      >
        <FaCheck size={14} />
      </div>

      <input
        type="checkbox"
        {...props}
        checked={checked}
        className="hidden"
      />
      <label
        htmlFor={props.id || props.name}
        className="text-sm md:text-base"
      >
        {label}
      </label>
    </div>
  );
}
