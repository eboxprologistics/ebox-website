"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { enablementPillars } from "@/content/why-ebox-pro";

const testimonialImages = [
  "/illustrations/quick.png",
  "/illustrations/transparency.png",
  "/illustrations/scalable.png",
  "/illustrations/accuracy.png",
  "/illustrations/management.png",
  "/illustrations/visibility.png",
  "/illustrations/coverage.png",
  "/illustrations/agreement.png",
];

const enablementTestimonials = enablementPillars.map((pillar, index) => ({
  quote: pillar.description,
  name: pillar.title,
  designation: "Ebox Pro Advantage",
  src:
    testimonialImages[index] ??
    `${testimonialImages[index % testimonialImages.length]}&sig=${index}`,
}));

export default function WhyEboxPro() {
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
          <h2 className="text-display-xl text-foreground mb-4">
            What Sets Us Apart
          </h2>
        </motion.div>
      </div>

      {/* Animated Testimonials Reuse */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <AnimatedTestimonials testimonials={enablementTestimonials} autoplay />
      </motion.div>
    </section>
  );
}
