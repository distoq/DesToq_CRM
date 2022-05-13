import { createContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../dataBase/db";

export const TokenContext = createContext("");

const TokenProvider = ({ children }) => {

  const [tokenUser, setTokenUser] = useState( JSON.parse(localStorage.getItem("@DEStoq:token")) || '');
  useEffect(()=>{
    setTokenUser(JSON.parse(localStorage.getItem("@DEStoq:token")))
  },[])

  console.log(tokenUser)

  

  return (
    <TokenContext.Provider value={{ tokenUser,setTokenUser}}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
