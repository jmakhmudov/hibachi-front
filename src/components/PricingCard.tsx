interface PricingCardProps {
  title: string;
  price: number;
}

export default function PricingCard({
  price,
  title
}: PricingCardProps) {
  return (
    <div className="flex items-center justify-between gap-3 text-lg bg-white p-3 px-4 rounded-2xl">
      <div className="font-semibold text-background">{title}</div>
      <div className="font-bold text-2xl text-background">$ {price.toLocaleString("us")}</div>
    </div>
  )
}