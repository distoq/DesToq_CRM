import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Rotas;
