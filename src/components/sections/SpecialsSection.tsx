import PageLayout from "../layouts/PageLayout";

export default function SpecialsSection() {
  return (
    <PageLayout title="Specials">
      <div className="grid md:grid-cols-2 gap-5 ">
        <div className="space-y-5">
          <div className="bg-main-red text-white italic font-bold text-lg text-center p-2 rounded-r-2xl">WEEKDAY</div>

          <div>
            <p>Monday - Thursday</p>
            <p><span className="text-main-red font-bold">25%</span> off food total</p>
            <p>$450 minimum for all orders</p>
          </div>

          <p>Promo code: <span className="text-main-red italic font-bold">WEEKDAY SPECIAL</span></p>
        </div>

        <div className="space-y-5">
          <div className="bg-primary text-white italic font-bold text-lg text-center p-2 rounded-r-2xl">LUNCH </div>

          <div>
            <p>Monday - Friday</p>
            <p>11AM - 2PM</p>
            <p><span className="text-main-red font-bold">$40</span> per adult</p>
            <p><span className="text-main-red font-bold">$20</span> per child under 12</p>
            <p><span className="text-main-red font-bold">$400</span> minimum for all orders</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}