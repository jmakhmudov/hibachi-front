import PageLayout from "../layouts/PageLayout";
import Button from "../ui/button";
import Input from "../ui/input";
import TextArea from "../ui/textarea";

export default function ContactsSection() {
  return (
    <PageLayout title="Contact Us">
      <div>
        <p className="md:w-1/3">Have questions or need assistance? Reach out using the form below, and our team will get back to you promptly. We're here to help!</p>

        <form action="" className="mt-5 space-y-5">
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-5 w-full">
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

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Input
                  label="Subject"
                  name="subject"
                  type="text"
                  required
                />

                <Input
                  label="Phone number"
                  name="phone_number"
                  type="tel"
                  defaultValue="+1"
                  required
                />
              </div>
            </div>

            <TextArea
              label="Message"
              name="message"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
            <p className="text-xs">By submitting this form, you agree to our terms and conditions and privacy policy.</p>
            <Button>Send</Button>
          </div>
        </form>
      </div>
    </PageLayout>
  )
}