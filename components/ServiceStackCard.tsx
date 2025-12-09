"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";
import { IllustrationType, ServiceData } from "@/lib/services-data";
import { WarehouseLottie } from "@/components/WarehouseLottie";
import { ComplianceLottie } from "@/components/ComplianceLottie";
import { OrderFulfillmentLottie } from "@/components/OrderFulfillmentLottie";
import { BrandLottie } from "@/components/BrandLottie";
import IntegrationIllustrationV2 from "@/components/IntegrationIllustrationV2";

export function getServiceIllustration(type: IllustrationType) {
  switch (type) {
    case "warehouse":
      return <WarehouseLottie />;
    case "integration":
      return <IntegrationIllustrationV2 />;
    case "compliance":
      return <ComplianceLottie />;
    case "fulfillment":
      return <OrderFulfillmentLottie />;
    case "customization":
      return <BrandLottie />;
    default:
      return <WarehouseLottie />;
  }
}

export default function ServiceStackCard({ service }: { service: ServiceData }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="block w-full h-[600px] sm:h-[550px] lg:h-[450px] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border bg-surface shadow-lg shadow-black/10 hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center h-full">
        <div className="h-[280px] sm:h-[300px] md:h-[320px] lg:h-full rounded-2xl flex items-center justify-center overflow-hidden">
          <div className="h-full w-full max-h-full">
            {getServiceIllustration(service.illustration)}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div>
            <h3 className="text-heading-2 text-foreground mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            <p className="text-body-lg text-primary font-medium mb-3">
              {service.tagline}
            </p>

            <p className="text-body-md text-muted-foreground">
              {service.description}
            </p>
          </div>

          <div className="flex items-center text-primary text-base font-medium mt-2">
            <span>Learn more about this service</span>
            <TbArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
