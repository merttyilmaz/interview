"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, useCartStore } from "@/store/cart";
import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    addItem(product);
  };

  return (
    <Link href={`/product/${product.id}`} className="group">
      <Card className="hover:shadow-md transition-shadow duration-300 overflow-hidden">
        <div className="aspect-square relative bg-gray-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
          />
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">
                {product.rating.rate}
              </span>
            </div>
          </div>

          <CardTitle className="line-clamp-2 min-h-[3rem] text-base">
            {product.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>

            <Button
              onClick={handleAddToCart}
              size="sm"
              className="flex items-center space-x-1"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
