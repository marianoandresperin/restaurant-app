import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {
    const [auth, setAuth] = useState(true);
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
                setAuth(true);
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
        setAuth(false);
    }

    useEffect(() => {
        localStorage.getItem('token') !== null ? setAuth(true) : setAuth(false)
    }, [auth])
    
    return (
        <LoginContext.Provider value={{ auth, formSubmit, logOut, logging }} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;