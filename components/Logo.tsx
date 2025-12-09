import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoWhite from "@/public/Ebox - Final Logo/ebox pro logistics white.png";
import LogoBlue from "@/public/Ebox - Final Logo/ebox pro logistics blue.png";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
  xl: "h-20",
};

export default function Logo({
  variant = "dark",
  size = "lg",
  asLink = true,
  onClick,
  className,
}: LogoProps) {
  const logoSrc = variant === "light" ? LogoWhite : LogoBlue;

  const imageElement = (
    <Image
      src={logoSrc}
      alt="Ebox Pro"
      width={size === "sm" ? 200 : size === "md" ? 240 : 280}
      height={size === "sm" ? 67 : size === "md" ? 80 : 100}
      className={cn("w-auto object-contain", sizeClasses[size], className)}
    />
  );

  if (!asLink) {
    return imageElement;
  }

  return (
    <Link href="/" className="shrink-0" onClick={onClick}>
      {imageElement}
    </Link>
  );
}
