import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            ショップトラン
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            高品質な製品を豊富に取り揃えております
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

