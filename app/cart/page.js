"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const [total, setTotal] = useState(0);

  const clearCartData = () => {
    localStorage.removeItem("shopico_cart");
    window.location.reload();
  };

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      const priceString = item.price ? String(item.price).replace(/[^0-9.]/g, "") : "0";
      const priceNumber = parseFloat(priceString) || 0;
      return acc + (priceNumber * (item.qty || 1));
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <div className="container mx-auto p-5 mb-20">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>

        {cart.length > 0 && (
          <button
            onClick={clearCartData}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm font-bold"
          >
            Reset Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded">
          <p className="text-xl text-gray-500 mb-4">Your cart is empty.</p>
          <Link href="/allproductlist" className="bg-slate-800 text-white px-6 py-2 rounded">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">

          <div className="md:w-3/4">
            {cart.map((item, index) => (
              <div key={item._id || index} className="flex flex-col sm:flex-row justify-between items-center border p-4 mb-4 rounded shadow-sm bg-white gap-4">

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {item.img_p ? (
                    <img src={item.img_p} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">No Image</div>
                  )}

                  <div>
                    <h2 className="text-lg font-bold">{item.title || "Unknown Product"}</h2>
                    <p className="text-gray-600">Unit Price: ৳{item.price || 0}</p>
                  </div>
                </div>

                <div className="flex items-center border rounded overflow-hidden">
                  <button
                    onClick={() => decreaseQty(item._id)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 font-bold bg-white">{item.qty || 1}</span>
                  <button
                    onClick={() => increaseQty(item._id)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold text-gray-700 hidden sm:block">
                    ৳{(parseFloat(String(item.price || 0).replace(/[^0-9.]/g, "")) * (item.qty || 1)).toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 border border-red-200 p-2 rounded hover:bg-red-50"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="md:w-1/4 h-fit border p-5 rounded shadow bg-gray-50 sticky top-5">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-4 font-bold text-lg border-t pt-2">
              <span>Total:</span>
              <span>৳{total.toLocaleString()}</span>
            </div>
            <Link href="/checkout"><button
              className="w-full bg-slate-800 text-white py-3 rounded font-bold hover:bg-slate--700"
            >
              Proceed to Checkout
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;