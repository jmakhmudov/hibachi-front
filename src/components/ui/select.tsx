interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export default function Select({
  label,
  options,
  ...props
}: SelectProps) {
  return (
    <div>
      <label htmlFor={props.name} className="text-sm md:text-base">
        {label}
        {props.required && <span className="text-main-red">*</span>}
      </label>
      <select
        {...props}
        className={`border-2 border-primary rounded-2xl bg-white px-4 h-11 w-full ${props.className}`}
      >
        <option value="" disabled>
          {`Select ${label}`}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
