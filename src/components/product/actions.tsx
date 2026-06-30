"use client";

import { useState } from "react";
import { Heart, ShoppingBag, MessageCircle } from "lucide-react";
import { useAppStore, Product } from "@/lib/store";

export function ProductActions({ product }: { product: Product }) {
  const [size, setSize] = useState("M");
  const { addToCart, toggleWishlist, wishlist } = useAppStore();

  const isWishlisted = wishlist.some((w) => w.id === product.id);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      size,
    });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi Raha Boutique, I'm interested in purchasing the ${product.name} (Size: ${size}).`);
    window.open(`https://wa.me/9943467778?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-8">
      {/* Size Selection */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="font-sans text-xs uppercase tracking-widest text-foreground">Select Size</span>
          <button className="font-sans text-xs uppercase tracking-widest text-primary-gold underline underline-offset-4">Size Guide</button>
        </div>
        <div className="flex flex-wrap gap-4">
          {["XS", "S", "M", "L", "XL"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`w-12 h-12 flex items-center justify-center border font-sans text-xs transition-colors ${
                size === s 
                ? 'border-primary-gold bg-primary-gold text-white' 
                : 'border-foreground/20 hover:border-foreground/50'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-foreground text-white py-4 font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
        >
          <ShoppingBag className="w-4 h-4" /> Add to Cart
        </button>
        
        <div className="flex gap-4">
          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-[#25D366] text-white py-4 font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Order on WhatsApp
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            className={`w-14 flex items-center justify-center border transition-colors ${
              isWishlisted 
              ? 'border-red-500 text-red-500' 
              : 'border-foreground/20 hover:border-foreground/50'
            }`}
          >
            <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
}
