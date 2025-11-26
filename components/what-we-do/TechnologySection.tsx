import { Noon, Shopify, WooCommerce, Amazon } from "@/components/logos";
import { cn } from "@/lib/utils";
import { Logo } from "../Header";
import { SiMagento } from "react-icons/si";

export default function IntegrationsSection() {
  return (
    <section>
      <div className="section-padding">
        <div className="mx-auto max-w-5xl px-6">
          <div className="aspect-16/10 group relative mx-auto flex container items-center justify-between sm:max-w-xl">
            <div
              role="presentation"
              className="bg-linear-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t from-navy-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
            ></div>
            <div
              role="presentation"
              className="bg-linear-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
            ></div>
            <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%">
              <IntegrationCard className="-translate-x-1/6 absolute left-0 top-1/4 -translate-y-1/4">
                <Noon />
              </IntegrationCard>
              <IntegrationCard className="absolute top-0 -translate-y-1/2">
                <Shopify />
              </IntegrationCard>
              <IntegrationCard className="translate-x-1/6 absolute right-0 top-1/4 -translate-y-1/4">
                <WooCommerce />
              </IntegrationCard>
            </div>
            <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t to-transparent to-25%">
              <IntegrationCard className="absolute top-0 -translate-y-1/2">
                <Amazon />
              </IntegrationCard>
              <IntegrationCard className="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4">
                <SiMagento />
              </IntegrationCard>
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-full border p-1">
                <IntegrationCard
                  className="shadow-black-950/10 dark:bg-background size-32 p-2 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
                  isCenter={true}
                >
                  <Logo variant="dark" />
                </IntegrationCard>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-t from-background relative z-20 mx-auto mt-12 max-w-5xl from-55%">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
              {/* Left Column */}
              <div className="relative pr-0 md:pr-6">
                <h2 className="text-primary text-3xl md:text-4xl font-bold leading-tight text-right">
                  All-In-One
                </h2>
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-0.5 bg-primary-400 rounded-full hidden md:block"
                  aria-hidden="true"
                />
              </div>

              {/* Right Column */}
              <div className="md:col-span-2 space-y-4">
                <h2 className="font-normal text-3xl md:text-4xl leading-tight text-foreground">
                  Seamless Integration & Multi-Channel Fulfillment
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Connect your store in minutes with integrations for Shopify,
                  WooCommerce, Amazon, Noon, and custom solutions. Our API
                  ensures automatic order synchronization, real-time inventory
                  updates, and complete visibility through your dashboard.
                  Whether you sell through your website, marketplaces, or B2B
                  channels, we centralize inventory and streamline fulfillment
                  across all channels. Intelligent stock allocation ensures
                  balanced levels and prevents overselling.
                </p>
              </div>
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
        "relative z-30 flex size-20 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
        className
      )}
    >
      <div className={cn("m-auto size-fit *:size-10", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  );
};
