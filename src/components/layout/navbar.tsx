"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { collections } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const { cart, wishlist, setCartOpen } = useAppStore();

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Logic for navbar text color
  // If on home page and not scrolled and mega menu is closed, text is white (over dark hero)
  // Otherwise, text is dark (foreground)
  const isLightText = isHome && !isScrolled && !isMegaMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          isScrolled || isMegaMenuOpen
            ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-foreground/5 py-4"
            : "bg-transparent py-8",
          isLightText ? "text-white" : "text-foreground"
        )}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative group" onClick={() => setIsMegaMenuOpen(false)}>
            <h1 className="font-serif text-4xl md:text-5xl tracking-widest uppercase">
              Raha<span className="text-primary-gold">.</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link
              href="/"
              className={cn(
                "relative text-xs uppercase tracking-[0.2em] font-sans transition-colors duration-300 group py-2",
                pathname === "/" ? "text-primary-gold" : "hover:text-primary-gold"
              )}
            >
              Home
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-[1px] bg-primary-gold origin-left transition-transform duration-300",
                pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              )} />
            </Link>

            {/* Mega Menu Trigger */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <button 
                className={cn(
                  "flex items-center gap-1.5 relative text-xs uppercase tracking-[0.2em] font-sans transition-colors duration-300 group",
                  pathname.startsWith("/collections") ? "text-primary-gold" : "hover:text-primary-gold"
                )}
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              >
                Collections <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isMegaMenuOpen ? 'rotate-180 text-primary-gold' : ''}`} />
                <span className={cn(
                  "absolute -bottom-2 left-0 w-full h-[1px] bg-primary-gold origin-left transition-transform duration-300",
                  pathname.startsWith("/collections") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </button>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-xs uppercase tracking-[0.2em] font-sans transition-colors duration-300 group py-2",
                  pathname === link.href ? "text-primary-gold" : "hover:text-primary-gold"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] bg-primary-gold origin-left transition-transform duration-300",
                  pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* Right Icons & CTA */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <Link href="/search" className="hidden md:block hover:text-primary-gold transition-transform hover:scale-110 duration-300">
              <Search className="w-5 h-5" strokeWidth={1.2} />
            </Link>
            <Link href="/wishlist" className="hidden md:block hover:text-primary-gold transition-transform hover:scale-110 duration-300 relative">
              <Heart className="w-5 h-5" strokeWidth={1.2} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-primary-gold text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button 
              className="hover:text-primary-gold transition-transform hover:scale-110 duration-300 relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.2} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-primary-gold text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border border-white">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            {/* WhatsApp CTA - Glassmorphism style on dark, solid on light */}
            <a
              href="https://wa.me/9943467778"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden lg:flex items-center space-x-2 px-7 py-3 rounded-full transition-all duration-500 text-[10px] tracking-[0.2em] uppercase group border",
                isLightText 
                  ? "bg-white/10 border-white/30 backdrop-blur-md hover:bg-white hover:text-foreground" 
                  : "bg-foreground text-white border-foreground hover:bg-primary-gold hover:border-primary-gold hover:shadow-lg hover:shadow-primary-gold/20"
              )}
            >
              <span> Order</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden hover:text-primary-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.2} />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-foreground/5 shadow-2xl overflow-hidden hidden lg:block text-foreground"
            >
              <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 grid grid-cols-4 gap-12">
                <div className="col-span-1">
                  <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-primary-gold inline-block"></span>
                    Categories
                  </h3>
                  <ul className="space-y-4 font-sans text-sm">
                    {collections.slice(0, 4).map((c) => (
                      <li key={c.id}>
                        <Link href={`/collections/${c.id}`} className="text-foreground/70 hover:text-primary-gold transition-colors inline-block w-full py-1 group" onClick={() => setIsMegaMenuOpen(false)}>
                          <span className="relative">
                            {c.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-gold transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-1">
                  <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-primary-gold inline-block"></span>
                    Curated
                  </h3>
                  <ul className="space-y-4 font-sans text-sm">
                    {collections.slice(4).map((c) => (
                      <li key={c.id}>
                        <Link href={`/collections/${c.id}`} className="text-foreground/70 hover:text-primary-gold transition-colors inline-block w-full py-1 group" onClick={() => setIsMegaMenuOpen(false)}>
                          <span className="relative">
                            {c.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-gold transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2 relative group overflow-hidden rounded-sm cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/20" />
                  <Image 
                    src="/images/salwar.png" 
                    alt="Bridal Collection"
                    fill 
                    className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="relative z-20 p-8 h-full flex flex-col justify-end text-white">
                    <h3 className="font-serif text-3xl mb-2">The Bridal Edit</h3>
                    <p className="font-sans text-sm text-white/80 mb-6 max-w-sm">Discover our masterfully crafted bridal collection, designed for your most precious moments.</p>
                    <Link href="/collections/wedding" onClick={() => setIsMegaMenuOpen(false)} className="inline-block">
                      <button className="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-foreground transition-all duration-300">
                        Explore Collection
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 pt-28 px-8 flex flex-col overflow-y-auto pb-24 text-foreground"
          >
            <button 
              className="absolute top-8 right-6 text-foreground hover:text-primary-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>
            <nav className="flex flex-col space-y-8 mt-4">
              <Link
                href="/"
                className="font-serif text-4xl text-foreground hover:text-primary-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-6">
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-primary-gold">Shop Collections</h3>
                <ul className="pl-4 space-y-4 font-serif text-2xl border-l border-foreground/10 ml-2">
                  {collections.map((c) => (
                    <li key={c.id}>
                      <Link href={`/collections/${c.id}`} className="text-foreground hover:text-primary-gold transition-colors block py-1" onClick={() => setIsMobileMenuOpen(false)}>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/new-arrivals"
                className="font-serif text-4xl text-foreground hover:text-primary-gold transition-colors pt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link
                href="/about"
                className="font-serif text-4xl text-foreground hover:text-primary-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="/contact"
                className="font-serif text-4xl text-foreground hover:text-primary-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-auto pt-12 flex justify-center w-full">
               <a
                href="https://wa.me/1234567890"
                className="bg-primary-gold text-white px-8 py-4 w-full text-center tracking-[0.2em] uppercase text-xs hover:bg-primary-dark transition-colors"
              >
                Bespoke Orders (WhatsApp)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
