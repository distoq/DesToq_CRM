import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@DEStoq:cart")) || []);

  const addCart = (product) => {
    const list = JSON.parse(localStorage.getItem("@DEStoq:cart")) || [];
    list.push(product);
    setCart(list);
    localStorage.setItem("@DEStoq:cart", JSON.stringify(list));
  };

  const deleteCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    
    setCart(newCart);
    localStorage.setItem("@DEStoq:cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};
