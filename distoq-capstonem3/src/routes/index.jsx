import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import LoginPage from "../pages/login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  );
};
export default Routers;
