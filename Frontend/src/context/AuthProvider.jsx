import React, { createContext, useContext, useState } from 'react'

export const authContext=createContext();

export default function AuthProvider({children}) {
    const initialAuthUSer = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUSer?JSON.parse(initialAuthUSer):undefined
    );
    return(
        <authContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </authContext.Provider>
    );
}
export const useAuth = () => useContext(authContext);
