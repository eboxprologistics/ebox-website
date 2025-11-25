"use client";

import type { ServiceCoverage } from "@/content/why-ebox-pro";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

type ServiceCoverageSectionProps = {
  services: ServiceCoverage[];
};

export default function ServiceCoverageSection({
  services,
}: ServiceCoverageSectionProps) {
  return (
    <section className="section-padding mx-auto  max-w-4xl bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-display-xl text-foreground mb-6">
            Full-Spectrum Supply Chain Coverage
          </h2>
          <p className="text-body-xl text-muted-foreground max-w-3xl mx-auto">
            We handle your entire GCC supply chain—from intake to delivery—for
            seamless, single-partner service.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-heading-2 text-foreground mb-6">
            What We Manage For You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                direction="up"
                delay={index * 0.1}
                threshold={0.1}
              >
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 w-6 h-6 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-heading-4 text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-body-base text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-linear-to-r from-gold-primary/20 to-gold-rich/20 border border-gold-primary/30 p-8">
          <p className="text-body-lg text-foreground text-center max-w-4xl mx-auto">
            With Ebox Pro Logistics managing your entire fulfillment journey,
            you gain the operational advantages of having local infrastructure
            in every GCC market without the capital investment and complexity of
            establishing it yourself.
          </p>
        </div>
      </div>
    </section>
  );
}
