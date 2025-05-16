// src/components/MainNews.jsx
import React from "react";

export default function MainNews({ article }) {
  if (!article) return null;
  return (
    <section className="my-6">
      <div className="bg-white shadow rounded-xl flex flex-col md:flex-row gap-6 items-center p-6">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full md:w-2/5 h-56 object-cover rounded-lg mb-3 md:mb-0"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">{article.title}</h2>
          <p className="text-gray-700 mb-3">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold hover:underline"
          >
            {article.linkText || "Read more →"}
          </a>
        </div>
      </div>
    </section>
  );
}
