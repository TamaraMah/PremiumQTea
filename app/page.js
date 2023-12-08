import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
  <div className="bg-white flex flex-col min-h-screen">
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo and title */}
          <Link href="/">
            <div className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
              {/* Replace /path-to-your-logo.svg with your actual logo path */}
              <img src="/cat.jpg" alt="Premium QTea Logo" className="h-10 mr-3" />
              <span className="font-bold text-2xl">Premium QTea</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/shopall"><div className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer">Shop All</div></Link>
            <Link href="/aboutus"><div className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer">About Us</div></Link>
            <Link href="/contact"><div className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer">Contact</div></Link>
          </div>
        </div> 
      </div>
    </nav>
  </div>

  );
}
