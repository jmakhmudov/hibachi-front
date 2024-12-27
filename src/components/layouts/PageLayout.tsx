interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  content?: React.ReactNode;
  form?: boolean;
  id?: string;
}

export default function PageLayout({
  title,
  children,
  content,
  form,
  id
}: PageLayoutProps) {
  return (
    <section id={id} data-form={form} className="flex items-center justify-between w-full data-[form=true]:md:px-[20vw]">
      <div className="space-y-5 w-full">
        <h2 className="text-3xl md:text-5xl text-main-red pathway font-black uppercase">{title}</h2>
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