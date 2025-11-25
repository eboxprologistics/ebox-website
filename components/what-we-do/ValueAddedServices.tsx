"use client";

import {
  Tag,
  Package,
  Gift,
  Camera,
  CheckCircle,
  Scissors,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionBadge from "@/components/SectionBadge";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: "left" | "right";
  cornerStyle?: string;
};

const leftFeatures: FeatureItem[] = [
  {
    icon: Tag,
    title: "Product Labeling",
    description:
      "Custom labeling and relabeling services for compliance and branding requirements.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Scissors,
    title: "Kitting & Assembly",
    description:
      "Bundle multiple products together or assemble components before shipping.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Gift,
    title: "Gift Wrapping",
    description:
      "Premium gift wrapping and personalized notes for special occasions.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: Package,
    title: "Custom Packaging",
    description:
      "Branded packaging solutions that enhance your customer experience.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Camera,
    title: "Product Photography",
    description:
      "Professional product photography services for your e-commerce listings.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description:
      "Thorough inspection and quality checks before products reach customers.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pt-4 pb-4 text-sm",
          "bg-base-50 ring-base-200 ring",
          feature.cornerStyle
        )}
      >
        <div className="text-carrot-500 mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-base-900 mb-2.5 text-2xl">{feature.title}</h2>
        <p className="text-base-600 text-base text-pretty">
          {feature.description}
        </p>
        <span className="from-carrot-500/0 via-carrot-500 to-carrot-500/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,oklch(0.75_0.18_45/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function ValueAddedServices() {
  return (
    <section className="section-padding" id="value-added">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="flex justify-center mb-4.5">
              <SectionBadge>Value-Added Services</SectionBadge>
            </div>
            <h2 className="text-base-900 mb-2 font-bold text-center sm:mb-2.5 text-4xl">
              Beyond Standard Fulfillment
            </h2>
            <p className="text-base-600 mx-auto max-w-[18rem] text-center text-pretty">
              Enhance your products and customer experience with our
              comprehensive range of value-added services.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
