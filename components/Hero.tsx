"use client";

import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "Warehousing",
    "Fulfillment",
    "Integration",
    "Delivery",
    "Logistics",
  ];
  const [isRowLayout, setIsRowLayout] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsRowLayout(window.innerWidth >= 1275);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-secondary flex items-center pt-40 md:pt-32">
        <div className="container-wide relative z-20 w-full pb-12">
          <div className="w-fit mx-auto lg:mx-0">
            {/* Left Column - Copy */}
            <div className="flex flex-col gap-8 justify-center backdrop-blur-md bg-accent-950/50 rounded-xl p-6 md:p-10 lg:p-16">
              <div className="flex flex-col gap-6">
                <div className="text-center lg:text-left">
                  <h1 className="text-white text-display-xl">
                    Scale Your E-Commerce <br className="hidden md:block" />{" "}
                    with Smart
                    <FlipWords words={words} className="text-carrot-400" />
                  </h1>
                  <p className="text-white/80 text-body-xl mt-6 max-w-2xl mx-auto lg:mx-0">
                    Strategic Dubai warehouse location with real-time inventory
                    management. Seamless multi-channel integration for Amazon,
                    Noon, and your store.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex gap-4 text-white w-full ${
                  isRowLayout
                    ? "flex-row items-start justify-start max-w-none"
                    : "flex-col items-center justify-center max-w-lg mx-auto lg:mx-0 lg:items-start lg:justify-start"
                }`}
              >
                <Link
                  href="#contact"
                  className="btn-primary text-center leading-6 no-underline flex items-center justify-center w-full whitespace-nowrap"
                  style={{
                    minWidth: "fit-content",
                    width: isRowLayout ? "auto" : "100%",
                  }}
                >
                  Get Free UAE Fulfillment Assessment
                </Link>
                <Link
                  href="#calculator"
                  className="btn-white text-center leading-6 no-underline flex items-center justify-center w-full whitespace-nowrap"
                  style={{
                    minWidth: "fit-content",
                    width: isRowLayout ? "auto" : "100%",
                  }}
                >
                  Calculate Your Savings
                </Link>
              </div>
            </div>
            {/* Right Column - Hero Video */}
          </div>
        </div>
        <div className="w-screen top-0 h-screen object-cover -scale-x-100 absolute left-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src="https://res.cloudinary.com/dw1j7izud/video/upload/v1762959035/n0ic7gcjgvtbqxydmztc.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
