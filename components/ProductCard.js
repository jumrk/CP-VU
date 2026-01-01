"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/shop/${product.id}`}>
      <div
        className="group relative bg-white overflow-hidden transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
          {product.isHot && (
            <span className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-3 py-1 z-10">
              HOT
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Info */}
        <div className="py-4">
          <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 min-h-[48px]">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-semibold text-gray-900">
              ¥{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ¥{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.wholesalePrice && (
            <p className="text-xs text-gray-500">
              卸売: ¥{product.wholesalePrice.toLocaleString()}
            </p>
          )}
        </div>

        {/* Hover Effect */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-4 transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <button className="w-full text-sm font-medium">詳細を見る →</button>
        </div>
      </div>
    </Link>
  );
}

