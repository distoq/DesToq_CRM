import { createContext, useContext, useState } from "react";
import { AiFillBank, AiOutlineDropbox } from "react-icons/ai";
import {
  FaBoxes,
  FaFileInvoiceDollar,
  FaHamburger,
  FaOpencart,
} from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

export const dashboardPageControllerContext = createContext();

export const DashboardPageControllerProvider = ({ children }) => {
  const [activeDashboardPage, setActiveDashboarPage] = useState("Dashboard");

  const handleIcons = (value) => {
    switch (value) {
      case "Dashboard":
        return <MdDashboard />;
      case "Pedidos":
        return <FaFileInvoiceDollar />;

      case "Fornecedores":
        return <GiFactory />;

      case "Insumos":
        return <AiOutlineDropbox />;

      case "Compras":
        return <FaOpencart />;

      case "Produtos":
        return <FaHamburger />;

      case "Estoque":
        return <FaBoxes />;

      case "Financeiro":
        return <AiFillBank />;

      default:
        break;
    }
  };

  const options = [
    "Dashboard",
    "Pedidos",
    "Fornecedores",
    "Insumos",
    "Compras",
    "Produtos",
    "Estoque",
    "Financeiro",
  ];

  return (
    <dashboardPageControllerContext.Provider
      value={{
        activeDashboardPage,
        setActiveDashboarPage,
        handleIcons,
        options,
      }}
    >
      {children}
    </dashboardPageControllerContext.Provider>
  );
};

export const useActivePage = () => useContext(dashboardPageControllerContext);
