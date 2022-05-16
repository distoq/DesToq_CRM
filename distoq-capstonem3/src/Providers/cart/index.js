import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    product.uniqueId = uuidv4();
    const list = JSON.parse(localStorage.getItem("@DEStoq:cart")) || [];

    list.push(product);
    setCart(list);
    console.log("list dentro do addCart", list);
    localStorage.setItem("@DEStoq:cart", JSON.stringify(list));
  };

  const deleteCart = (id) => {
    const newCart = cart.filter((item) => item.uniqueId !== id);
    setCart(newCart);
    localStorage.setItem("@DEStoq:cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};
