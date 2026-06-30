"use client";

import { useAppStore } from "@/lib/store";
import { formatPrice } from "@/lib/data";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, updateQuantity, removeFromCart } = useAppStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col shadow-2xl border-l border-primary-gold/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-foreground/10">
              <h2 className="font-serif text-2xl flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" /> Your Cart
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                  <ShoppingBag className="w-12 h-12 mb-4" strokeWidth={1} />
                  <p className="font-sans uppercase tracking-widest text-sm">Your cart is empty</p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="border-b border-foreground pb-1 text-xs uppercase tracking-widest mt-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="relative w-24 h-32 bg-foreground/5 rounded-sm overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <Link href={`/product/${item.id}`} onClick={() => setCartOpen(false)}>
                          <h3 className="font-serif text-lg hover:text-primary-gold transition-colors">{item.name}</h3>
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-foreground/40 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-sans text-xs text-foreground/60 mb-2">Size: {item.size} | Color: {item.color}</p>
                      <p className="font-sans text-sm tracking-wider mb-auto">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-foreground/20 rounded-full px-3 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:text-primary-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-sm w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="p-1 hover:text-primary-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-foreground/10 bg-white">
                <div className="flex justify-between items-center mb-6 font-sans">
                  <span className="text-sm uppercase tracking-widest text-foreground/60">Subtotal</span>
                  <span className="text-lg tracking-wider">{formatPrice(total)}</span>
                </div>
                <p className="font-sans text-xs text-foreground/50 text-center mb-6">
                  Shipping & taxes calculated at checkout.
                </p>
                <Link href="/checkout" onClick={() => setCartOpen(false)}>
                  <button className="w-full bg-primary-gold text-white py-4 font-sans text-xs uppercase tracking-widest hover:bg-primary-dark transition-colors">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
