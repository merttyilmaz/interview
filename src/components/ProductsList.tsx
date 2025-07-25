import { getProducts } from "@/server/product";
import ProductCard from "./ProductCard";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <>
      {products.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            No products available
          </h2>
          <p className="text-gray-600">
            We&apos;re having trouble loading products. Please try again later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
