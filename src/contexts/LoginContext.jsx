import { createContext, useContext, useState } from "react";

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
    const [auth, setAuth] = useState(true);

    const formSubmit = () => {
        setAuth(true);
    }

    const logOut = () => {
        setAuth(false);
    }
    
    return (
        <LoginContext.Provider value={{ auth, formSubmit, logOut }} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;