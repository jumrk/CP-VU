"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("ホーム");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const menuItems = [
    { id: "home", label: "ホーム", href: "/" },
    { id: "intro", label: "導入", href: "/introduction" },
    { id: "shop", label: "ショップトラン", href: "/shop" },
    { id: "news", label: "ニュース速報", href: "/news" },
    { id: "contact", label: "接触", href: "/contact" },
  ];

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close search on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
    // You can add your search functionality here
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg">CP</span>
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  CP VU
                </span>
                <span className="text-[10px] text-gray-500 tracking-wider">
                  合同会社
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveMenu(item.label)}
                className={`group relative text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300 ease-in-out ${
                  activeMenu === item.label
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <span className="relative inline-block py-1">
                  {item.label}
                  {/* Underline animation on hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                      activeMenu === item.label
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
                {/* Hover background effect */}
                <span className="absolute inset-0 -z-10 bg-gray-100 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Right Side - Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Box - Desktop */}
            {searchOpen ? (
              <div className="hidden md:flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 transition-all duration-300 ease-in-out animate-slideIn">
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center space-x-2 w-full"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="検索..."
                    className="outline-none text-sm text-gray-700 flex-1 bg-transparent min-w-0"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                    aria-label="閉じる"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex text-gray-700 hover:text-black transition-all duration-200 hover:scale-110"
                aria-label="検索"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveMenu(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium py-2 px-2 transition-colors ${
                    activeMenu === item.label
                      ? "text-black border-l-4 border-black"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
