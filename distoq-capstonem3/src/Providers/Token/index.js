import { createContext, useContext, useState } from "react";

export const TokenContext = createContext("");

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@DEStoq:token")) || ""
  );

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
export const useToken = () => useContext(TokenContext);

