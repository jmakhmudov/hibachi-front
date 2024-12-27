import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outlined-red' | 'outlined-foreground';
}

export default function Button({
  variant = "solid",
  ...props
}: ButtonProps) {
  const baseClasses = "px-10 h-11 rounded-full flex items-center justify-center gap-2 text-white font-medium hover:opacity-90 transition-all duration-150";

  const variantClasses = {
    solid: "bg-main-red text-black",
    'outlined-red': "border-[3px] border-main-red !text-main-red",
    'outlined-foreground': "border-[3px] border-white !text-white"
  };


  return (
    <button
      {...props}
      className={clsx(baseClasses, variantClasses[variant], props.className)}
    >
      {props.children}
    </button>
  )
}