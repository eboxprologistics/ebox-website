"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const blogPosts = [
  {
    id: 1,
    title: "Top Strategies for Cutting Transportation Costs and Boosting Efficiency",
    excerpt: "Dive into the essential elements of a successful pitch. Learn how to weave a narrative that captivates investors, communicates your vision clearly, and leaves a lasting impression.",
    author: "Kevin Logan",
    date: "July 3, 2024",
    readTime: "6 min read",
    image: "https://cdn.prod.website-files.com/66599469017eeec213f9ef37/6659b5730f775f682acda78d_Blog%2001.webp"
  },
  {
    id: 2,
    title: "Harnessing AI to Transform Supply Chain Operations",
    excerpt: "Dive into the essential elements of a successful pitch. Learn how to weave a narrative that captivates investors, communicates your vision clearly, and leaves a lasting impression.",
    author: "Kevin Logan",
    date: "July 3, 2024",
    readTime: "8 min read",
    image: "https://cdn.prod.website-files.com/66599469017eeec213f9ef37/6659b526db5b16a69bf4cc84_Blog%2002.webp"
  },
  {
    id: 3,
    title: "Blockchain in Logistics: Enhancing Transparency and Security",
    excerpt: "Dive into the essential elements of a successful pitch. Learn how to weave a narrative that captivates investors, communicates your vision clearly, and leaves a lasting impression.",
    author: "Kevin Logan",
    date: "July 3, 2024",
    readTime: "2 min read",
    image: "https://cdn.prod.website-files.com/6684af61b1cc1eae182f04d5/6684af61b1cc1eae182f0597_Blog%2003.webp"
  }
];

const stats = [
  { number: "124", label: "Trucks" },
  { number: "76", label: "Ships" },
  { number: "22", label: "Aeroplanes" }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-background">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our latest expert articles and guides
            </h2>
            <h3 className="text-2xl text-blue-600 mb-6">
              Delivering Globally, On Time, Every Time
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our Blog
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in logistics and supply chain management.
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-background rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="bg-blue-600 rounded-2xl p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-6">Get Started With Ebox Pro</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Fleet Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-background text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold">
              Apply Now ~ Ebox Pro Logistics
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}