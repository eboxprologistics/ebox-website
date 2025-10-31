"use client";

import Image from "next/image";

export default function CapabilitiesCarousel() {
  const capabilities = [
    {
      title: "Freight Shipping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stats: [
        { value: "50M+", label: "shipping destinations", description: "Lorem ipsum dolor sit amet, consectet." },
        { value: "1.2K+", label: "carrier routes", description: "Lorem ipsum dolor sit amet, consectet." },
        { value: "10K+", label: "professional drivers", description: "Lorem ipsum dolor sit amet, consectet." },
      ],
    },
    {
      title: "Road to Customer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stats: [
        { value: "50M+", label: "shipping destinations", description: "Lorem ipsum dolor sit amet, consectet." },
        { value: "1.2K+", label: "carrier routes", description: "Lorem ipsum dolor sit amet, consectet." },
        { value: "10K+", label: "professional drivers", description: "Lorem ipsum dolor sit amet, consectet." },
      ],
    },
    {
      title: "Storage Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stats: [
        { value: "50M+", label: "shipping destinations", description: "Lorem ipsum dolor sit amet, consectet." },
        { value: "1.2K+", label: "carrier routes", description: "Lorem ipsum dolor sit amet, consectet." },
        { value: "10K+", label: "professional drivers", description: "Lorem ipsum dolor sit amet, consectet." },
      ],
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ebox Pro Logistics Capabilities
          </h2>
          <p className="text-xl text-gray-600 mb-2">Delivering Possibilities, Globally</p>
          <p className="text-sm text-gray-500">Client Reviews</p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor sapien vel facilisis lobortis.
          </p>
        </div>

        {/* Capabilities Cards */}
        <div className="space-y-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-8">
                  {capability.description}
                </p>

                <div className="space-y-6">
                  {capability.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {stat.label}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <Image
                  src="https://cdn.prod.website-files.com/6684af61b1cc1eae182f04b5/6684af61b1cc1eae182f0528_Solution%20Image.webp"
                  alt="Ebox Pro Solution Image"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}