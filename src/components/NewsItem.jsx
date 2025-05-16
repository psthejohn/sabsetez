// src/components/NewsItem.jsx
import React from "react";

export default function NewsItem({ article, compact }) {
  return (
    <div className={`bg-white rounded-xl shadow p-3 mb-2 ${compact ? 'min-h-[130px]' : 'min-h-[270px]'}`}>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className={`w-full ${compact ? 'h-24' : 'h-36'} object-cover rounded mb-2`}
        />
      )}
      <h2 className="text-lg font-bold text-blue-900 mb-1">{article.title}</h2>
      {!compact && <p className="text-gray-700 mb-2">{article.description}</p>}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline font-semibold text-sm"
      >
        Read more →
      </a>
      <div className="text-xs text-gray-400 mt-2">
        {article.source && <>Source: <span className="font-medium">{article.source}</span> | </>}
        {article.publishedAt && new Date(article.publishedAt).toLocaleString()}
      </div>
    </div>
  );
}
