import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EmiOption from '../components/EmiOption';

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${slug}`);
        if (!res.ok) {
          throw new Error('Product not found');
        }
        const data = await res.json();
        setProduct(data);
        if (data.emiPlans && data.emiPlans.length > 0) {
          setSelectedPlanId(data.emiPlans[0]._id);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!product) {
    return null;
  }

  // Helper to get color class
  const getFinishColor = (finish) => {
    switch (finish.toLowerCase()) {
      case 'orange': return 'bg-orange-400';
      case 'blue titanium': return 'bg-blue-800';
      case 'natural titanium': return 'bg-gray-400';
      case 'grey': return 'bg-gray-500';
      case 'black': return 'bg-gray-900';
      case 'violet': return 'bg-purple-600';
      case 'obsidian': return 'bg-black';
      case 'porcelain': return 'bg-gray-100';
      default: return 'bg-gray-200 border border-gray-300';
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 sm:p-8 flex items-center justify-center relative">
      
      <Link 
        to="/" 
        className="absolute top-4 left-4 sm:top-8 sm:left-8 text-blue-600 hover:text-blue-800 transition-colors flex items-center group"
      >
        <span className="text-2xl mr-2 transition-transform group-hover:-translate-x-1">&larr;</span>
        <span className="font-medium">Back to products</span>
      </Link>
      
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden mt-12 sm:mt-0">

        {/* --- LEFT COLUMN --- */}
        <div className="p-6 sm:p-8 flex flex-col bg-gray-50">
          
          <div className="mb-4">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              NEW
            </span>
            
            {(() => {
              const nameParts = product.name.match(/(.*) (\d+GB)$/);
              if (nameParts) {
                return (
                  <>
                    <h1 className="text-3xl font-bold text-gray-900 mt-2">{nameParts[1]}</h1>
                    <h2 className="text-2xl text-gray-700">{nameParts[2]}</h2>
                  </>
                );
              }
              return <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>;
            })()}
          </div>
          
          <img
            src={product.image}
            alt={product.name}
            className="max-w-sm w-full object-contain my-8 mx-auto"
          />
          
          <div className="self-start w-full mt-auto">
            <p className="text-gray-600 text-sm">Available in {product.finishes.length} finishes</p>
            <div className="flex space-x-2 mt-2">
              {product.finishes.map((finish) => (
                <div
                  key={finish}
                  className={`w-6 h-6 rounded-full border border-gray-300 ${getFinishColor(finish)}`}
                  title={finish}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="flex flex-col space-y-4 p-6 sm:p-8">
          
          <div className="flex items-baseline space-x-3">
            <span className="text-4xl font-extrabold text-gray-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <span className="text-2xl text-gray-500 line-through">
              ₹{product.mrp.toLocaleString('en-IN')}
            </span>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-800 pt-4">
            EMI plans backed by mutual funds
          </h2>
          
          <div className="flex flex-col space-y-3">
            {product.emiPlans.map((plan) => (
              <EmiOption
                key={plan._id}
                plan={plan}
                isSelected={selectedPlanId === plan._id}
                onSelect={() => setSelectedPlanId(plan._id)}
              />
            ))}
          </div>
          
          <button className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-700 transition-colors mt-4">
            Proceed with selected plan
          </button>
        </div>
        
      </div>
    </div>
  );
}