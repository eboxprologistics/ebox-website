"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import SectionBadge from "@/components/SectionBadge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+971 52 259 0553",
    description: "Mon-Sat, 9am-6pm GST",
    href: "tel:+971522590553",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hi@eboxprologistics.com",
    description: "We respond within 24 hours",
    href: "mailto:hi@eboxprologistics.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dubai, UAE",
    description: "Serving the entire GCC region",
    href: null,
  },
];

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-background">
      <Header variant="light" />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <SectionBadge>Contact Us</SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-display-md lg:text-display-lg font-bold text-foreground mt-4"
            >
              Get in Touch
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-body-lg text-muted-foreground mt-6"
            >
              Have questions about our fulfillment services? We&apos;d love to
              hear from you. Reach out and our team will get back to you
              promptly.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const CardContent = (
                <motion.div
                  variants={fadeInUp}
                  key={item.title}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground font-medium">{item.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </motion.div>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="block hover:no-underline"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={item.title}>{CardContent}</div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <ContactFormWrapper />
      <Footer />
    </div>
  );
}
