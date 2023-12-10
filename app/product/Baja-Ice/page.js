import { useRouter } from 'next/router';
import React from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // This will be the product's unique identifier.

  // Here you would fetch the product details from a backend API or data store
  // For the purpose of this example, I'll use a mock fetch function
  const fetchProductDetails = async (productId) => {
    // Replace with your actual API call or data fetching logic
    const productDetails = {
      '1': { name: "Baja Ice", description: "A cool, refreshing blend perfect for summer days.", imageUrl: "/baja ice.jpg" },
      '2': { name: "Across a Crowded Room", description: "Rich in flavor, this tea is like a delightful conversation.", imageUrl: "/across a crowded room.jpg" },
      // ... more products
    };
    return productDetails[productId];
  };

  const product = fetchProductDetails(id);

  // If the product is not found, you can render a not found message or redirect to a 404 page
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <nav className="bg-gray-100 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/shop-all">
            <div className="text-gray-700 hover:text-gray-900 cursor-pointer">← Back to Shop All</div>
          </Link>
        </div>
      </nav>

      <main className="flex-grow p-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-pink-800 mb-6">{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-md mb-6"/>
          <p className="text-lg mb-4">{product.description}</p>
          {/* Add more product details here */}
        </div>
      </main>

      <footer className="bg-gray-300 text-black p-4 text-center">
        <p>Premium QTea © 2023</p>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
