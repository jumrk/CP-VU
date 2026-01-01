import { newsArticles } from "@/lib/data";
import Link from "next/link";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            ニュース速報
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            最新のファッショントレンドとニュースをお届けします
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(article.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-indigo-600 font-semibold inline-flex items-center gap-2">
                  続きを読む
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

