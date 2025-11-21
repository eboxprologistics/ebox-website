import { cn } from "@/lib/utils";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="btn-accent lg:hidden rounded-full bg-transparent transition-colors duration-300 hover:bg-white/8 hover:backdrop-blur-8 flex justify-center items-center p-3 relative z-50"
    >
      <div className="relative flex flex-col justify-center items-center w-6 h-6">
        <div
          className={cn(
            "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300",
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
          )}
        />
        <div
          className={cn(
            "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <div
          className={cn(
            "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300",
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
          )}
        />
      </div>
    </button>
  );
}
