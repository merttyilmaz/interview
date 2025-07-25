"use client";

import { useState } from "react";
import { Product, useCartStore } from "@/store/cart";
import { ShoppingCart, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);

    // Reset the success state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleAddToCart}
        disabled={isAdded}
        size="lg"
        className={cn(
          "w-full flex items-center justify-center space-x-2 py-4 text-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105",
          {
            "bg-green-600 hover:bg-green-600 cursor-not-allowed": isAdded,
          }
        )}
      >
        {isAdded ? (
          <>
            <Check className="h-6 w-6" />
            <span>Added to Cart!</span>
          </>
        ) : (
          <>
            <ShoppingCart className="h-6 w-6" />
            <span>Add to Cart</span>
          </>
        )}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        Free shipping on orders over $50
      </p>
    </div>
  );
}
