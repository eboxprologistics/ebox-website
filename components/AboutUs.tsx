"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Target,
  Package,
  ShoppingCart,
  Truck,
  BarChart3
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

const whoWeAre = {
  title: "Who We Are",
  content: "Ebox Pro Logistics is the Middle East's premier e-commerce fulfillment partner. Founded by e-commerce sellers who understood the challenges of scaling operations, we've built the infrastructure and technology that modern online businesses need to thrive.",
  stats: [
    { icon: Users, metric: "500+", label: "E-commerce Sellers" },
    { icon: Package, metric: "2M+", label: "Orders Fulfilled" },
    { icon: Globe, metric: "UAE & KSA", label: "Regional Coverage" },
    { icon: Award, metric: "99.9%", label: "Order Accuracy" },
  ]
};

const whatWeDo = {
  title: "What We Do",
  content: "We take the complexity out of e-commerce fulfillment. When an order comes in from any of your sales channels - Amazon, Shopify, Noon, or others - our system automatically processes it, picks the items from our warehouse, packs them according to your specifications, and ships them using the fastest, most cost-effective method.",
  services: [
    { icon: Package, title: "Amazon FBA Prep", description: "FBA-compliant preparation and forwarding" },
    { icon: ShoppingCart, title: "Shopify Integration", description: "Seamless store connection and fulfillment" },
    { icon: Truck, title: "Noon Marketplace", description: "Regional expertise for Middle East sales" },
    { icon: BarChart3, title: "Multi-Channel Hub", description: "Unified inventory across all platforms" },
  ]
};

const whyUs = {
  title: "Why Choose Ebox Pro",
  reasons: [
    {
      icon: Zap,
      title: "Platform Expertise",
      description: "Certified partners with major e-commerce platforms"
    },
    {
      icon: Globe,
      title: "Regional Knowledge",
      description: "Local infrastructure and market understanding"
    },
    {
      icon: Shield,
      title: "Technology First",
      description: "Real-time integration and visibility"
    },
    {
      icon: TrendingUp,
      title: "Flexible Scaling",
      description: "From 1 to 10,000 orders without missing a beat"
    },
    {
      icon: Target,
      title: "Transparent Pricing",
      description: "No hidden fees, no minimum commitments"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Real people who understand your business"
    },
  ]
};

const ourVision = {
  title: "Our Vision",
  content: "We envision a future where every e-commerce entrepreneur, regardless of size, has access to world-class fulfillment infrastructure. By democratizing logistics and making enterprise-level capabilities accessible to all, we're empowering the next generation of online sellers to compete and win in the global marketplace.",
  mission: "Our mission is simple: to be the fulfillment partner that grows with you, providing the technology, infrastructure, and expertise you need at every stage of your e-commerce journey."
};

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <Badge>
              About Ebox Pro
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                Built by Sellers,
              </span>{" "}
              <span className="bg-gradient-to-r from-gold-rich to-gold-accent bg-clip-text text-transparent">
                For Sellers
              </span>
            </h2>
          </motion.div>

          {/* 1. Who We Are */}
          <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                The E-commerce Fulfillment Experts
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {whoWeAre.content}
              </p>
              <div className="flex justify-center mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light rounded-full">
                  <CheckCircle className="w-5 h-5 text-gold-rich" />
                  <span className="text-gold-dark font-semibold">Founded by E-commerce Sellers</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {whoWeAre.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-background rounded-2xl border border-gold-light/50 hover:border-gold-light hover:shadow-gold-sm transition-all group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-light rounded-full mb-4 group-hover:bg-gold-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-gold-rich" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-1">
                      {stat.metric}
                    </div>
                    <div className="text-text-muted text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 2. What We Do */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-gold-light/30 to-cream/50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                Seamless Order Fulfillment
              </h3>
              <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
                {whatWeDo.content}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDo.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-background rounded-2xl hover:shadow-gold-sm hover:-translate-y-1 transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-light rounded-full mb-4">
                      <Icon className="w-7 h-7 text-gold-rich" />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      {service.title}
                    </h4>
                    <p className="text-text-muted text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 3. Why Us */}
          <motion.div variants={fadeInUp}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-text-primary mb-6">
                Why Sellers Choose Us
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUs.reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl hover:bg-gold-light/20 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-light rounded-xl flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-gold-rich" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 4. Our Vision */}
          <motion.div variants={fadeInUp} className="text-center bg-gradient-to-r from-gold-primary/5 via-gold-light/10 to-gold-primary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-text-primary mb-6">
              Democratizing E-commerce Success
            </h3>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
              {ourVision.content}
            </p>
            <div className="max-w-3xl mx-auto p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-gold-light/50">
              <p className="text-gold-dark font-medium italic">
                {ourVision.mission}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}