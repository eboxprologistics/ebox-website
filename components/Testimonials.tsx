"use client";

import Image from "next/image";

const testimonials = [
  {
    content: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia consequat duis enim mollit exercitation.",
    author: "Lee Morgan, Ecommerce Business",
    team: "New York, NY Team",
    company: "Invoice2go",
    image: "https://cdn.prod.website-files.com/6684af61b1cc1eae182f04b5/6684af61b1cc1eae182f04ce_Review%20Image.webp",
  },
  {
    content: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia consequat duis enim mollit exercitation.",
    author: "Lee Morgan, Ecommerce Business",
    team: "New York, NY Team",
    company: "RPUBLICA",
    image: "https://cdn.prod.website-files.com/6684af61b1cc1eae182f04b5/6684af61b1cc1eae182f04ce_Review%20Image.webp",
  },
  {
    content: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia consequat duis enim mollit exercitation.",
    author: "Lee Morgan, Ecommerce Business",
    team: "New York, NY Team",
    company: "XPENG",
    image: "https://cdn.prod.website-files.com/6684af61b1cc1eae182f04b5/6684af61b1cc1eae182f04ce_Review%20Image.webp",
  },
  {
    content: "Amet minim mollit non deserunt est sit aliqua dolor do amet sint officia consequat duis enim mollit exercitation.",
    author: "Lee Morgan, Ecommerce Business",
    team: "New York, NY Team",
    company: "Veroxfloor",
    image: "https://cdn.prod.website-files.com/6684af61b1cc1eae182f04b5/6684af61b1cc1eae182f04ce_Review%20Image.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {testimonial.content}
              </h3>

              <div className="mb-4">
                <p className="text-gray-700 font-medium">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonial.team}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt="Review Image"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-gray-900">
                  {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}