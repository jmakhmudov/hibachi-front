"use client";

import { ChangeEvent, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  infoText?: string;
}

export default function Input({ label, infoText, ...props }: InputProps) {
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.type === "number") {
      if (isNaN(Number(e.target.value))) {
        return;
      }
    }
    setInput(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className="grid">
      <label htmlFor={props.name} className="text-sm md:text-base">
        {label}
        {props.required && <span className="text-main-red">*</span>}
      </label>

      <input
        {...props}
        type={props.type === "number" ? "text" : props.type}
        placeholder={label}
        onChange={handleInput}
        value={props.value ?? input}
        className={`border-2 border-primary rounded-2xl bg-white bg-opacity-15 px-4 h-11 w-full ${props.className}`}
      />
      {infoText && (
        <div className="text-xs md:text-sm opacity-50 mt-1">{infoText}</div>
      )}
    </div>
  );
}
