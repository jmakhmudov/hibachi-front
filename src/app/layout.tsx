import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bamboo Hibachi | Let’s grill it – where flavor meets fire",
  description: "Experience the finest hibachi grilling at Bamboo Hibachi. Discover bold flavors, fresh ingredients, and unforgettable dining moments.",
  keywords: ["Bamboo Hibachi", "Hibachi grill", "Japanese cuisine", "Grill restaurant", "Flavor meets fire"],
  openGraph: {
    title: "Bamboo Hibachi | Let’s grill it – where flavor meets fire",
    description: "Experience the finest hibachi grilling at Bamboo Hibachi. Discover bold flavors, fresh ingredients, and unforgettable dining moments.",
    url: "https://www.hibachibybamboo.com",
    siteName: "Bamboo Hibachi"
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative w-screen `}
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
