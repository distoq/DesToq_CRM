import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";


export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const userLogin = JSON.parse(localStorage.getItem("@DEStoq:user"));


  

    
    return(
        <UserContext.Provider value={{userLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=> useContext(UserContext)