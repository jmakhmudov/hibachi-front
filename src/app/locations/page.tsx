import { locationsAPI } from "@/api/locations"
import PageLayout from "@/components/layouts/PageLayout";
import { LocationType } from "@/types";
import Link from "next/link";

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
    <div className="select-none w-fit md:w-[550px] cursor-pointer ">
      <Link href={`/appointment/${location.id}`} className="text-5xl md:text-8xl text-main-red hover:text-primary transition-all duration-150 font-bold">{location.name}</Link>
      <div className="opacity-50">zip-code: {location.zip_code}</div>
    </div>
  )
}