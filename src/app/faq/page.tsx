"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Standard delivery within India takes 5–7 business days. Express delivery (2–3 days) is available for an additional fee. All orders are dispatched with a tracking number.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship worldwide. International deliveries typically take 10–15 business days. Customs duties and taxes are the responsibility of the recipient.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 14 days of delivery for unused, unwashed items in their original packaging with tags intact. Custom or bespoke orders are non-returnable.",
  },
  {
    q: "How do I care for my garments?",
    a: "Most of our premium silks and fabrics require dry cleaning. Detailed care instructions are included on every garment tag. Always store your pieces in a cool, dry place away from direct sunlight.",
  },
  {
    q: "Can I place a custom or bespoke order?",
    a: "Absolutely. We offer bespoke tailoring services for all our collections. Please WhatsApp us or fill the contact form with your requirements, and our design team will be in touch within 24 hours.",
  },
  {
    q: "Are the colors accurate in photographs?",
    a: "We strive to represent all colors as accurately as possible. However, slight variations can occur due to screen calibration differences. For the most accurate representation, visit our boutique.",
  },
  {
    q: "How do I find my size?",
    a: "Each product page includes a detailed size guide. We recommend using our size guide as ethnic wear sizing can differ from standard Western sizing. When in doubt, go a size up or contact us.",
  },
  {
    q: "Is my payment information secure?",
    a: "Yes, all transactions are processed through secure, industry-standard encrypted payment gateways. We never store your card details on our servers.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground/10 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left group"
      >
        <h3 className="font-serif text-xl text-foreground group-hover:text-primary-gold transition-colors pr-8">{q}</h3>
        <ChevronDown className={`w-5 h-5 text-primary-gold flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="font-sans text-sm text-foreground/70 leading-relaxed mt-4 max-w-3xl">{a}</p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
            Frequently Asked <span className="italic text-primary-gold">Questions</span>
          </h1>
          <p className="font-sans text-foreground/60 max-w-lg mx-auto text-sm">
            Everything you need to know about shopping with Raha Boutique. Can&apos;t find the answer? WhatsApp our concierge.
          </p>
        </div>

        <div className="divide-y-0">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>

        <div className="mt-16 text-center bg-white p-10 border border-foreground/5 shadow-sm">
          <h3 className="font-serif text-2xl mb-4">Still have questions?</h3>
          <p className="font-sans text-sm text-foreground/60 mb-6">Our concierge team is available 6 days a week to assist you.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <button className="bg-primary-gold text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-primary-dark transition-colors">
                WhatsApp Us
              </button>
            </a>
            <Link href="/contact">
              <button className="border border-foreground/20 px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-white transition-colors">
                Contact Form
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
