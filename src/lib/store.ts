import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  fabric: string;
  color: string;
  description?: string;
  isNewArrival?: boolean;
  images?: string[];
};

type CartItem = Product & {
  quantity: number;
  size: string;
};

interface AppState {
  cart: CartItem[];
  wishlist: Product[];
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  toggleWishlist: (item: Product) => void;
  setCartOpen: (isOpen: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      isCartOpen: false,
      isMobileMenuOpen: false,
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (c) => c.id === item.id && c.size === item.size
          );
          if (existingItem) {
            return {
              cart: state.cart.map((c) =>
                c.id === item.id && c.size === item.size
                  ? { ...c, quantity: c.quantity + item.quantity }
                  : c
              ),
              isCartOpen: true,
            };
          }
          return { cart: [...state.cart, item], isCartOpen: true };
        }),
      removeFromCart: (id, size) =>
        set((state) => ({
          cart: state.cart.filter((c) => !(c.id === id && c.size === size)),
        })),
      updateQuantity: (id, size, quantity) =>
        set((state) => ({
          cart: state.cart.map((c) =>
            c.id === id && c.size === size ? { ...c, quantity } : c
          ),
        })),
      toggleWishlist: (item) =>
        set((state) => {
          const exists = state.wishlist.some((w) => w.id === item.id);
          if (exists) {
            return { wishlist: state.wishlist.filter((w) => w.id !== item.id) };
          }
          return { wishlist: [...state.wishlist, item] };
        }),
      setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
    }),
    {
      name: 'raha-boutique-storage',
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
    }
  )
);
