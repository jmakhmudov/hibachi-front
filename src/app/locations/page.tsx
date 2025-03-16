import { locationsAPI } from "@/api/locations"
import PageLayout from "@/components/layouts/PageLayout";
import { LocationType } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations"
};

export default async function LocationsPage() {
  const locations: LocationType[] = await locationsAPI.getAll();

  return (
    <PageLayout title="Locations" >
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(550px,1fr))] gap-10 md:gap-y-20">
        {
          locations.map(location => (
            <LocationItem key={location.zip_code} location={location} />
          ))
        }
      </div>
    </PageLayout>
  )
}

function LocationItem({
  location
}: {
  location: LocationType
}) {

  return (
    <Link href={`/appointment/${location.id}`} className="select-none w-full md:w-[550px] cursor-pointer ">
      <Image
        alt={location.name}
        src={location.image}
        width={200}
        height={200}
        className="w-full rounded-lg "
      />
      <div className="text-5xl md:text-8xl mt-4  hover:text-main-red transition-all duration-150 font-bold">{location.name}</div>
      <div className="opacity-50">zip-code: {location.zip_code}</div>
    </Link>
  )
}