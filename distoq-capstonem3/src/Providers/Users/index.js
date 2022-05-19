import { createContext, useContext } from "react";

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