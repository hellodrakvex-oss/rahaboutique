"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Heart, User, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";

export function MobileNav() {
  const pathname = usePathname();
  const { wishlist } = useAppStore();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Collections", href: "/collections", icon: LayoutGrid },
    { name: "Search", href: "/search", icon: Search },
    { name: "Wishlist", href: "/wishlist", icon: Heart, count: wishlist.length },
    { name: "Profile", href: "/contact", icon: User },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-foreground/10 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors relative",
                isActive ? "text-primary-gold" : "text-foreground/50 hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[10px] font-sans tracking-wide">{item.name}</span>
              {item.count ? (
                <span className="absolute top-2 right-1/4 translate-x-2 -translate-y-1 bg-primary-gold text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  {item.count}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
