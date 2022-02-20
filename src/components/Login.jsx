import { useNavigate } from 'react-router-dom';
import { useLogin } from '../contexts/LoginContext';

const Login = () => {    
    const { auth, formSubmit } = useLogin();
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        formSubmit();
    };

    return ( <>
        {auth === false ?
            <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <h1 className='title'>Log in</h1>
                    <button type="submit" className='col-5 col-md-4 col-lg-2 btn btn-success my-3 login-btn' onClick={handleSubmit}>Sign in</button>
                </div>
            </div>
        : navigate('/') } </>
    )
}

export default Login;