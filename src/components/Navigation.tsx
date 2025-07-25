"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart";
import UserStatus from "./UserStatus";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const { getTotalItems } = useCartStore();

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ProductShop
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-500 hover:text-gray-700 hover:bg-gray-100",
                  pathname === "/" && "bg-blue-100 text-blue-700"
                )}
              >
                Products
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <Link
              href="/checkout"
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            <UserStatus />
          </div>
        </div>
      </nav>
    </header>
  );
}
