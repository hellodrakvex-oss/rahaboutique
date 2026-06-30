"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 md:py-36 bg-[#1C1C1C] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-gold/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-primary-gold" />
            <span className="text-primary-gold font-sans tracking-[0.35em] uppercase text-[10px]">Join The Society</span>
            <span className="w-8 h-[1px] bg-primary-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
            Be the First to <span className="italic text-primary-gold">Discover</span>
          </h2>

          <p className="font-sans text-white/50 max-w-lg mx-auto text-sm leading-relaxed mb-14 font-light">
            Subscribe for exclusive early access to new collections, private sale invitations, and editorial lookbooks curated for the discerning woman.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block border border-primary-gold/40 bg-primary-gold/10 px-10 py-5 font-sans text-sm text-primary-gold tracking-wider"
            >
              Welcome to the Society. You are now subscribed.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-0 shadow-[0_0_60px_rgba(200,163,77,0.05)]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-white/5 border border-white/15 border-r-0 px-6 py-4 outline-none font-sans text-sm placeholder:text-white/30 focus:border-primary-gold/50 transition-colors text-white"
              />
              <button
                type="submit"
                className="bg-primary-gold text-white px-8 py-4 font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-[#b8923e] transition-colors flex items-center gap-3 whitespace-nowrap"
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="mt-8 font-sans text-[10px] text-white/25 uppercase tracking-[0.2em]">
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
