"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import Link from "next/link";
import {
  Thermometer,
  Shield,
  BarChart3,
  Users,
  MapPin,
  Boxes,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { WarehouseLottie } from "../WarehouseLottie";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center text-navy-600 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-base-900 mb-1">{title}</h4>
        <p className="text-sm text-base-600">{description}</p>
      </div>
    </div>
  );
}

interface LocationCardProps {
  city: string;
  country: string;
}

function LocationCard({ city, country }: LocationCardProps) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-base-200">
      <MapPin className="w-5 h-5 text-carrot-500" />
      <div>
        <p className="font-semibold text-base-900 text-sm">{city}</p>
        <p className="text-xs text-base-500">{country}</p>
      </div>
    </div>
  );
}

export default function WarehousingSection() {
  const features = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      title: "Climate-Controlled Storage",
      description: "Temperature and humidity controlled facilities for sensitive products.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock surveillance and access control systems.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Advanced WMS",
      description: "Real-time inventory visibility with batch and expiry tracking.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multi-Client Operations",
      description: "Dedicated and shared warehouse options to fit your needs.",
    },
  ];

  const locations = [
    { city: "Dubai", country: "UAE" },
    { city: "Abu Dhabi", country: "UAE" },
    { city: "Riyadh", country: "Saudi Arabia" },
    { city: "Jeddah", country: "Saudi Arabia" },
  ];

  return (
    <section id="warehousing" className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={slideInLeft}>
              <SectionBadge>Warehousing</SectionBadge>
            </motion.div>

            <motion.h2 variants={slideInLeft} className="text-display-md text-base-900 mt-4">
              Strategic Storage Solutions Across the GCC
            </motion.h2>

            <motion.p variants={slideInLeft} className="text-body-lg text-base-600 mt-4">
              Our modern fulfillment centers are strategically positioned to ensure
              optimal coverage and fast delivery times across the UAE and Saudi Arabia.
              From small startups to enterprise operations, we scale with your business.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
            >
              {features.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Link href="#contact" className="btn-primary">
                Get Free Assessment
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Capacity Stats */}
            <WarehouseLottie />

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-carrot-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
