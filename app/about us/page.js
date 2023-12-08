// pages/aboutus/page.js

import React from "react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Content of the About Us page */}
      <nav className="bg-gray-100 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Back to home link */}
          <Link href="/">
            <a className="text-gray-700 hover:text-gray-900">← Back to Home</a>
          </Link>
        </div>
      </nav>
      
      <main className="flex-grow p-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            {/* Add your about us content here */}
            Welcome to Premium QTea! We are passionate about providing the highest 
            quality teas from around the world to our customers. Our mission is to 
            enrich people's lives with the comforting and invigorating experience 
            of enjoying an excellent cup of tea.
          </p>
          {/* More content and sections can be added here */}
        </div>
      </main>
      
      <footer className="bg-gray-300 text-black p-4 text-center">
        {/* Footer content */}
        <p>Premium QTea © 2023</p>
      </footer>
    </div>
  );
}