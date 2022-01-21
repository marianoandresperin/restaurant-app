import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
    const [auth, setAuth] = useState(true)

    const formSubmit = (values) => {
        axios({
            method: 'post',
            url: 'http://challenge-react.alkemy.org/',
            data: values
        })
        .then(res => {
            localStorage.setItem('email', values.email)
            localStorage.setItem('token', res.data.token)
            setAuth(true)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const logOut = () => {
        localStorage.clear()
        setAuth(false)
    }
    
    useEffect(() => {
        localStorage.getItem('token') !== null ? setAuth(true) : setAuth(false)
    }, [auth])

    return (
        <LoginContext.Provider value={{ auth, formSubmit, logOut }} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;