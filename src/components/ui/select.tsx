"use client"

import React, { useState, useRef, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  name?: string;
  className?: string;
}

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  required,
  name,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <label htmlFor={name} className="text-sm md:text-base">
        {label}
        {required && <span className="text-main-red">*</span>}
      </label>
      <div
        className="border-2 border-primary rounded-2xl bg-white bg-opacity-15 px-4 h-11 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="truncate">
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : `Select ${label}`}
        </span>
        <span><SlArrowDown size={12}/></span>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-[#262626] border-2 border-primary rounded-2xl shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-white hover:text-black ${
                option.value === selectedValue ? "bg-main-red text-white" : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <input type="hidden" name={name} value={selectedValue} />
    </div>
  );
}
