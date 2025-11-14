import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Products</h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {products.map((product) => (
          
          <Link key={product.slug} to={`/products/${product.slug}`} className="group">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain object-center p-4 bg-gray-50"
              />
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 truncate">{product.name}</h2>
                <p className="text-2xl font-extrabold text-gray-800 mt-2">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                  View EMI Plans
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}