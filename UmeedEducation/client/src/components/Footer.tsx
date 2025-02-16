import { Link } from "wouter";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Umeed-e-Taleem</h3>
            <p className="text-gray-600">
              A community-driven initiative dedicated to funding education for
              underprivileged children in Pakistan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-gray-600 hover:text-primary">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/join">
                  <a className="text-gray-600 hover:text-primary">Join Us</a>
                </Link>
              </li>
              <li>
                <Link href="/donate">
                  <a className="text-gray-600 hover:text-primary">Donate</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-600 hover:text-primary">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <a
                href="tel:+923318955500"
                className="flex items-center text-gray-600 hover:text-primary"
              >
                <FaPhone className="mr-2" />
                <span>Abdul Rahim: 03318955500</span>
              </a>
              <a
                href="tel:+923049044268"
                className="flex items-center text-gray-600 hover:text-primary"
              >
                <FaPhone className="mr-2" />
                <span>Ammar Jaffar: 03049044268</span>
              </a>
              <a
                href="mailto:umeedetaleem.org@gmail.com"
                className="flex items-center text-gray-600 hover:text-primary"
              >
                <FaEnvelope className="mr-2" />
                <span>umeedetaleem.org@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Umeed-e-Taleem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
