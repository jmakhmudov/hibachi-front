import { locationsAPI } from "@/api/locations";
import { menuAPI } from "@/api/menu";
import PageLayout from "@/components/layouts/PageLayout";
import AppointmentForm from "@/components/views/AppointmentForm";
import { LocationType } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locations: LocationType[] = await locationsAPI.getAll();
  const { slug } = await params;

  const location = await Promise.all(
    locations.map(async (l) => {
      if (l.slug === slug) return l;
      return null;
    })
  ).then((results) => results.find((l) => l !== null));

  return {
    title: `Schedule Appointment in ${location?.name}`
  }
}

export default async function AppointmentPage({ params }: Params) {
  const locations: LocationType[] = await locationsAPI.getAll();
  const { slug } = await params;
  console.log(locations)

  const location = await Promise.all(
    locations.map(async (l) => {
      if (l.slug === slug) return l;
      return null;
    })
  ).then((results) => results.find((l) => l !== null));

  if (!location) {
    return notFound();
  }

  const meals = await menuAPI.getMeals();

  return (
    <div>
      <PageLayout title="Schedule Appointment" form>
        <div className="mb-5">
          <div className="font-bold text-xl">{location.name}</div>
          <div className="text-sm opacity-50">{location.zip_code}</div>
        </div>

        <AppointmentForm meals={meals} locationSlug={location.slug} />
      </PageLayout>
    </div>
  )
}