"use client";

import { useState } from "react";

export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "インターネット通信販売",
      description:
        "インターネットを利用した通信販売サービスを提供しています。お客様のニーズに合わせた商品を、迅速かつ安全にお届けいたします。",
    },
    {
      id: 2,
      title: "輸出入業",
      description:
        "国際貿易における輸出入業務を行っています。グローバルなネットワークを活用し、スムーズな貿易取引をサポートいたします。",
    },
    {
      id: 3,
      title: "衣料品・飲食・食品",
      description:
        "高品質な衣料品、飲食店の運営、食品の販売を行っています。お客様の生活を豊かにする商品とサービスを提供しています。",
    },
    {
      id: 4,
      title: "エステサロン・スパ",
      description:
        "美と健康をサポートするエステサロンとスパを運営しています。リラックスできる空間で、最高のサービスを提供いたします。",
    },
    {
      id: 5,
      title: "ホテル・旅館",
      description:
        "快適な宿泊施設を提供しています。お客様に心地よい滞在体験をお届けし、思い出に残る時間を演出いたします。",
    },
    {
      id: 6,
      title: "廃棄物処理",
      description:
        "環境に配慮した廃棄物処理サービスを提供しています。適切な処理とリサイクルで、持続可能な社会の実現に貢献します。",
    },
    {
      id: 7,
      title: "不動産仲介",
      description:
        "不動産の売買、賃貸の仲介業務を行っています。お客様の理想の物件探しを、専門知識でサポートいたします。",
    },
    {
      id: 8,
      title: "オフィス・ホテル清掃",
      description:
        "オフィスやホテルの清掃サービスを提供しています。清潔で快適な環境づくりをプロフェッショナルな技術でお手伝いします。",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          事業内容
        </h2>
        <p className="text-gray-600">私たちのサービス</p>
      </div>

      {/* Accordion Items */}
      <div className="space-y-2">
        {services.map((service, index) => (
          <div key={service.id} className="border border-gray-200 bg-white">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-2 h-2 text-gray-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                <span className="text-gray-900 font-medium">
                  {service.title}
                </span>
              </div>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

