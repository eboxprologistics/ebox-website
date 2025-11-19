"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/public/Ebox - Final Logo/ebox - final logo -11.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navigationLinks = {
  home: { name: "Home", href: "/" },
  services: [
    { name: "Warehousing & Fulfillment", href: "#services" },
    { name: "Multi-Platform Integration", href: "#services" },
    { name: "UAE Market Entry Support", href: "#services" },
  ],
  about: { name: "About Us", href: "/about" },
  contact: { name: "Contact Us", href: "#contact" },
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
        <div className="bg-transparent flex justify-center items-center py-8">
          <div className="flex justify-between items-center w-full container-wide gap-8">
            {/* Logo Left */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Ebox Pro"
                width={120}
                height={40}
                className="h-16 w-auto"
              />
            </Link>

            {/* Navigation Center */}
            <div className="flex-1 flex justify-center items-center">
              <NavigationMenu className="hidden lg:block" viewport={false}>
                <NavigationMenuList>
                  {/* Home Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={navigationLinks.home.href}
                        className={cn(
                          "block select-none rounded-md px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors",
                          "flex items-center justify-center text-sm font-medium"
                        )}
                      >
                        {navigationLinks.home.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Services Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-full bg-transparent text-white px-4 py-3 text-sm leading-6 transition-colors duration-300 hover:bg-white/10 hover:backdrop-blur-sm data-[state=open]:bg-white/10 data-[state=open]:backdrop-blur-sm data-[state=open]:text-white">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white/95 backdrop-blur-xl border border-white/20">
                      <ul className="grid gap-1 w-max">
                        {navigationLinks.services.map((link) => (
                          <li key={link.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className={cn(
                                  "block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                )}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {link.name}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About Us Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={navigationLinks.about.href}
                        className={cn(
                          "block select-none rounded-md px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors",
                          "flex items-center justify-center text-sm font-medium"
                        )}
                      >
                        {navigationLinks.about.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Contact Us Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href={navigationLinks.contact.href}
                        className={cn(
                          "block select-none rounded-md px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors",
                          "flex items-center justify-center text-sm font-medium"
                        )}
                      >
                        {navigationLinks.contact.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA and Mobile Menu Right */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  href="#contact"
                  className="btn-primary rounded-full text-white text-center px-4 py-3 text-sm font-medium leading-6 no-underline transition-all duration-300 hover:bg-primary-hover"
                >
                  Get Free Assessment
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn-accent lg:hidden rounded-full bg-transparent transition-colors duration-300 hover:bg-white/8 hover:backdrop-blur-8 flex justify-center items-center p-3 relative z-50"
              >
                <div className="relative flex flex-col justify-center items-center w-6 h-6">
                  <div
                    className={cn(
                      "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-0"
                        : "-translate-y-1.5"
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    )}
                  ></div>
                  <div
                    className={cn(
                      "absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300",
                      isMobileMenuOpen
                        ? "-rotate-45 translate-y-0"
                        : "translate-y-1.5"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Fullscreen Slide-in */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Sliding Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                }}
                className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-40 lg:hidden flex flex-col"
              >
                {/* Menu Header with Logo and Close */}
                <div className="flex justify-between items-center p-6 border-b border-base-200">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src={Logo}
                      alt="Ebox Pro"
                      width={120}
                      height={40}
                      className="h-12 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full bg-base-100 transition-colors duration-300 hover:bg-base-200 flex justify-center items-center p-3"
                  >
                    <div className="relative flex flex-col justify-center items-center w-6 h-6">
                      <div className="absolute w-5 h-0.5 bg-base-900 rounded-full transform rotate-45"></div>
                      <div className="absolute w-5 h-0.5 bg-base-900 rounded-full transform -rotate-45"></div>
                    </div>
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col p-6">
                    {/* Home Link */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={navigationLinks.home.href}
                        className="flex items-center text-base-900 hover:text-primary-600 rounded-lg px-4 py-4 text-lg font-medium transition-colors border-b border-base-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {navigationLinks.home.name}
                      </Link>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                      className="border-b border-base-200"
                    >
                      <div className="text-base-500 px-4 pt-6 pb-2 text-xs font-semibold uppercase tracking-wider">
                        Services
                      </div>
                      {navigationLinks.services.map((link, index) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center text-base-700 hover:text-primary-600 hover:bg-base-50 rounded-lg px-4 py-3 text-base transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>

                    {/* About Us Link */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        href={navigationLinks.about.href}
                        className="flex items-center text-base-900 hover:text-primary-600 rounded-lg px-4 py-4 text-lg font-medium transition-colors border-b border-base-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {navigationLinks.about.name}
                      </Link>
                    </motion.div>

                    {/* Contact Us Link */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <Link
                        href={navigationLinks.contact.href}
                        className="flex items-center text-base-900 hover:text-primary-600 rounded-lg px-4 py-4 text-lg font-medium transition-colors border-b border-base-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {navigationLinks.contact.name}
                      </Link>
                    </motion.div>
                  </nav>
                </div>

                {/* CTA Button at Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-6 border-t border-base-200"
                >
                  <Link
                    href="#contact"
                    className="btn-primary rounded-full text-white text-center px-6 py-4 text-base font-medium leading-6 no-underline w-full block transition-all duration-300 hover:bg-primary-hover"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Assessment
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
