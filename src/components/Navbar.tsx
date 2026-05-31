"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-emerald-700">
              Thein Khathu
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-700 transition-colors">
              ပင်မစာမျက်နှာ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">
              အကြောင်း
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors">
              ဆက်သွယ်ရန်
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsOpen(false)}>
              ပင်မစာမျက်နှာ
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsOpen(false)}>
              အကြောင်း
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsOpen(false)}>
              ဆက်သွယ်ရန်
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
