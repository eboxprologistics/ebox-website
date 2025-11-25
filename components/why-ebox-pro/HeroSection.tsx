"use client";

import { motion } from "framer-motion";
import SectionBadge from "@/components/SectionBadge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-subtle pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-linear-to-br from-gold-primary/20 via-gold-rich/10 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <SectionBadge className="mx-auto bg-primary/10 text-primary border-primary/20">
            Why Ebox Pro
          </SectionBadge>
          <h1 className="text-display-lg text-foreground">
            WHY CHOOSE EBOX PRO LOGISTICS?
          </h1>
          <p className="text-body-lg text-muted-foreground">
            At Ebox Pro Logistics, we understand that reliable fulfillment is
            essential to your e-commerce success. Our services are designed to
            help you scale your business while maintaining the quality and
            consistency your customers expect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
