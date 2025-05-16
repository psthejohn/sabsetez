// src/App.jsx
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { groupNewsByCategory } from "./utils";
import MainNews from "./components/MainNews";
import CategoryRow from "./components/CategoryRaw";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SHEET_CSV_URL = import.meta.env.VITE_SHEET_CSV_URL;

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((r) => r.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (res) => setNews(res.data),
        });
      });
  }, []);

  const grouped = groupNewsByCategory(news);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto mt-2">
        <MainNews article={grouped.breaking} />
        {Object.entries(grouped.categories).map(([cat, articles]) => (
          <CategoryRow key={cat} title={cat} articles={articles} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
export default App;
