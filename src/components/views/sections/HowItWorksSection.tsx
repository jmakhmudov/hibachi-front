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
        <p>Bamboo Hibachi brings the hibachi experience to your backyard!</p>

        <div>
          <b>Our chef arrives with</b>
          <ul className="list-disc ml-5">
            <li>Grill</li>
            <li>Ready to wow your guests with a <span className="text-main-red">fire</span> show</li>
            <li>Fresh salad</li>
            <li>Signature sauces</li>
            <li>Garlic fried rice</li>
            <li>2 protein choices per person</li>
            <li>Hibachi vegetables</li>
          </ul>
        </div>

        <p>Just set up tables, chairs, plates, and silverware—we’ll handle the rest!</p>
      </div>
    </PageLayout>
  )
}