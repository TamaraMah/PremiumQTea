import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-col min-h-screen font-serif" style={{ backgroundImage: 'url(/teabg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <nav className="bg-gray-100 shadow-md mix-blend-luminosity">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link href="/">
              <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
              <img src="/tealogo.jpg" alt="Premium QTea Logo" className="h-16 " />
                <span className="font-bold text-2xl">Premium QTea</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/shop-all">
                <div className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out">Shop All</div>
              </Link>
              <Link href="/about-us">
                <div className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out">About Us</div>
              </Link>
              <Link href="/contact">
                <div className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <footer className="p-4 text-center mt-auto mix-blend-soft-light bg-gray-800">
        <p>Premium QTea © 2023</p>
      </footer>
    </div>
  );
}
