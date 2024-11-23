interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  content?: React.ReactNode;
}

export default function PageLayout({
  title,
  children,
  content
}: PageLayoutProps) {
  return (
    <section className="flex items-center gap-5 justify-between">
      <div className="space-y-5 w-full">
        <h2 className="font-bold text-3xl md:text-5xl">{title}</h2>
        <div className="w-full">
          {children}
        </div>
      </div>

      <div className="hidden md:block">
        {content}
      </div>
    </section>
  )
}