"use client";

import { motion } from "framer-motion";
import { getRelatedServices } from "@/lib/services-data";
import SectionBadge from "@/components/SectionBadge";
import { CardStack } from "@/components/CardStack";
import ServiceStackCard from "@/components/ServiceStackCard";

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const relatedServices = getRelatedServices(currentSlug);

  const cards = relatedServices.map((service) => ({
    id: `related-${service.slug}`,
    content: <ServiceStackCard service={service} />,
  }));

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
          <SectionBadge>Explore More</SectionBadge>
          <h2 className="text-display-xl text-foreground mb-4">
            Other Services You Might Need
          </h2>
          <p className="text-body-xl text-muted-foreground mx-auto">
            Discover our full range of logistics solutions
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
