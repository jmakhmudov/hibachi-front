import Button from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsGoogle } from "react-icons/bs";

export const dynamic = "force-static";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Bamboo Hibachi",
  image: "https://hibachibybamboo.com/food-truck.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2945 Frankford Rd",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75287",
    addressCountry: "US",
  },
  servesCuisine: ["Japanese", "Hibachi", "Street Food"],
  url: "https://hibachibybamboo.com/food-truck",
  priceRange: "$$",
  hasMenu: "https://www.doordash.com/store/bamboo-hibachi-coppell-35469795/",
};

export const metadata: Metadata = {
  title: "Food Truck",
  description:
    "Enjoy Bamboo Hibachi’s delicious Japanese fusion dishes on the go! Visit our food truck in Dallas and taste our signature hibachi flavors anywhere.",
  keywords: [
    "Bamboo Hibachi",
    "hibachi by bamboo",
    "hibachi by bamboo food truck",
    "food truck dallas",
    "food truck dallas hibachi",
    "food dallas hibachi",
    "food truck",
    "Dallas food truck",
    "hibachi Dallas",
    "Japanese street food",
    "hibachi near me",
    "food truck near me",
  ],
  openGraph: {
    title: "Bamboo Hibachi Food Truck",
    description:
      "Quick service, great taste, and a menu that travels — experience our signature dishes wherever you are.",
    url: "https://hibachibybamboo.com/food-truck",
    siteName: "Bamboo Hibachi",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://hibachibybamboo.com/food-truck",
  },
};

function CTAButton() {
  return (
    <Link
      href={
        "https://www.doordash.com/store/bamboo-hibachi-coppell-35469795/76267546/?preview=1"
      }
      target="_blank"
      className=" fixed bottom-10 left-1/2 -translate-x-1/2 z-10"
    >
      <Button className="shadow-lg shadow-main-red/40">Order Online</Button>
    </Link>
  );
}

export default function FoodTruckPage() {
  return (
    <section className="relative flex flex-col md:flex-row justify-between gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-main-red w-[400px] h-[450px] rounded-full rotate-12 blur-3xl opacity-40 md:opacity-60 absolute -top-20 -right-24 -z-10"></div>

      <div className="bg-main-red w-[400px] h-[450px] rounded-full rotate-45 blur-[200px] opacity-40 md:opacity-30 absolute -bottom-20 -left-24 -z-10"></div>

      <div className="md:w-1/3">
        <div>
          <div className="select-none relative w-fit">
            <h1 className="pathway font-black text-5xl text-main-red">
              FOOD TRUCK
            </h1>
            <div className="absolute -bottom-5 -right-6 text-white bg-main-red pathway font-black px-2 py-0.5 rounded-[4px] -rotate-12">
              NEW
            </div>
          </div>
          <p className="mt-10 max-w-lg">
            Quick service, great taste, and a menu that travels — experience our
            signature dishes wherever you are.
          </p>
        </div>

        <section className="mt-10 md:mt-20 space-y-5">
          <div className="flex flex-col items-center gap-8 border-2 rounded-xl border-main-red py-10 px-5 relative overflow-hidden">
            <Image
              src={"/dallas.webp"}
              fill
              quality={50}
              className="object-cover -z-10"
              alt="dallas"
              priority
            />

            <div className="bg-gradient-to-r from-black via-black/80 to-transparent absolute inset-0 -z-10"></div>

            <div className="text-center">
              <div className="pathway text-4xl font-black select-none">
                DALLAS
              </div>
              <p className="mt-2">2945 Frankford Rd Dallas, TX 75287</p>
            </div>
            <Link
              href={"https://maps.app.goo.gl/XtX4nSFxEzu39unx7"}
              target="_blank"
            >
              <Button>
                <BsGoogle />
                View on Maps
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-8 border-2 rounded-xl border-white/50 py-10 px-5 relative overflow-hidden">
            <Image
              src={"/new-york.webp"}
              fill
              quality={50}
              className="object-cover -z-10 grayscale"
              alt="dallas"
              priority
            />

            <div className="bg-gradient-to-r from-black via-black/80 to-transparent absolute inset-0 -z-10"></div>

            <div className="text-center">
              <div className="pathway text-4xl font-black select-none">
                NEW YORK
              </div>
              <p className="mt-8 text-white/50 select-none">Coming soon...</p>
            </div>
          </div>
        </section>
      </div>

      <div className="md:w-2/3">
        <Image
          src={"/food-truck.webp"}
          quality={100}
          priority
          width={1000}
          height={1000}
          alt="food truck"
          className="object-cover w-full max-h-[70vh] border-2 rounded-xl border-main-red overflow-hidden"
        />
      </div>

      <CTAButton />
    </section>
  );
}
