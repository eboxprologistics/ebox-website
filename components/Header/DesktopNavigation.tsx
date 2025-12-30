"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationLinks } from "./constants";

interface NavLinkItemProps {
  href: string;
  children: React.ReactNode;
  pathname: string;
  variant?: "default" | "light";
}

function NavLinkItem({ href, children, pathname, variant = "default" }: NavLinkItemProps) {
  const isActive = href === pathname;
  const isLight = variant === "light";

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "relative block select-none rounded-sm px-4 py-2",
            "flex items-center justify-center text-base font-medium",
            "transition-all duration-300",
            isLight ? "text-foreground hover:text-primary" : "text-white hover:bg-primary-400",
            isActive && (isLight ? "text-primary" : "text-white")
          )}
        >
          {children}
          {isActive && (
            <span
              className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full",
                isLight ? "bg-primary" : "bg-white"
              )}
              aria-hidden="true"
            />
          )}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

interface ServicesDropdownProps {
  pathname: string;
  variant?: "default" | "light";
}

function ServicesDropdown({ pathname, variant = "default" }: ServicesDropdownProps) {
  const isServiceActive = navigationLinks.services.some(
    (service) => service.href === pathname
  );
  const isLight = variant === "light";

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "relative rounded-sm bg-transparent px-4 py-5 text-base",
          "transition-all duration-300",
          isLight
            ? "text-foreground hover:text-primary data-[state=open]:text-primary"
            : "text-white hover:bg-primary-400 data-[state=open]:bg-primary-400",
          isServiceActive && (isLight ? "text-primary" : "text-white")
        )}
      >
        Services
        {isServiceActive && (
          <span
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full",
              isLight ? "bg-primary" : "bg-white"
            )}
            aria-hidden="true"
          />
        )}
      </NavigationMenuTrigger>
      <NavigationMenuContent className={cn(
        "backdrop-blur-xl border z-50",
        isLight ? "bg-white border-neutral-200 shadow-lg" : "border-white/20"
      )}>
        <ul className="grid gap-1 w-max">
          {navigationLinks.services.map((link) => {
            const isActive = link.href === pathname;
            return (
              <li key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block select-none rounded-sm px-4 py-2 no-underline outline-none",
                      "transition-all duration-300",
                      isLight
                        ? "text-foreground hover:text-primary hover:bg-primary/5"
                        : "hover:text-primary-400 hover:bg-white/5",
                      "focus:text-primary",
                      isActive && (isLight
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-primary-400 font-semibold bg-white/10"
                      )
                    )}
                  >
                    <span className="text-base font-medium">{link.name}</span>
                    {isActive && (
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-primary rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}


interface DesktopNavigationProps {
  pathname: string;
  variant?: "default" | "light";
}

export default function DesktopNavigation({
  pathname,
  variant = "default",
}: DesktopNavigationProps) {
  return (
    <div className="flex-1 flex justify-center items-center">
      <NavigationMenu className="hidden lg:block" viewport={false}>
        <NavigationMenuList>
          <NavLinkItem href={navigationLinks.home.href} pathname={pathname} variant={variant}>
            {navigationLinks.home.name}
          </NavLinkItem>
          <NavLinkItem href={navigationLinks.whatWeDo.href} pathname={pathname} variant={variant}>
            {navigationLinks.whatWeDo.name}
          </NavLinkItem>
          <ServicesDropdown pathname={pathname} variant={variant} />
          <NavLinkItem href={navigationLinks.why.href} pathname={pathname} variant={variant}>
            {navigationLinks.why.name}
          </NavLinkItem>
          <NavLinkItem href={navigationLinks.about.href} pathname={pathname} variant={variant}>
            {navigationLinks.about.name}
          </NavLinkItem>
          <NavLinkItem href={navigationLinks.contact.href} pathname={pathname} variant={variant}>
            {navigationLinks.contact.name}
          </NavLinkItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
