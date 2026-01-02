"use client";

import { useEffect } from "react";
import { products, newsArticles } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import ServiceAccordion from "@/components/ServiceAccordion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Scroll nhẹ xuống section services sau khi page load
    const timer = setTimeout(() => {
      const servicesSection = document.getElementById("services-section");
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500); // Delay 500ms để đảm bảo page đã render xong

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollAnimation>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-white py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8 animate-on-scroll-left">
                私たちはコードを書き
                <br />
                私たちは届けます
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed animate-on-scroll-left">
                高品質なサービスで、お客様の満足と信頼を第一に。
              </p>
              <Link
                href="/shop"
                className="inline-block bg-black text-white font-medium py-4 px-10 hover:bg-gray-800 transition-all duration-300 animate-on-scroll-left"
              >
                製品を見る
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services-section"
          className="py-12 md:py-16 bg-white border-b border-gray-100"
        >
          <div className="container mx-auto px-4">
            <div className="animate-on-scroll">
              <ServiceAccordion />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                おすすめ製品
              </h2>
              <p className="text-gray-600">厳選された人気商品</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
              {products.slice(0, 6).map((product, index) => (
                <div key={product.id} className="animate-on-scroll">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="mt-16 text-center animate-on-scroll">
              <Link
                href="/shop"
                className="inline-block text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:opacity-60 transition-opacity"
              >
                すべての製品を見る →
              </Link>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                ニュース速報
              </h2>
              <p className="text-gray-600">最新のファッショントレンド</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {newsArticles.slice(0, 4).map((article, index) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="group animate-on-scroll"
                >
                  <div className="relative aspect-[16/10] bg-gray-200 overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <span className="text-sm text-gray-900 border-b border-gray-900 pb-1 inline-block group-hover:opacity-60 transition-opacity">
                    続きを読む →
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-16 text-center animate-on-scroll">
              <Link
                href="/news"
                className="inline-block text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:opacity-60 transition-opacity"
              >
                すべてのニュースを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">CP VU合同会社</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  本店：〒557-0063
                  <br />
                  大阪市西成区北津守2－5－23
                </p>
                <p className="text-gray-400 text-sm mt-4">
                  会社法人等番号: 1200-03-029318
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">カスタマーサポート</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>プライバシーポリシー</li>
                  <li>製品交換ポリシー</li>
                  <li>購入ガイド</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">接触</h3>
                <p className="text-gray-400 text-sm mb-4">
                  お問い合わせはお気軽にどうぞ
                </p>
                <div className="flex flex-col items-start">
                  <div className="w-48 h-48 relative">
                    <Image
                      src="/images/image.png"
                      alt="LINE QR Code"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 CP VU合同会社. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </ScrollAnimation>
  );
}
