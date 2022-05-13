import { createContext, useContext, useState } from "react";

export const dashboardPageControllerContext = createContext();

export const DashboardPageControllerProvider = ({ children }) => {
  const [activeDashboardPage, setActiveDashboarPage] = useState("Dashboard");

  return (
    <dashboardPageControllerContext.Provider
      value={{ activeDashboardPage, setActiveDashboarPage }}
    >
      {children}
    </dashboardPageControllerContext.Provider>
  );
};

export const useActivePage = () => useContext(dashboardPageControllerContext);
