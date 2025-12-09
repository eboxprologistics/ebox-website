"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

const clientLogos = [
  { name: "Amazon", width: "120px" },
  { name: "Shopify", width: "140px" },
  { name: "Noon", width: "110px" },
  { name: "WooCommerce", width: "130px" },
  { name: "Magento", width: "125px" },
  { name: "BigCommerce", width: "115px" },
  { name: "eBay", width: "135px" },
  { name: "Etsy", width: "120px" },
];

// Duplicate the array for seamless scrolling
const allLogos = [...clientLogos, ...clientLogos];

export default function LogoMarquee() {
  return (
    <section className="section-padding bg-background border-t border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <Badge>
            Platform Integrations
          </Badge>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling Logo Strip */}
          <motion.div
            className="flex items-center gap-16"
            animate={{
              x: [0, -50 * clientLogos.length + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: `${200 * clientLogos.length}px` }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-8"
                style={{ minWidth: logo.width }}
              >
                {/* Placeholder logo - in real implementation, these would be actual logo images */}
                <div className="text-gold-dark font-bold text-lg border-2 border-gold-light px-4 py-2 rounded-lg bg-gold-light/30 hover:bg-gold-light hover:text-gold-rich transition-colors">
                  {logo.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gold-light"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-sm text-text-secondary whitespace-nowrap">E-commerce Sellers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">2M+</div>
            <div className="text-sm text-text-secondary">Orders Fulfilled</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">UAE & KSA</div>
            <div className="text-sm text-text-secondary">Regional Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-sm text-text-secondary">Order Accuracy</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}