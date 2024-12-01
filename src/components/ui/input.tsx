interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  ...props
}: InputProps) {
  return (
    <div className="grid">
      <label htmlFor={props.name} className="text-sm md:text-base">{label}{props.required && <span className="text-main-red">*</span>}</label>
      <input
        {...props}
        placeholder={label}
        className={`border-2 border-primary rounded-2xl bg-white px-4 h-11 w-full ${props.className}`}
      />
    </div>
  )
}