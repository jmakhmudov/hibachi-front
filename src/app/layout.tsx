import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Inter, Pathway_Extreme } from 'next/font/google';
import { LocationType } from "@/types";
import { locationsAPI } from "@/api/locations";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const pathway = Pathway_Extreme({ subsets: ["latin"], display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  const locations: LocationType[] = await locationsAPI.getAll();

  const locationKeywords = locations.flatMap((location) => [
    `Hibachi in ${location.name}`,
    `Best sushi in ${location.name}`,
    `Teppanyaki in ${location.name}`,
    `Japanese steakhouse in ${location.name}`,
    `Grilled cuisine in ${location.name}`,
    `Bamboo Hibachi in ${location.name}`,
    `Catering in ${location.name}`,
  ]);

  return {
    title: {
      default: "Bamboo Hibachi - Fire, Flavor & Authentic Hibachi Dining",
      template: "%s - Bamboo Hibachi"
    },
    description: "Experience the finest hibachi grilling at Bamboo Hibachi. Discover bold flavors, fresh ingredients, and unforgettable dining moments.",
    keywords: [
      "Bamboo Hibachi",
      "Hibachi By Bamboo",
      "Hibachi grill",
      "Japanese steakhouse",
      "Teppanyaki",
      "Grilled cuisine",
      "Sushi and hibachi",
      "Asian fusion",
      "Japanese food",
      "Hibachi restaurant",
      "Live cooking",
      "Flavorful dining",
      "Fresh ingredients",
      "Authentic hibachi",
      "Japanese grill",
      "Seafood hibachi",
      "Steak and shrimp hibachi",
      ...locationKeywords
    ],
    twitter: {
      card: "summary_large_image"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative w-screen ${pathway.className} ${inter.className}`}
      >
        <main className="px-5 md:px-12 min-h-screen ">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
