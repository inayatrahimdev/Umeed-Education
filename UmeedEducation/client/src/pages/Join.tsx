import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Join() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfdAig3xr_e-4rod1v6bzjYwQsEULcF_Au6DCVb8TgX1UD8Sw/viewform";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Join Our Mission
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Be part of a movement that's making education accessible to
          underprivileged children in Pakistan.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
            alt="Volunteer teaching"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Ways to Help</h2>

          <div>
            <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
            <p className="text-gray-600 mb-4">
              Share your skills and time to make a difference. We need volunteers
              for teaching, administration, and community outreach.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Donate</h3>
            <p className="text-gray-600 mb-4">
              Your financial support helps us provide education to more children.
              Every contribution makes a difference.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Spread the Word</h3>
            <p className="text-gray-600 mb-4">
              Help us reach more people by sharing our mission with your network
              and on social media.
            </p>
          </div>

          <div className="flex gap-4">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Sign Up as Volunteer</Button>
            </a>
            <Link href="/donate">
              <Button variant="outline" size="lg">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Join us in our mission to provide education to underprivileged children.
          Your involvement can change lives.
        </p>
        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
          <Button size="lg">Get Started Today</Button>
        </a>
      </div>
    </div>
  );
}