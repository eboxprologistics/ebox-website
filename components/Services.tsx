"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardStack } from "@/components/CardStack";
import SectionBadge from "@/components/SectionBadge";
import ServiceStackCard from "@/components/ServiceStackCard";
import { allServices } from "@/lib/services-data";

interface ServicesProps {
  className?: string;
}

export default function Services({ className }: ServicesProps = {}) {
  const cards = allServices.map((service) => ({
    id: `service-${service.slug}`,
    content: <ServiceStackCard service={service} />,
  }));

  return (
    <section
      id="services"
      className={cn("relative bg-background md:section-padding pb-32", className)}
    >
      {/* Header */}
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionBadge>What We Do</SectionBadge>
          <h2 className="text-display-xl text-foreground mb-4">
            One Platform, Total <span className="whitespace-nowrap">E-commerce</span> Command
          </h2>
          <p className="text-body-xl text-muted-foreground mx-auto">
            Five core services to scale your <span className="whitespace-nowrap">e-commerce</span> business in UAE
          </p>
        </motion.div>
      </div>

      {/* Card Stack */}
      <div className="container-narrow mx-auto">
        <CardStack cards={cards} />
      </div>
    </section>
  );
}
