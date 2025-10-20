"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, ReactNode } from "react";

interface CardItem {
  id: string;
  content: ReactNode;
}

interface StickyCardProps {
  i: number;
  content: ReactNode;
  progress: any;
  range: [number, number];
  targetScale: number;
}

const StickyCard = ({
  i,
  content,
  progress,
  range,
  targetScale,
}: StickyCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 60 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex origin-top flex-col"
      >
        {content}
      </motion.div>
    </div>
  );
};

interface CardStackProps {
  cards: CardItem[];
  headerText?: string;
  className?: string;
}

const CardStack = ({ cards, headerText, className = "" }: CardStackProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      ref={container}
      className={`relative flex w-full flex-col items-center justify-center pb-[50vh]  ${className}`}
    >
      {cards.map((card, i) => {
        const targetScale = Math.max(0.5, 1 - (cards.length - i - 1) * 0.1);
        return (
          <StickyCard
            key={card.id}
            i={i}
            content={card.content}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export { CardStack, StickyCard };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
