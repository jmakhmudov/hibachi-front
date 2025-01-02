import Image from "next/image";
import PageLayout from "../../layouts/PageLayout";

import logoIMG from '@/../public/logo.webp';

export default function HowItWorksSection() {
  return (
    <PageLayout
      title="How It Works"
    // content={
    //   <Image
    //     src={logoIMG}
    //     alt="logo"
    //     width={400}
    //     height={400}
    //     className="rounded-full"
    //   />}
    >
      <div className="space-y-5 text-base md:text-lg 2xl:text-2xl">
        <h2 className="italic">At Bamboo Hibachi, we bring the ultimate hibachi experience to your backyard!</h2>
        <p>
          All you need to do is set up tables and chairs, and provide plates and utensils for your guests.
          We’ll take care of the rest!
        </p>
        <h3>Our service includes:</h3>
        <ul className="list-disc pl-5">
          <li>A skilled hibachi chef and grill brought to your location.</li>
          <li>A fire show to entertain and amaze your guests.</li>
          <li>Delicious sides: fresh salad, hibachi vegetables, and garlic fried rice with egg.</li>
          <li>Your choice of 2 proteins per person, cooked to perfection.</li>
          <li>Signature sauces to enhance every bite.</li>
        </ul>
        <p>
          Let us turn your gathering into an unforgettable culinary experience!
        </p>
      </div>
    </PageLayout>
  )
}