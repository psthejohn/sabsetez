import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import NewsItem from "./NewsItem.jsx";

const SHEET_CSV_URL = import.meta.env.VITE_SHEET_CSV_URL;

export default function NewsList() {
  const [articles, setArticles] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            setArticles(results.data);
          },
        });
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      {articles.map((article, idx) => (
        <div key={idx} onClick={() => setSelected(article)}>
          <NewsItem article={article} />
        </div>
      ))}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-8 rounded-xl max-w-lg w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>
            <img
              src={selected.urlToImage}
              alt={selected.title}
              className="w-full h-48 object-cover mb-3 rounded"
              onError={e => (e.target.style.display = "none")}
            />
            <p className="mb-3">{selected.description}</p>
            <a
              href={selected.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              Read original article &rarr;
            </a>
            <div className="mt-4 text-xs text-gray-500">
              {selected.source && <span>Source: <b>{selected.source}</b> | </span>}
              {selected.publishedAt && new Date(selected.publishedAt).toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
