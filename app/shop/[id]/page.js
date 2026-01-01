"use client";

import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    notFound();
  }

  // Mock multiple images (in real app, would come from product data)
  const images = [product.image, product.image, product.image];

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="text-gray-900 hover:opacity-60 flex items-center gap-2 text-sm transition-opacity"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            ショップに戻る
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
              {product.isHot && (
                <span className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-3 py-1 z-10">
                  HOT
                </span>
              )}
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[3/4] bg-gray-50 overflow-hidden transition-opacity ${
                    selectedImage === idx ? "opacity-100" : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 md:pt-0">
            <div>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                {product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-3 pb-6 border-b">
              <span className="text-2xl font-medium text-gray-900">
                ¥{product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ¥{product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            {product.wholesalePrice && (
              <div className="py-4 px-5 bg-gray-50">
                <p className="text-sm text-gray-700">
                  卸売価格: ¥{product.wholesalePrice.toLocaleString()}
                </p>
              </div>
            )}

            {/* Product Description */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                製品説明
              </h3>
              <p className="text-gray-600 leading-relaxed">
                この製品は高品質な素材を使用し、優れたデザインと機能性を兼ね備えています。
                日常使いからフォーマルなシーンまで、幅広くご利用いただけます。
              </p>
            </div>

            {/* Add to Cart Section */}
            <div className="pt-6 space-y-3">
              <button className="w-full bg-black text-white font-medium py-4 hover:bg-gray-800 transition-all duration-300">
                カートに追加
              </button>
              <button className="w-full border border-gray-900 text-gray-900 font-medium py-4 hover:bg-gray-50 transition-all duration-300">
                今すぐ購入
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">配送</span>
                <span className="text-gray-900">全国配送可能</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">返品</span>
                <span className="text-gray-900">7日以内返品可能</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 md:mt-32">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            関連製品
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {products
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-gray-50 overflow-hidden mb-3">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    ¥{relatedProduct.price.toLocaleString()}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

