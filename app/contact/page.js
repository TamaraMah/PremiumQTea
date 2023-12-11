import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div
      className="bg-white flex flex-col min-h-screen"
      style={{
        backgroundImage: 'url(/contactbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <nav className="bg-gray-100 shadow-md mix-blend-luminosity font-serif">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">← Back to Home</div>
          </Link>
        </div>
      </nav>

      <main className="flex-grow p-4 text-gray-700 mix-blend-luminosity font-serif">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
            If you have any questions or concerns, please email hello@premiumqtea.com or fill out the form below, and we will get back to you as soon as possible (usually within 1-2 business days)!
            </p>
          </div>
          <div>
            <form className="flex flex-col space-y-4">
              <input className="border-2 border-red-200 p-2" type="text" placeholder="Your Name" />
              <input className="border-2 border-red-200 p-2" type="email" placeholder="Email" />
              <input className="border-2 border-red-200 p-2" type="tel" placeholder="Phone Number" />
              <textarea className="border-2 border-red-200 p-2" placeholder="Message" rows="4"></textarea>
              <button className="bg-red-400 text-red-800 p-2 rounded hover:bg-red-300 transition-colors">Send</button>
            </form>
          </div>
        </div>
      </main>
      
      <footer className="p-4 text-center mt-auto mix-blend-soft-light bg-gray-800 font-serif">
        <p>Premium QTea © 2023</p>
      </footer>
    </div>
  );
}
