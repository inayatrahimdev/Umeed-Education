import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to us through any of the
          channels below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FaPhone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-1">
                  Abdul Rahim: <a href="tel:+923318955500">03318955500</a>
                </p>
                <p className="text-gray-600">
                  Ammar Jaffar: <a href="tel:+923049044268">03049044268</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FaEnvelope className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:umeedetaleem.org@gmail.com">
                    umeedetaleem.org@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Pakistan</p>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
                alt="Students studying"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
