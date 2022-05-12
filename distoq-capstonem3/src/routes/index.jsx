import { Route, Routes } from "react-router-dom";
import FormRegister from "../components/register-components/form.register";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import LoginPage from "../pages/login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<FormRegister />} />
    </Routes>
  );
};
export default Routers;
