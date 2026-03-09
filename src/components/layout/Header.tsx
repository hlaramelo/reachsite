"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome
          ? "bg-navy-700/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between h-20">
        <Link href="/" className="flex items-center">
          <svg className="w-8 h-8 text-lime mr-3" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 4L2 28h28L16 4zm0 6l8.5 16h-17L16 10z" />
          </svg>
          <span className="text-white font-semibold text-lg tracking-[0.15em]">
            REACH
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wider uppercase transition-colors duration-200 font-medium",
                pathname === link.href
                  ? "text-lime"
                  : "text-white/80 hover:text-lime"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 bg-white transition-all duration-300 origin-center",
                isMobileMenuOpen && "rotate-45 translate-y-[8px]"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-white transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-white transition-all duration-300 origin-center",
                isMobileMenuOpen && "-rotate-45 -translate-y-[8px]"
              )}
            />
          </div>
        </button>
      </nav>

      <div
        className={cn(
          "lg:hidden absolute top-20 left-0 right-0 bg-navy-700/98 backdrop-blur-md transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        )}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wider uppercase py-2 transition-colors duration-200 font-medium",
                pathname === link.href
                  ? "text-lime"
                  : "text-white/80 hover:text-lime"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
