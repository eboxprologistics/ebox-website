import { Noon, Shopify, WooCommerce, Amazon } from "@/components/logos";
import { cn } from "@/lib/utils";
import { SiMagento } from "react-icons/si";
import Logo from "../Logo";
import IntegrationIllustrationV2 from "../IntegrationIllustrationV2";

export default function IntegrationsSection() {
  return (
    <section className="overflow-hidden">
      <div className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Integration Illustration */}
            <IntegrationIllustrationV2 />

            {/* Right Column - Text Content */}
            <div className="space-y-4">
              <h2 className="text-primary mb-0 text-3xl md:text-4xl font-bold leading-tight">
                All-In-One:
              </h2>
              <h2 className="font-bold text-3xl md:text-4xl leading-tight text-foreground">
                Seamless Integration & Multi-Channel Fulfillment
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Connect your store in minutes with integrations for Shopify,
                WooCommerce, Amazon, Noon, and custom solutions. Our API ensures
                automatic order synchronization, real-time inventory updates,
                and complete visibility through your dashboard. Whether you sell
                through your website, marketplaces, or B2B channels, we
                centralize inventory and streamline fulfillment across all
                channels. Intelligent stock allocation ensures balanced levels
                and prevents overselling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative z-30 flex size-16 sm:size-[72px] md:size-20 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
        className
      )}
    >
      <div
        className={cn(
          "m-auto size-fit *:size-7 sm:*:size-9 md:*:size-10",
          isCenter && "*:size-7 sm:*:size-8 md:*:size-8"
        )}
      >
        {children}
      </div>
    </div>
  );
};
