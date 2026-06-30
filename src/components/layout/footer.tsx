"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight, Heart } from "lucide-react";
import { collections } from "@/lib/data";

const instagramImages = [
  "/images/bg1.png",
  "/images/bg2.png",
  "/images/bg3.png",
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-24 overflow-hidden border-t border-primary-gold/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Section - Newsletter & Instagram Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Newsletter */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Join The <span className="italic text-primary-gold">Society</span>
            </h3>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-md mb-10">
              Subscribe to receive exclusive access to new collections, private sales, and editorial lookbooks directly in your inbox.
            </p>
            
            {subscribed ? (
              <p className="font-sans text-sm text-primary-gold p-4 border border-primary-gold/30 bg-primary-gold/10 inline-block">
                Welcome to the Society. You are now subscribed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full bg-transparent border-b border-white/20 pb-4 outline-none font-sans text-sm placeholder:text-white/40 focus:border-primary-gold transition-colors pr-12"
                  required
                />
                <button type="submit" className="absolute right-0 bottom-4 text-white hover:text-primary-gold transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Instagram Grid */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-primary-gold mb-2">Follow Us</h4>
                <p className="font-serif text-2xl">@rahaboutique</p>
              </div>
              <a href="#" className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1">
                View Gallery
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((img, i) => (
                <a key={i} href="#" className="relative aspect-square overflow-hidden group">
                  <Image src={img} alt="Instagram" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="150px" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-20"></div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="space-y-8 lg:col-span-1 pr-8">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-3xl md:text-4xl tracking-widest uppercase">
                Raha<span className="text-primary-gold">.</span>
              </h2>
            </Link>
            <p className="font-sans text-white/50 text-sm leading-relaxed max-w-xs">
              Curating the finest ethnic wear for the modern woman. Timeless elegance, crafted with passion and artisan heritage.
            </p>
          </div>

          {/* Collections */}
          <div className="space-y-8">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white">Collections</h4>
            <ul className="space-y-4 font-sans text-sm text-white/50">
              {collections.map(c => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`} className="hover:text-primary-gold transition-colors">{c.name}</Link>
                </li>
              ))}
              <li><Link href="/new-arrivals" className="text-primary-gold hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-8">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white">Boutique</h4>
            <ul className="space-y-4 font-sans text-sm text-white/50">
              <li><Link href="/about" className="hover:text-primary-gold transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-primary-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary-gold transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white">Contact</h4>
            <ul className="space-y-6 font-sans text-sm text-white/50">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-gold shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">123 Luxury Avenue,<br />Banjara Hills, Hyderabad<br />India 500034</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary-gold shrink-0" strokeWidth={1.5} />
                <a href="tel:+919943467778" className="hover:text-primary-gold transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary-gold shrink-0" strokeWidth={1.5} />
                <a href="mailto:concierge@rahaboutique.com" className="hover:text-primary-gold transition-colors">concierge@rahaboutique.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30">
            &copy; {new Date().getFullYear()} Raha Boutique. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-primary-gold transition-colors font-sans text-[10px] uppercase tracking-[0.2em]">Instagram</a>
            <a href="#" className="text-white/30 hover:text-primary-gold transition-colors font-sans text-[10px] uppercase tracking-[0.2em]">Facebook</a>
            <a href="#" className="text-white/30 hover:text-primary-gold transition-colors font-sans text-[10px] uppercase tracking-[0.2em]">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
