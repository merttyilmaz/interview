"use server";

import { Product } from "@/store/cart";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const product: Product = await res.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
};
