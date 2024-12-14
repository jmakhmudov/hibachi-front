
import FAQItem from "@/components/ui/faq-item";
import React from "react";

const faqs = [
  {
    question: "What is Bamboo Hibachi Catering?",
    answer:
      "Bamboo Hibachi Catering brings an authentic, on-site Japanese hibachi dining experience directly to your event. Our talented chefs entertain and prepare fresh, mouth-watering dishes right before your eyes, ensuring an epic and unforgettable celebration.",
  },
  {
    question: "What type of events do you cater to?",
    answer:
      "We cater any events such as:\n\n- Birthdays\n- Weddings\n- Corporate events\n- Anniversaries\n- Private parties\n- Family gatherings\n- Graduations\n\nNo matter the occasion, we make it special!",
  },
  {
    question: "How does the catering process work?",
    answer:
      "Booking: Contact us to reserve your date. We’ll confirm details like menu preferences, guest count, and any special requests.\nSetup: Our chef arrives 15–30 minutes before the event starts to set up and prepare.\nExperience: Guests enjoy an entertaining hibachi show featuring incredible fire displays and chef artistry while dining on fresh, flavorful dishes.",
  },
  {
    question: "Do you cook indoors?",
    answer:
      "Yes, we do! Bamboo Hibachi Catering is equipped to cook both indoors and outdoors. We can cook on terraces, balconies, and under awnings.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our service has a base price of $50 per person with a $500 minimum. Gratuity for the chef is not included; the suggested gratuity is 20% of the total bill. A $150 deposit is required at booking, with the balance due on the day of the event.",
  },
  {
    question: "What’s included in the hibachi experience?",
    answer:
      "Your Bamboo Hibachi experience includes:\n\n- A professional hibachi chef\n- On-site cooking and a fabulous fire show\n- Fresh, high-quality ingredients",
  },
  {
    question: "What menu options do you offer?",
    answer:
      "Our menu features:\n\n- Appetizers: Gyoza dumplings, edamame, and noodles\n- Mains: Fried rice, grilled vegetables, and salad\n- Proteins: Steak, chicken, shrimp, salmon, tofu, and scallops",
  },
  {
    question: "What premium proteins do you offer?",
    answer: "We offer premium proteins for an elevated dining experience:\n\n- Filet Mignon\n- Lobster",
  },
  {
    question: "What dietary restrictions can you accommodate?",
    answer:
      "We can accommodate most dietary restrictions upon request, including but not limited to:\n\n- Vegan\n- Vegetarian\n- Keto\n- Gluten-free\n- Dairy-free\n- Halal\n- Kosher\n\nPlease let us know in advance so we can tailor the menu to meet your needs.",
  },
  {
    question: "Is there a minimum or maximum guest count?",
    answer: "Yes, we require a minimum of 10 guests or a $500 minimum. We charge $50 per person.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes, a $150 deposit is required to secure your booking.\n\nCancellations: If you cancel more than 24 hours before the event, your deposit will be refunded. For cancellations made within 24 hours of the event, the deposit is non-refundable.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 48 hours before your desired event date to ensure availability.",
  },
  {
    question: "Do you provide tables and seating?",
    answer:
      "Yes, we can provide tables and chairs for an additional $20 per person. However, most hosts prefer to provide their own.",
  },
  {
    question: "How can I book Bamboo Hibachi Catering?",
    answer:
      "Booking is simple:\n\n- Call us at 817-600-4955.\n- Visit our website at [your website link].\n- Email us at [your email address].\n\nWe’ll guide you every step of the way to make your event a success!",
  },
];

const BambooHibachiFAQ = () => {

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Bamboo Hibachi Catering FAQs</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default BambooHibachiFAQ;
