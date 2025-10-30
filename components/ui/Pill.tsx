import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  color?: "blue" | "orange" | "green" | "purple";
  className?: string;
}

const colorVariants = {
  blue: {
    border: "border-[#2563eb]/10",
    bg: "bg-[#2563eb]/5",
    text: "text-[#2563eb]",
    dot: "bg-[#2563eb]",
  },
  orange: {
    border: "border-[#ff5722]/10",
    bg: "bg-[#ff5722]/5",
    text: "text-[#ff5722]",
    dot: "bg-[#ff5722]",
  },
  green: {
    border: "border-green-500/10",
    bg: "bg-green-500/5",
    text: "text-green-600",
    dot: "bg-green-500",
  },
  purple: {
    border: "border-purple-500/10",
    bg: "bg-purple-500/5",
    text: "text-purple-600",
    dot: "bg-purple-500",
  },
};

export default function Pill({
  children,
  color = "blue",
  className,
}: PillProps) {
  const colors = colorVariants[color];

  return (
    <div
      className={cn(
        "mx-auto w-fit px-6 py-2.5 rounded-full border flex items-center gap-3 text-base font-semibold shadow-none",
        colors.border,
        colors.bg,
        colors.text,
        className
      )}
    >
      <span className={cn("w-3 h-3 rounded-full", colors.dot)}></span>
      {children}
    </div>
  );
}
