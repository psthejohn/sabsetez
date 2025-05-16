// src/components/Header.jsx
import React, { useState } from "react";

const categoriesHindi = [
  "एजुकेशन", "ऑटोमोबाइल", "खेल", "जॉब", "ज्योतिष", "टेक्नोलॉजी", 
  "पैसा ही पैसा", "फाइनेंस", "फूड", "बिजनेस", "मनोरंजन", "योजना"
];
const categoriesEnglish = [
  "Education", "Automobile", "Sports", "Job", "Astrology", "Technology", 
  "Money Matters", "Finance", "Food", "Business", "Entertainment", "Scheme"
];

export default function Header() {
  const [lang, setLang] = useState("hindi");

  // Pick categories based on selected language
  const categories = lang === "hindi" ? categoriesHindi : categoriesEnglish;

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <img src="/logo.svg" alt="Logo" className="h-8" />
        <select
          className="border rounded px-2 py-1 text-sm bg-gray-100"
          value={lang}
          onChange={e => setLang(e.target.value)}
        >
          <option value="hindi">IN हिंदी</option>
          <option value="english">EN English</option>
        </select>
        <div className="flex gap-4 items-center">
          <a href="#" className="text-gray-700 text-sm">Apply For Job</a>
          <input
            type="text"
            placeholder="Search…"
            className="border px-3 py-1 rounded text-sm bg-gray-50"
          />
        </div>
      </div>
      <nav className="overflow-x-auto whitespace-nowrap px-4 py-2 bg-gray-100">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href="#"
            className="mx-2 text-gray-700 hover:text-blue-800 text-sm font-medium"
          >
            {cat}
          </a>
        ))}
      </nav>
    </header>
  );
}
