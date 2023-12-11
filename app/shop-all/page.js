"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-500 bg-opacity-75 absolute inset-0"></div>
      <div className="bg-white p-4 rounded-lg shadow-lg flex max-w-2xl relative">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800">
          <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex-none w-1/2 p-2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-md"/>
        </div>
        <div className="flex-grow p-2">
          <h2 className="text-2xl font-bold mb-2 text-pink-800 font-serif">{product.name}</h2>
          <p className="mb-4 text-pink-800 font-serif">{product.description}</p>
          <p className="font-bold text-pink-800 font-serif">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default function ShopAllPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const products = [
    { id: 1, name: "Baja Ice", description: "A cool, refreshing blend perfect for summer days.", price: "15.99", imageUrl: "/baja ice.jpg" },
    { id: 2, name: "Across a Crowded Room", description: "Rich in flavor, this tea is like a delightful conversation.", price: "18.50", imageUrl: "/across a crowded room.jpg" },
    { id: 3, name: "Rose Chateau", description: "Elegant and floral, an exquisite choice for refined palates.", price: "22.00", imageUrl: "/rose chateau.jpg" },
    { id: 4, name: "Raspberry in Paris", description: "Vibrant and fruity, a romantic escape in every sip.", price: "14.99", imageUrl: "/raspberry in paris.jpg" },
    { id: 5, name: "Angel's Dream", description: "Sweet and heavenly, a soothing blend for peaceful moments.", price: "12.95", imageUrl: "/angels dream.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-serif" style={{ backgroundImage: 'url(/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <nav className="bg-gray-100 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">← Back to Home</div>
          </Link>
        </div>
      </nav>

      <main className="flex-grow p-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-normal mb-10 text-pink-800 font-serif">Explore Our Selection of Luxury Tea</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <div key={product.id} className="bg-white border-2 border-gray-200 hover:border-gray-400 p-6 hover:shadow-xl transition duration-500 ease-in-out rounded-xl transform hover:scale-105 cursor-pointer" onClick={() => openModal(product)}>
              <Image src={product.imageUrl} alt={product.name} className="w-full h-auto mb-6 rounded-md" width={500} height={300} /> {/* Adjust width and height as needed */}
              <h2 className="text-3xl font-semibold mb-2 text-pink-800 font-serif">{product.name}</h2>
              <p className="mb-4 text-pink-800 font-serif">{product.description}</p>
              <div className="text-pink-600 font-medium">View Details</div>
            </div>
          ))}
        </div>
      </div>
    </main>

      {showModal && <ProductDetailsModal product={selectedProduct} onClose={closeModal} />}
      
      <footer className="bg-gray-200 text-black p-4 text-center">
        <p>Premium QTea © 2023</p>
      </footer>
    </div>
  );
}
