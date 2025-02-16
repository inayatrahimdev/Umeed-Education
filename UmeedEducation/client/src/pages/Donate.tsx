import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaHeart } from "react-icons/fa";

export default function Donate() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Support Our Cause
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your donation helps provide education to children who need it most.
          Every contribution makes a difference in a child's future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1560785496-3c9d27877182"
            alt="Children studying"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Donation Details</CardTitle>
              <CardDescription>
                Send your contributions through NayaPay
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">Account Name</p>
                <p className="text-gray-600">Abdul Rahim</p>
              </div>
              <div>
                <p className="font-medium">NayaPay Number</p>
                <p className="text-gray-600">03318955500</p>
              </div>
              <Button className="w-full mt-4" onClick={() => {
                navigator.clipboard.writeText("03318955500");
              }}>
                Copy Number
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaHeart className="text-primary" />
              Education Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Your donation helps cover school fees, books, and educational
              materials for children in need.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaHeart className="text-primary" />
              Monthly Giving
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Consider setting up a monthly donation to provide sustained support
              for our educational programs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaHeart className="text-primary" />
              Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Every donation, no matter the size, contributes to creating better
              educational opportunities.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Make a Difference Today
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Your support can help change lives through education. Every contribution
          brings us closer to our goal of making education accessible to all.
        </p>
      </div>
    </div>
  );
}
