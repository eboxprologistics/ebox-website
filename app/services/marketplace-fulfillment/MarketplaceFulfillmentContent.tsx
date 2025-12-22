"use client";

import {
  ServiceHero,
  ServiceFeaturesBento,
  RelatedServices,
} from "@/components/services";
import { servicesData } from "@/lib/services-data";
import SectionBadge from "@/components/SectionBadge";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/ScrollVelocity";
import { Amazon, Noon, Shopify, WooCommerce } from "@/components/logos";
import { SiMagento } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const service = servicesData["marketplace-fulfillment"];

const integrations = [
  { name: "Amazon", icon: Amazon },
  { name: "Noon", icon: Noon },
  { name: "Shopify", icon: Shopify },
  { name: "WooCommerce", icon: WooCommerce },
  { name: "Magento", icon: SiMagento },
  { name: "Google", icon: FcGoogle },
];

function IntegrationCard({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center gap-3 mx-4 px-8 py-6 rounded-xl bg-surface border border-border hover:border-primary-300 transition-colors">
      <Icon className="w-10 h-10" />
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function MarketplaceFulfillmentContent() {
  return (
    <>
      <ServiceHero
        icon={service.heroIcon}
        title={service.title}
        tagline={service.tagline}
        description={service.description}
        stats={service.stats}
        accentColor={service.accentColor as "primary" | "navy"}
        heroImage={service.heroImage}
      />

      <ServiceFeaturesBento
        features={service.features}
        title="Amazon & Noon Fulfillment"
        badge="Marketplace Services"
      />

      <section className="section-padding bg-surface-subtle">
        <div className="container-wide">
          <div className="text-center mb-8">
            <SectionBadge>Integrations</SectionBadge>
            <h2 className="text-display-md text-foreground">
              Supported Platforms
            </h2>
          </div>
        </div>
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={3} direction={1}>
            {integrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                icon={integration.icon}
              />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>

      <RelatedServices currentSlug={service.slug} />
    </>
  );
}
