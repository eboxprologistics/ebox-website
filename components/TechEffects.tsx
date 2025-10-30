"use client";

import { motion } from "framer-motion";

export default function TechEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(234, 88, 12, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(234, 88, 12, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-[#ea580c] rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Glowing orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, transparent 70%)`,
          }}
          initial={{
            x: `${20 + i * 30}%`,
            y: `${20 + i * 20}%`,
          }}
          animate={{
            x: [`${20 + i * 30}%`, `${30 + i * 25}%`, `${20 + i * 30}%`],
            y: [`${20 + i * 20}%`, `${30 + i * 15}%`, `${20 + i * 20}%`],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 100 L 50 100 L 50 50 L 100 50"
              stroke="rgba(234, 88, 12, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M 100 50 L 150 50 L 150 100 L 200 100"
              stroke="rgba(234, 88, 12, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="50" cy="100" r="3" fill="rgba(234, 88, 12, 0.5)" />
            <circle cx="100" cy="50" r="3" fill="rgba(234, 88, 12, 0.5)" />
            <circle cx="150" cy="100" r="3" fill="rgba(234, 88, 12, 0.5)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          className="w-full h-full border-t-2 border-l-2 border-[#ea580c]/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <motion.div
          className="w-full h-full border-t-2 border-r-2 border-[#ea580c]/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32">
        <motion.div
          className="w-full h-full border-b-2 border-l-2 border-[#ea580c]/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          className="w-full h-full border-b-2 border-r-2 border-[#ea580c]/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5,
          }}
        />
      </div>

    </div>
  );
}
