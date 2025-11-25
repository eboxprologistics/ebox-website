"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import {
  Warehouse,
  Package,
  Truck,
  Settings,
  Plug,
} from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  index: number;
}

function ServiceCard({ icon, title, description, features, href, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-base-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_-18px_rgba(0,0,0,0.15)]"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-carrot-50 flex items-center justify-center text-carrot-500 mb-5 transition-colors duration-300 group-hover:bg-carrot-500 group-hover:text-white">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-heading-3 text-base-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-body-md text-base-600 mb-5">{description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-base-700">
            <span className="w-1.5 h-1.5 rounded-full bg-carrot-400" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-carrot-500 transition-colors hover:text-carrot-600"
      >
        Learn more
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}

export default function ServicesOverview() {
  const services = [
    {
      icon: <Warehouse className="w-7 h-7" />,
      title: "Warehousing & Storage",
      description: "Strategic multi-location fulfillment centers across UAE & Saudi Arabia with advanced inventory management.",
      features: [
        "Climate-controlled facilities",
        "24/7 security monitoring",
        "Real-time WMS integration",
        "10K - 100K+ sq ft capacity",
      ],
      href: "#warehousing",
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: "Order Fulfillment",
      description: "Same-day processing with 99%+ accuracy for B2C and B2B orders across multiple sales channels.",
      features: [
        "Same-day pick & pack",
        "Multi-channel management",
        "Kitting & bundling",
        "Returns processing",
      ],
      href: "#fulfillment",
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Transportation & Delivery",
      description: "Comprehensive last-mile delivery network covering UAE and Saudi Arabia with multiple shipping options.",
      features: [
        "Same-day & next-day delivery",
        "Real-time tracking",
        "Multiple carrier integration",
        "White-glove service",
      ],
      href: "#transportation",
    },
    {
      icon: <Plug className="w-7 h-7" />,
      title: "Technology & Integration",
      description: "Seamless platform integrations with real-time dashboards and automated reporting for complete visibility.",
      features: [
        "Shopify, WooCommerce, Magento",
        "Amazon & Noon marketplace",
        "Custom API integration",
        "Analytics & insights",
      ],
      href: "#technology",
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Value-Added Services",
      description: "Custom solutions beyond standard fulfillment to enhance your products and customer experience.",
      features: [
        "Product labeling & relabeling",
        "Gift wrapping & custom packaging",
        "Product photography",
        "Quality control inspections",
      ],
      href: "#value-added",
    },
  ];

  return (
    <section id="services-overview" className="section-padding bg-base-50">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12 lg:mb-16"
        >
          <motion.div variants={fadeInUp}>
            <SectionBadge>What We Do</SectionBadge>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-display-lg text-base-900 mt-4">
            Comprehensive Logistics Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body-xl text-base-600 mt-4 max-w-2xl">
            Everything you need to scale your e-commerce operations in the GCC region,
            from storage to doorstep delivery.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              href={service.href}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
