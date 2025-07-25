import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getProduct } from "@/server/product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        asChild
        className="mb-8 -ml-3"
      >
        <Link href="/" className="inline-flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to products</span>
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-8"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-semibold text-gray-700">
                  {product.rating.rate}
                </span>
                <span className="text-sm text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <p className="text-4xl font-bold text-blue-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="border-t pt-6">
            <AddToCartButton product={product} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Category:</span>
                  <p className="font-medium capitalize">{product.category}</p>
                </div>
                <div>
                  <span className="text-gray-600">Rating:</span>
                  <p className="font-medium">{product.rating.rate}/5 stars</p>
                </div>
                <div>
                  <span className="text-gray-600">Reviews:</span>
                  <p className="font-medium">
                    {product.rating.count} customer reviews
                  </p>
                </div>
                <div>
                  <span className="text-gray-600">Price:</span>
                  <p className="font-medium">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
