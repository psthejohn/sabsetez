// src/components/CategoryRow.jsx
import React from "react";
import NewsItem from "./NewsItem";

export default function CategoryRow({ title, articles }) {
  if (!articles || !articles.length) return null;
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold">{title} <span className="ml-2 text-red-600">▶</span></h3>
        <button className="text-blue-700 text-sm hover:underline">See more</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {articles.map((article, idx) => (
          <NewsItem article={article} key={idx} compact />
        ))}
      </div>
    </section>
  );
}
    