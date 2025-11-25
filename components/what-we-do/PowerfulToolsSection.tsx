"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionBadge from "@/components/SectionBadge";
import { FeatureCard } from "@/components/feature-card";
import Link from "next/link";
import { BarChart3, FileText, Bell, LineChart, Database, Cloud } from "lucide-react";

export default function PowerfulToolsSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description:
        "Monitor inventory levels, order status, and performance metrics in real-time with intuitive visualizations.",
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description:
        "Scheduled reports delivered to your inbox with key business insights and actionable recommendations.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description:
        "Instant notifications for low stock, order issues, delivery exceptions, and important events.",
    },
    {
      icon: LineChart,
      title: "Analytics & Insights",
      description:
        "Data-driven insights to optimize your supply chain, reduce costs, and improve efficiency.",
    },
    {
      icon: Database,
      title: "Inventory Management",
      description:
        "Complete visibility into stock levels across all warehouses with automatic reorder point alerts.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Access",
      description:
        "Access your logistics data from anywhere, anytime with our secure cloud platform.",
    },
  ];

  return (
    <section id="tools" className="section-padding">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <SectionBadge>Platform</SectionBadge>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-display-md text-base-900 mt-4 max-w-3xl"
          >
            Powerful Tools for Your Business
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-base-600 mt-4 max-w-2xl"
          >
            Our comprehensive platform gives you complete control and visibility
            over your entire logistics operation.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={fadeInUp} custom={index}>
              <FeatureCard
                feature={feature}
                className="h-full rounded-xl border border-base-200"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="#contact" className="btn-primary">
            Explore Our Platform
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
