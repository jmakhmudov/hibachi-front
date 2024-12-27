interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}


export default function TextArea({
  label,
  ...props
}: TextAreaProps) {
  return (
    <div>
      <label htmlFor={props.name}>{label}{props.required && <span className="text-main-red">*</span>}</label>
      <textarea
        {...props}
        placeholder={label}
        className={`border-2 border-primary rounded-2xl bg-white bg-opacity-15 p-4 py-2 w-full ${props.className}`}
      ></textarea>
    </div>
  )
}