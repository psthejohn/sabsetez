import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-100 mt-12 pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left - About */}
        <div className="mb-8 md:mb-0 flex-1">
          <img src="/logo.svg" alt="Logo" className="h-10 mb-3" />
          <p className="text-sm opacity-80">
            <b>React News Today</b> brings you the latest news from tech, business, sports, and more. Stay informed and inspired—anytime, anywhere.
          </p>
          <div className="flex space-x-3 mt-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.825.775..." /></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407..." /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062..." /></svg>
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2">Categories</h4>
          <ul className="space-y-1 text-sm opacity-90">
            <li><a href="#" className="hover:underline">Tech News</a></li>
            <li><a href="#" className="hover:underline">Business</a></li>
            <li><a href="#" className="hover:underline">Sports</a></li>
            <li><a href="#" className="hover:underline">Automobile</a></li>
            <li><a href="#" className="hover:underline">Entertainment</a></li>
          </ul>
        </div>

        {/* Right - Newsletter */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
          <p className="text-sm opacity-80 mb-2">Get top stories delivered to your inbox.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-l px-3 py-2 w-full text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-4 py-2 rounded-r font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-800 mt-8 mb-2"></div>
      {/* Copyright */}
      <div className="text-center text-xs opacity-70">
        © {new Date().getFullYear()} React News Today. Made with <span className="text-red-400">❤</span> in India. Powered by React, Vite & Tailwind CSS.
      </div>
    </footer>
  );
}
