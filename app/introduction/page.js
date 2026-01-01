export default function IntroductionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            導入
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            CP VU合同会社について
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Company Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              会社概要
            </h2>
            <div className="bg-gray-50 rounded-xl p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-900">商号</p>
                  <p className="text-gray-700">CP VU合同会社</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    会社法人等番号
                  </p>
                  <p className="text-gray-700">1200-03-029318</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">本店</p>
                  <p className="text-gray-700">
                    〒557-0063
                    <br />
                    大阪市西成区北津守2－5－23
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    会社成立の年月日
                  </p>
                  <p className="text-gray-700">令和7年4月21日</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    公告をする方法
                  </p>
                  <p className="text-gray-700">官報に掲載してする。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Purpose */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">目的</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <ol className="space-y-3 text-gray-700">
                <li>
                  1. インターネット、その他の通信を利用した通信販売業及び受注受付代行業務
                </li>
                <li>2. 輸出入貿易業務及び輸出入貿易手続きの事務代行</li>
                <li>
                  3. アパレルショップ、飲食店、食材販売店、美容室及びスパサロン等の経営
                </li>
                <li>4. ホテル、旅館等の宿泊施設の経営及び賃貸業務</li>
                <li>5. 古物営業法に基づく古物営業</li>
                <li>6. 一般廃棄物、産業廃棄物の収集、運搬及び処分業</li>
                <li>7. 不動産の売買、賃貸、管理、仲介及び斡旋</li>
                <li>8. ハウスクリーニング、ビル及び客室等清掃事業</li>
                <li>9. 前各号に関するコンサルティング事業</li>
                <li>10. 前各号に附帯又は関連する一切の業務</li>
              </ol>
            </div>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              私たちのビジョン
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              CP VU合同会社は、多様なビジネス分野において高品質なサービスを提供し、
              お客様の満足と信頼を第一に考えています。革新的なアプローチと確かな実績で、
              持続可能な成長を目指します。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

