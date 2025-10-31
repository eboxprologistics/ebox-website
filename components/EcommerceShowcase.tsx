"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Dumbbell, 
  Heart, 
  Gift, 
  Laptop, 
  Car,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";

const productCategories = [
  {
    icon: Laptop,
    name: "Electronics & Tech",
    description: "Smartphones, laptops, gaming gear, smart devices",
    color: "from-gold-rich to-gold-primary",
  },
  {
    icon: Shirt,
    name: "Fashion & Apparel",
    description: "Clothing, shoes, accessories, luxury items",
    color: "from-gold-primary to-gold-accent",
  },
  {
    icon: Heart,
    name: "Health & Beauty",
    description: "Cosmetics, supplements, wellness products",
    color: "from-gold-accent to-gold-light",
  },
  {
    icon: Home,
    name: "Home & Garden",
    description: "Furniture, décor, appliances, outdoor gear",
    color: "from-gold-light to-gold-primary",
  },
  {
    icon: Dumbbell,
    name: "Sports & Fitness",
    description: "Equipment, apparel, nutrition, accessories",
    color: "from-gold-primary to-gold-rich",
  },
  {
    icon: Gift,
    name: "Specialty Products",
    description: "Handmade, custom, seasonal, niche items",
    color: "from-gold-rich to-gold-accent",
  },
];

const capabilities = [
  "FBA-compliant prep and labeling services",
  "Branded packaging for Shopify orders",
  "Arabic labeling for Noon marketplace",
  "Custom kitting and bundling services",
  "Multi-channel inventory synchronization",
  "Same-day processing for urgent orders",
];

export default function EcommerceShowcase() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge>
              Product Categories
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
                Every Product,
              </span>{" "}
              <span className="bg-gradient-to-r from-gold-rich to-gold-accent bg-clip-text text-transparent">
                Perfect Care
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From electronics to fashion, health to home goods - our e-commerce fulfillment
              adapts to any product category with specialized handling and storage.
            </p>
          </motion.div>

          {/* Product Categories Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-background rounded-2xl p-6 border border-gold-light/50 hover:border-gold-light hover:shadow-gold-sm hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-text-primary mb-2">
                      {category.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-light/5 to-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Capabilities Section */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Capabilities List */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                E-commerce Capabilities
              </h3>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-gold-rich flex-shrink-0" />
                    <span className="text-text-secondary">{capability}</span>
                  </motion.div>
                ))}
              </div>
              
              <button className="flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-gold-rich to-gold-primary text-white font-semibold rounded-full hover:from-gold-dark hover:to-gold-rich hover:shadow-gold-md hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                View All Capabilities <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Right: Visual Element */}
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className="aspect-square bg-gradient-to-br from-gold-light/30 to-gold-light/50 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gold-primary/20 rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating stat */}
              <motion.div
                className="absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-gold-sm border border-gold-light"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent">100+</div>
                <div className="text-xs text-text-muted">Product Types</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-16 border-t border-gold-light"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">
                  500K+
                </div>
                <div className="text-text-secondary text-sm">SKUs Managed</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-text-secondary text-sm">Product Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-text-secondary text-sm">Order Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-gold-rich to-gold-primary bg-clip-text text-transparent mb-2">
                  2hr
                </div>
                <div className="text-text-secondary text-sm">Processing Time</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}