"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface WhyItem {
  number: string;
  title: string;
  description: string;
  lottieSrc: string;
}

const reasons: WhyItem[] = [
  {
    number: "01",
    title: "The Problem: Logistics Distracting from Growth",
    description:
      "E-commerce businesses were spending too much time managing warehousing, inventory, and delivery instead of scaling their brand. Ebox Pro was founded to eliminate this distraction—we're your strategic growth partner that handles the complexity so you can focus on innovation.",
    lottieSrc:
      "https://lottie.host/905eff22-2ae3-4011-9007-977ef42d8d29/0CdYNLz2rm.lottie",
  },
  {
    number: "02",
    title: "The Problem: Barriers to GCC Market Entry",
    description:
      "Entering the GCC market was traditionally complex and expensive, preventing e-commerce businesses from accessing world-class fulfillment infrastructure. Ebox Pro eliminates these barriers, providing instant access to turnkey solutions for both startups and established brands.",
    lottieSrc:
      "https://lottie.host/107a23b3-5ff2-48b9-b0a8-e07566531da7/QvEadXAp3g.lottie",
  },
  {
    number: "03",
    title: "The Problem: Fulfillment That Wasn't Seamless or Stress-Free",
    description:
      "E-commerce fulfillment was often complicated, unscalable, and stressful. Ebox Pro was founded to make fulfillment seamless, scalable, and stress-free. With cutting-edge technology and a customer-first approach, we ensure every order strengthens your brand reputation.",
    lottieSrc:
      "https://lottie.host/ff1c2492-42ab-4e30-bcb7-070fad7d0e72/1c4b9XpMhT.lottie",
  },
  {
    number: "04",
    title: "The Problem: Excessive Costs and Hidden Complexity",
    description:
      "Exceptional logistics shouldn't come with excessive costs, yet businesses faced long-term contracts, hidden fees, and complicated pricing. Ebox Pro changed this—we've eliminated hidden fees, offering transparent, month-to-month agreements that grow with your business.",
    lottieSrc:
      "https://lottie.host/4e0e6604-62f6-4719-88a2-e74c51a1b5af/xwQpDKNYcg.lottie",
  },
];

export default function StoryCards() {
  return (
    <section className="relative bg-background section-padding">
      {/* Header */}
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionBadge>About Ebox Pro</SectionBadge>
          <h2 className="text-display-xl text-foreground mb-4">
            The Reasons EboxPro Was Founded
          </h2>
          <p className="text-body-xl text-muted-foreground mx-auto">
            Four core advantages that set us apart in the GCC fulfillment
            landscape
          </p>
        </motion.div>
      </div>

      {/* Alternating cards */}
      <div className="container-wide mt-16 space-y-8">
        {reasons.map((reason, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-3xl px-6 sm:px-10 lg:px-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
                <div
                  className={`flex justify-center h-full w-full ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex flex-col items-center text-primary">
                    <DotLottieReact
                      src={reason.lottieSrc}
                      loop
                      autoplay
                      className="w-48 h-48 lg:h-full lg:w-full"
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col gap-4 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {reason.number}
                  </p>
                  <h3 className="text-heading-2 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-body-lg text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
