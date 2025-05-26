import Image from "next/image"

const partners = [
  {
    name: "Google Cloud",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png",
    description: "Cloud Infrastructure & AI Services",
  },
  {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Cloud Computing & Machine Learning",
  },
  {
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    description: "Enterprise Cloud Solutions",
  },
  {
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    description: "GPU Computing & AI Hardware",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    description: "Advanced AI Models & APIs",
  },
  {
    name: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    description: "AI Safety & Research",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
    description: "Web Development & Deployment",
  },
  {
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    description: "Database Solutions",
  },
]

export default function TechPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Technology Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry-leading technology partners to deliver cutting-edge solutions and ensure the
            highest standards of performance and reliability.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-32 h-16 relative mb-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300 hover:scale-110"
                  unoptimized={true}
                />
              </div>
              <h3 className="font-semibold text-blue-600 text-center mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-500 text-center">{partner.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Partnership Opportunities</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in partnering with iOrbit Labs? We're always looking for strategic partnerships that can help
              us deliver better solutions to our clients.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
