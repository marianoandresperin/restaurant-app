import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
    const [auth, setAuth] = useState(true);
    const [token, setToken] = useState(undefined);
    const [logging, setLogging] = useState(false);

    const formSubmit = async (values) => {
        try {
            setLogging(true);
            await axios({
                method: 'post',
                url: 'http://challenge-react.alkemy.org/',
                data: values
            })
            .then(res => {
                localStorage.setItem('token', res.data.token);
                setToken(localStorage.getItem('token'));
            })
        }
        catch(err) {
            console.log(err);
            swal("Oops! Something went wrong", `${err}.`, "error", {
                button: "Close",
            });
        }
        finally {
            setLogging(false);
        }
    }

    const logOut = () => {
        localStorage.clear();
        setToken(undefined);
    }
    
    useEffect(() => {
        token ? setAuth(true) : setAuth(false)
    }, [auth, token]);
    
    return (
        <LoginContext.Provider value={{ auth, formSubmit, logOut, logging }} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;