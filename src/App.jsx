import React from "react";
import NewsList from "./components/NewsList.jsx";
import GoogleAd from "./components/GoogleAd.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 py-5 mb-6 shadow">
        <h1 className="text-3xl text-white text-center font-extrabold tracking-wide">
          📰 React News Today
        </h1>
      </header>
      <GoogleAd slot="1234567890" />
      <main>
        <NewsList />
      </main>
      <footer className="bg-blue-900 py-3 text-center text-white mt-10 text-xs">
        © {new Date().getFullYear()} React News App. Powered by Vite & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
