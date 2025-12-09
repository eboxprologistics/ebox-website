import Logo from "@/components/Logo";

interface HeaderLogoProps {
  variant?: "light" | "dark";
  onClick?: () => void;
}

export default function HeaderLogo({ variant = "light", onClick }: HeaderLogoProps) {
  return <Logo variant={variant} size="lg" onClick={onClick} />;
}
