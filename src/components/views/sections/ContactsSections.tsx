"use client";

import PageLayout from "../../layouts/PageLayout";
import Button from "../../ui/button";
import Input from "../../ui/input";
import TextArea from "../../ui/textarea";
import { useActionState } from "react";
import { sendMessageAction } from "@/components/views/sections/actions";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactsSection() {
  const [state, contact, pending] = useActionState(sendMessageAction, {
    error: "",
    data: {},
  });

  return (
    <section
      id="contacts"
      className="flex flex-col md:flex-row items-center justify-between w-full"
    >
      <div className="space-y-5 w-full">
        <h2 className="text-3xl md:text-5xl text-main-red pathway font-black uppercase">
          Contact Us
        </h2>
        <p className="md:w-1/2">
          Have questions or need assistance? Reach out using the form below, and
          our team will get back to you promptly. We're here to help!
        </p>
      </div>

      <div className="w-full">
        <div className="grid place-items-center">
          <form action={contact} className="mt-5 space-y-5 w-full">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 md:gap-5 w-full">
                    <Input
                      label="First name"
                      name="first_name"
                      type="text"
                      required
                    />

                    <Input
                      label="Last name"
                      name="last_name"
                      type="text"
                      required
                    />
                  </div>

                  <Input label="Email" name="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Input label="Subject" name="subject" type="text" required />

                  <Input
                    label="Phone number"
                    name="phone_number"
                    type="tel"
                    defaultValue="+1"
                    required
                  />
                </div>
              </div>

              <TextArea label="Message" name="message" required />
            </div>

            <div className="grid place-items-center grid-cols-1 gap-2 items-center">
              <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY as string} />
              <p className="text-xs text-center mb-2">
                By submitting this form, you agree to our terms and conditions
                and privacy policy.
              </p>
              <Button type="submit" className="w-full">
                {pending ? "Sending..." : "Send Message"}
              </Button>
              {state.error && (
                <div className="font-medium text-red-400 text-sm">
                  {state.error}
                </div>
              )}
              {state.detail === "Message sent successfully" && (
                <div className="font-medium">Your message was sent!</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
