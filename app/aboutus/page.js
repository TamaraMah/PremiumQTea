import React from "react";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div
      className="bg-white flex flex-col min-h-screen"
      style={{
        backgroundImage: 'url(/teapot.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <nav className="bg-gray-100 shadow-md mix-blend-luminosity">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">← Back to Home</div>
          </Link>
        </div>
      </nav>
      
      <main className="flex-grow p-4 text-pink-600 font-serif mix-blend-luminosity">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
          
          <p className="text-lg">
            Welcome to Premium QTea! We are passionate about providing the highest 
            quality teas from around the world to our customers. Our mission is to 
            enrich people's lives with the comforting and invigorating experience 
            of enjoying an excellent cup of tea.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Our Story</h2>
          <p className="text-lg">
            Premium QTea started as a small family-owned tea shop in the heart of the city. 
            Over the years, our love for tea and dedication to quality have driven us to 
            source the finest tea leaves from tea gardens worldwide. We carefully select 
            and blend each tea to perfection, ensuring that every sip is a delightful 
            experience.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Our Commitment</h2>
          <p className="text-lg">
            At Premium QTea, we are committed to sustainability and ethical sourcing. 
            We work closely with tea farmers and communities, ensuring fair trade and 
            environmentally friendly practices. Our packaging is eco-friendly, reflecting 
            our dedication to a greener planet.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Join Us</h2>
          <p className="text-lg">
            We invite you to join us on this tea journey. Explore our wide selection of 
            premium teas, from classic blends to unique flavors. Whether you're a tea 
            connoisseur or new to the world of tea, there's a perfect cup waiting for you.
          </p>
        </div>
      </main>
      
      <footer className="p-4 text-center mt-auto mix-blend-soft-light bg-gray-800">
        <p>Premium QTea © 2023</p>
      </footer>
    </div>
  );
}
