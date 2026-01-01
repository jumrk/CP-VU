import { newsArticles } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function NewsDetailPage({ params }) {
  const article = newsArticles.find((a) => a.id === parseInt(params.id));

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link
              href="/news"
              className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              ニュース一覧に戻る
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              投稿日:{" "}
              {new Date(article.date).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ロゴ（Logo）とは?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              「ロゴ（Logo）」は「ロゴタイプ（Logotype）」の略で、文字とグラフィック要素を巧みに組み合わせて作られたデザインのことを指します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              それは、企業やブランドを象徴し、他と区別するための独自のマークとして機能します。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Lorem Ipsum（ロレム・イプサム）
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem Ipsum（ロレム・イプサム）とは、印刷やレイアウトのデザインなどで使われる&ldquo;ダミーテキスト（仮の文章）&rdquo;のことです。
              このテキストは、1500年代に無名の印刷工が様々の文章を組み合わせて見本用の文章を作成したのが始まりとされています。
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              それ以来、印刷業界の標準的なサンプルテキストとして世紀以上にわたり使用されてきました。コンピューターが普及した現代でも、その内容はほとんど変わっていません。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              歴史
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              1960年代には、Letraset（レトラセット）社がLorem Ipsumの文章を印刷した転写シートを販売したことでさらに広まり、最近では<strong>Aldus PageMaker</strong>などのデスクトップパブリッシングソフトにも採用されています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

