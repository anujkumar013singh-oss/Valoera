import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ui/ProductCard";

async function getTrendingProducts() {
  return await prisma.product.findMany({
    where: {
      tags: {
        contains: 'Trending'
      }
    },
    take: 60
  });
}

export default async function TrendingPage() {
  const products = await getTrendingProducts();

  return (
    <div className="pt-24 pb-20 container mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Trending Now</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the most coveted pieces of the season. Curated for the modern muse.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {products.map((product, index) => (
          index === 1 ? (
            <ProductCard
              key="jacket-special"
              id="special-jacket"
              name="Classic Jacket"
              price={79.99}
              image="https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800"
              category="Outerwear"
              tags="Trending"
              description="A stylish jacket for a modern look."
              discount={10}
            />
          ) : index === 5 ? (
            <ProductCard
              key="cargo-pant-special"
              id="special-cargo-pant"
              name="Stylish Cargo Pant"
              price={89.99}
              image="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800"
              category="Bottoms"
              tags="Trending"
              description="A versatile and comfortable cargo pant with multiple pockets, perfect for everyday wear."
              discount={15}
            />
          ) : (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={index === 0 ? 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800' : 
                     index === 3 ? 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800' : 
                     index === 4 ? 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800' : 
                     index === 6 ? 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800' : 
                     index === 10 ? 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&q=80&w=800' : 
                     index === 16 ? 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800' : 
                     index === 17 ? 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800' : 
                     index === 21 ? 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800' : 
                     index === 23 ? 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=800' : 
                     index === 30 ? 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800' : 
                     index === 34 ? 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=800' : 
                     index === 36 ? 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800' : 
                     index === 44 ? 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800' : 
                     index === 56 ? 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800' : 
                     index === 57 ? 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800' : 
                     product.images.split(',')[0]}
              category={product.category}
              tags={product.tags}
              description={product.description}
              discount={Math.random() > 0.7 ? 20 : undefined}
            />
          )
        ))}
      </div>
      
      {products.length === 0 && (
         <div className="text-center py-20">
            <p className="text-gray-500">No trending products found at the moment.</p>
         </div>
      )}
    </div>
  );
}
