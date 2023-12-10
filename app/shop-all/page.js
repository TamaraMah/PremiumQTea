"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const ProductDetailsModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg flex max-w-2xl">
        <div className="flex-none w-1/2 p-2">
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-md"/>
        </div>
        <div className="flex-grow p-2">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="font-bold">Price: ${product.price}</p>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
            Close
          </button>
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
    // ... other products
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <nav className="bg-gray-100 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">← Back to Home</div>
          </Link>
        </div>
      </nav>

      <main className="flex-grow p-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-10 text-pink-800">Explore Our Teas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(product => (
              <div key={product.id} className="bg-white border-2 border-gray-200 hover:border-gray-400 p-6 hover:shadow-xl transition duration-500 ease-in-out rounded-xl transform hover:scale-105 cursor-pointer" onClick={() => openModal(product)}>
                <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-6 rounded-md"/>
                <h2 className="text-3xl font-semibold mb-2" style={{ color: 'pink' }}>{product.name}</h2>
                <p className="mb-4" style={{ color: 'pink' }}>{product.description}</p>
                <div className="text-pink-600 font-medium">View Details</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {showModal && <ProductDetailsModal product={selectedProduct} onClose={closeModal} />}

      <footer className="bg-gray-300 text-black p-4 text-center">
        <p>Premium QTea © 2023</p>
      </footer>
    </div>
  );
}
