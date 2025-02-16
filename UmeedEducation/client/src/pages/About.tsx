import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  const teamMembers = [
    {
      name: "Abdul Rahim",
      role: "Founder",
      image: "/images/rahim.jpg",
      bio: "Founder of Umeed-e-Taleem, dedicated to empowering underprivileged students through education and skill development. Currently pursuing a BS in Economics at NUST, with a passion for creating opportunities and fostering a brighter future for the youth.",
    },
    {
      name: "Ammar Jaffar",
      role: "Co-Founder",
      image: "/images/ammar.jpg",
      bio: "An ambitious Economics student at NUST, Ammar Jaffar is passionate about community development and empowering underprivileged children through education. As a co-founder of Umeed-e-Taleem, he is dedicated to bridging educational gaps and inspiring positive change in society.",
    },
    {
      name: "Inayat Rahim",
      role: "Technical Lead",
      image: "/images/inayat.jpg",
      bio: "Inayat Rahim, a BS Artificial Intelligence student at SZABIST University and Technical Lead at Umeed-e-Taleem. Passionate about leveraging AI and technology to drive educational empowerment and create innovative solutions for social impact.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Us
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-center mb-8">Our Team</h2>

          <div className="grid gap-12 md:grid-cols-3 my-8">
            {teamMembers.map((member) => (
              <Dialog key={member.name}>
                <DialogTrigger asChild>
                  <div className="text-center cursor-pointer group">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="secondary">View Bio</Button>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{member.name}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
                    />
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <h2>Our Story</h2>
          <p>
            Umeed-e-Taleem was founded with a simple yet powerful vision: to make
            quality education accessible to every child in Pakistan, regardless of
            their economic background. Our journey began when we witnessed the
            stark educational disparities in remote areas of Pakistan.
          </p>

          <p>
            Today, we work tirelessly to bridge these gaps by providing financial
            support, resources, and opportunities to children who would otherwise
            be unable to attend school. Our team's dedication and the support of
            our community have helped numerous children pursue their dreams
            through education.
          </p>

          <h2>Our Impact</h2>
          <p>
            Through the generous support of our donors and the dedication of our
            volunteers, we have been able to make a significant impact in the
            lives of many children. We believe that education is not just about
            learning; it's about creating opportunities for a better future.
          </p>
        </div>
      </div>
    </div>
  );
}