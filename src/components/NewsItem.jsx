// src/components/NewsItem.jsx
import React from "react";

export default function NewsItem({ article }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mb-8 mx-auto max-w-xl border border-gray-100 flex flex-col items-center min-h-[270px]">
      {/* Brand/Logo (optional, displays above image/title) */}
      {article.brandLogo && (
        <img
          src={article.brandLogo}
          alt={article.source || "News"}
          className="h-10 mb-3"
        />
      )}
      {/* News Image (optional, displays above title) */}
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-36 object-cover rounded-lg mb-3 border"
          onError={e => (e.target.style.display = "none")}
        />
      )}
      {/* Headline/Title */}
      <h2 className="text-xl font-bold text-blue-900 text-center mb-2">{article.title}</h2>
      {/* Description */}
      <p className="text-gray-700 text-center mb-3">{article.description}</p>
      {/* CTA Link */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-1 text-blue-700 hover:underline font-semibold"
      >
        Read more →
      </a>
      {/* Source & Time */}
      <div className="text-xs text-gray-400 mt-4 text-center">
        {article.source && <>Source: <span className="font-medium">{article.source}</span> | </>}
        {article.publishedAt && new Date(article.publishedAt).toLocaleString()}
      </div>
    </div>
  );
}