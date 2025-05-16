// src/components/NewsItem.jsx
import React from "react";

export default function NewsItem({ article }) {
  return (
    <div className="bg-white/95 rounded-2xl shadow-lg p-5 mb-8 mx-2 max-w-2xl md:mx-auto border border-gray-200">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover rounded-lg mb-3 border"
          onError={e => e.target.style.display = 'none'}
        />
      )}
      <h2 className="text-xl font-bold mb-1 text-blue-900">{article.title}</h2>
      <p className="text-gray-700 mb-2">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-700 hover:underline font-semibold"
      >
        Read more →
      </a>
      <div className="text-xs text-gray-400 mt-2">
        Source: {article.source} | {new Date(article.publishedAt).toLocaleString()}
      </div>
    </div>
  );
}
