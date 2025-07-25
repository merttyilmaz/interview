import ProductList from "@/components/ProductsList";
import ProductsLoadingSkeleton from "@/components/ProductsLoadingSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Amazing Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our curated collection of high-quality products from various
          categories. Find exactly what you&apos;re looking for at great prices.
        </p>
      </div>

      <Suspense fallback={<ProductsLoadingSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
