"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { navigationItems, NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <ul className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b border-t-2 border-primary py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top group-hover:translate-y-0 translate-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block px-5 py-2.5 text-[13px] text-dark-text hover:text-primary hover:bg-gray-50 hover:pl-7 transition-all duration-200 font-rubik"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-all duration-300",
        scrolled ? "shadow-header" : "shadow-sm"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-white font-marcellus text-lg leading-none font-bold">
                  DW
                </div>
                <div className="text-yellow text-[8px] font-rubik font-medium leading-none">
                  PS
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-marcellus text-primary text-lg leading-tight">
                Delhi World Public School
              </div>
              <div className="font-rubik text-orange text-xs font-medium tracking-wide">
                Greater Noida
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 font-rubik text-[13px] font-medium text-dark-text uppercase tracking-wide hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                  {item.children && (
                    <HiChevronDown className="text-sm text-gray-400 group-hover:text-primary transition-colors" />
                  )}
                </Link>
                {item.children && <DropdownMenu items={item.children} />}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/admissions/apply"
              className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-2.5 rounded transition-all duration-300 font-rubik"
            >
              Enroll Now
            </Link>
            <button
              className="lg:hidden p-2 text-dark-text hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100",
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <nav className="max-w-[1200px] mx-auto px-5 py-4">
          {navigationItems.map((item) => (
            <div key={item.href} className="border-b border-gray-100 last:border-0">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="block py-3 font-rubik text-sm font-medium text-dark-text uppercase tracking-wide hover:text-primary transition-colors"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="p-2 text-gray-400 hover:text-primary"
                  >
                    <HiChevronDown
                      className={cn(
                        "transition-transform duration-200",
                        openMobileDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                )}
              </div>
              {item.children && openMobileDropdown === item.label && (
                <div className="pb-2 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      → {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/admissions/apply"
              className="block text-center bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-3 rounded transition-all duration-300 font-rubik"
              onClick={() => setMobileOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
