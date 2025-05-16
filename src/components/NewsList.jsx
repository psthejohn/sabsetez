import React from "react";
import NewsItem from "./NewsItem.jsx";

const demoArticles = [
  {
    title: "React + Vite + Tailwind News App is Here!",
    description: "Learn how to build a modern news app using React, Vite, and Tailwind CSS 4.",
    url: "https://vitejs.dev/",
    urlToImage: "https://source.unsplash.com/800x400/?news,react",
    publishedAt: new Date().toISOString(),
    source: "ReactGPT",
  },
  {
    title: "Google AdSense Integration in React Made Easy",
    description: "Step-by-step guide to add Google Ads to your React and Tailwind project.",
    url: "https://react.dev/",
    urlToImage: "https://source.unsplash.com/800x400/?technology,google",
    publishedAt: new Date().toISOString(),
    source: "ReactGPT",
  },
];

export default function NewsList() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {demoArticles.map((article, idx) => (
        <NewsItem key={idx} article={article} />
      ))}
    </div>
  );
}
