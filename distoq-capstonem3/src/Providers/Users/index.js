import { createContext, useContext, useState } from "react";


export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("@DEStoq:user")) || {})

    const addUser = (userInfo) => {

        setUser(userInfo)
    }

    return(
        <UserContext.Provider value={{user,addUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=> useContext(UserContext)