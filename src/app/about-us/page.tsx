import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us"
};

const AboutUs = () => {
  return (
    <div className=" py-10 px-6 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          At <span className="font-semibold">Bamboo Hibachi Catering</span>, we bring the art of Japanese hibachi cooking and entertainment straight to your doorstep. Our mission is to deliver a unique and unforgettable dining experience that combines the freshest ingredients, skilled culinary craftsmanship, and captivating performances.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          We specialize in private hibachi-style dining for events of all kinds—birthdays, corporate gatherings, weddings, anniversaries, and more. Whether indoors or outdoors, our team transforms your space into a sizzling stage where our expert chefs prepare mouthwatering dishes right before your eyes. <span className="font-semibold">Kids under 3 eat for free.</span>
        </p>
        <p className="text-lg leading-relaxed mb-6">
          More than just a meal, our services are an immersive experience. Our chefs are not only masters of hibachi cooking but also skilled performers who dazzle guests with their knife skills, fiery presentations, and interactive entertainment. At Bamboo Hibachi Catering, we create moments filled with laughter, awe, and delicious flavors that your guests will remember for years to come.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Proudly serving Texas (<span className="font-semibold">Dallas, Austin, Houston, San Antonio</span>) and surrounding areas, we are dedicated to making every occasion special. Let us help you celebrate in style and elevate your event with the sizzling excitement of Bamboo Hibachi.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
