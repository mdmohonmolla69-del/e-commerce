"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("shopico_cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shopico_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);
    if (exist) {
      setCart(cart.map((item) =>
        item._id === product._id ? { ...exist, qty: (exist.qty || 1) + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    toast.success('Cart to product susccess!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item._id !== id);
    setCart(newCart);
  };

  const increaseQty = (id) => {
    setCart(cart.map((item) =>
      item._id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map((item) => {
      if (item._id === id) {
        return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
      }
      return item;
    }));
  };

  return (
    <div>
      
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}

export function useCart() {
  return useContext(CartContext);
}