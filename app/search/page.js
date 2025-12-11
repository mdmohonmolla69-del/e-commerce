"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        if (query) {
          const res = await fetch(`/api/add/search?query=${query}`);
          if (res.ok) {
            const data = await res.json();
            setProducts(data);
          }
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="min-h-screen p-8 bg-gray-50 text-black">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Search Results for: <span className="text-blue-600">"{query || "..."}"</span>
      </h1>

      {loading ? (
        <p className="text-center text-gray-500 text-xl">Loading products...</p>
      ) : products.length > 0 ? (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
          {products.map((product) => (
            <Link key={product._id} href={"productd/" + product._id}>
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer border h-full flex flex-col">
                <div className="h-48 w-full overflow-hidden rounded mb-4 bg-gray-200">
                   
                  <img 
                    src={product.img_p} 
                    alt={product.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <h2 className="font-semibold text-lg line-clamp-2 mb-2">{product.title}</h2>
                <div className="mt-auto flex justify-between items-center">
                    <p className="text-green-600 font-bold text-lg">Tk {product.price}</p>
                    
                    <button className="bg-slate-800 text-white px-3 py-1 rounded text-sm">
                        View Details
                    </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-xl">No products found matching "{query}"</p>
        </div>
      )}
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading Search...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;