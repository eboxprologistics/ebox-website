"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UAENetworkMap } from "@/components/UAENetworkMap";
import {
  Clock,
  Zap,
  Calendar,
  Crown,
  Truck,
  MapPin,
  Radio,
  Package,
} from "lucide-react";
import { BorderBeam } from "../ui/border-beam";

type DeliveryOptionKey = "same-day" | "next-day" | "scheduled" | "white-glove";

export default function TransportationSection() {
  const [activeItem, setActiveItem] = useState<DeliveryOptionKey>("same-day");

  const deliveryOptions = {
    "same-day": {
      icon: Zap,
      title: "Same-Day Delivery",
      description:
        "Orders placed before our cutoff time are picked, packed, and delivered to customers within the same day. Perfect for urgent orders and time-sensitive products across major UAE cities.",
      features: ["Dubai, Abu Dhabi, Sharjah coverage", "Before 2PM cutoff", "Real-time tracking"],
    },
    "next-day": {
      icon: Clock,
      title: "Next-Day Delivery",
      description:
        "Reliable overnight delivery service across the UAE and Saudi Arabia. Orders are processed same-day and delivered the following business day with full tracking visibility.",
      features: ["UAE & KSA wide coverage", "Guaranteed delivery window", "SMS notifications"],
    },
    "scheduled": {
      icon: Calendar,
      title: "Scheduled Delivery",
      description:
        "Let your customers choose their preferred delivery date and time slot. Flexible scheduling options improve customer satisfaction and reduce failed delivery attempts.",
      features: ["Customer-selected time slots", "Flexible rescheduling", "Reduced failed deliveries"],
    },
    "white-glove": {
      icon: Crown,
      title: "White-Glove Service",
      description:
        "Premium handling for high-value, fragile, or oversized items. Includes special packaging, careful handling, and signature confirmation upon delivery.",
      features: ["Special handling protocols", "Insurance included", "Signature confirmation"],
    },
  };

  return (
    <section id="transportation" className="section-padding bg-base-50">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <SectionBadge>Transportation</SectionBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-display-md text-base-900 mt-4 max-w-3xl"
          >
            Reliable Last-Mile Delivery Network
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-base-600 mt-4 max-w-2xl"
          >
            Our extensive delivery network ensures your products reach customers
            quickly and reliably across the UAE and Saudi Arabia.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center"
        >
          {/* Accordion */}
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as DeliveryOptionKey)}
            className="w-full"
          >
            {(Object.keys(deliveryOptions) as DeliveryOptionKey[]).map((key) => {
              const option = deliveryOptions[key];
              const Icon = option.icon;
              return (
                <AccordionItem key={key} value={key} className="border-base-200">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-base font-semibold">
                      <div className="w-8 h-8 rounded-lg bg-carrot-50 flex items-center justify-center text-carrot-500">
                        <Icon className="w-4 h-4" />
                      </div>
                      {option.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base-600">
                    <p className="mb-4">{option.description}</p>
                    <ul className="space-y-2">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-carrot-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Map Visual */}
          <div className="relative flex overflow-hidden rounded-3xl border border-base-200 bg-white p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l border-base-200 bg-[repeating-linear-gradient(-45deg,var(--color-base-100),var(--color-base-100)_1px,transparent_1px,transparent_8px)]" />
            <div className="relative w-full aspect-[4/3] bg-navy-950 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-map`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full"
                >
                  <UAENetworkMap />
                </motion.div>
              </AnimatePresence>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-base-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-navy-900">UAE-Wide</p>
                    <p className="text-xs text-base-500">Coverage</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy-900">KSA</p>
                    <p className="text-xs text-base-500">Major Cities</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-navy-900">50+</p>
                    <p className="text-xs text-base-500">Carriers</p>
                  </div>
                </div>
              </div>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-carrot-500 to-transparent"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="#contact" className="btn-primary">
            Explore Shipping Options
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
