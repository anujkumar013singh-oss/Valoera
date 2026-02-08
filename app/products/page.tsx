import { Suspense } from 'react';
import { prisma } from "@/lib/prisma";
import ProductGrid from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

async function getProducts() {
  return await prisma.product.findMany();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="pt-24 pb-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-2">All Products</h1>
          <p className="text-gray-500">Showing {products.length} results</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
           <Button variant="outline" size="sm" className="flex items-center">
             Sort By <ChevronDown size={14} className="ml-2" />
           </Button>
        </div>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
