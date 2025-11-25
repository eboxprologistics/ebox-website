"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function WhatWeDoCTA() {
  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.7 0.1 250) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-carrot-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-400/20 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-display-lg lg:text-display-xl text-white max-w-3xl"
          >
            Ready to Scale Your{" "}
            <span className="text-carrot-400">Logistics Operations?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-body-xl text-white/80 mt-6 max-w-2xl"
          >
            Let&apos;s discuss how our comprehensive 3PL solutions can help streamline
            your supply chain and accelerate your growth in the GCC market.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-2 h-2 rounded-full bg-carrot-500" />
              <span>99%+ Accuracy</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-2 h-2 rounded-full bg-carrot-500" />
              <span>Same-Day Processing</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-2 h-2 rounded-full bg-carrot-500" />
              <span>No Minimum Order Quantity</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              href="#contact"
              className="btn-primary text-center px-8 py-4 flex items-center justify-center gap-2"
            >
              Get a Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="tel:+97142345678"
              className="btn-white text-center px-8 py-4 flex items-center justify-center gap-2 border-white/20 text-white bg-white/10 hover:bg-white/20"
            >
              <Phone className="w-4 h-4" />
              Schedule a Call
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-6 mt-10 pt-10 border-t border-white/10"
          >
            <a
              href="mailto:hello@eboxpro.com"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@eboxpro.com
            </a>
            <a
              href="tel:+97142345678"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +971 4 234 5678
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
