import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Empowering Through Education
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is to provide educational opportunities to children in
              remote areas of Pakistan who cannot afford schooling, ensuring they
              have a brighter future.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/donate">
                <Button size="lg">Donate Now</Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" size="lg">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1602133187081-4874fdbd555c"
                alt="Students in classroom"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Making a Difference
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Umeed-e-Taleem is a community-driven initiative dedicated to
                funding the education of underprivileged children in Pakistan. We
                believe that education is the key to breaking the cycle of poverty
                and creating lasting change.
              </p>
              <Link href="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Help Us Make Education Accessible
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your support can help provide education to children who need it most.
            Join us in our mission to create positive change through education.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/donate">
              <Button size="lg">Make a Donation</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
