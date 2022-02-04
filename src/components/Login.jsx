import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../contexts/LoginContext';

const Login = () => {    
    const { auth, formSubmit, logging } = useLogin();
    const navigate = useNavigate();

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    };

    function validatePassword(value) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    };
    
    const handleSubmit = (value) => {
        formSubmit(value);
    };

    return ( <>
        {auth === false ?
            <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <h1 className='title'>Log in</h1>
                    <p className='login-hint mb-0'>Email: challenge@alkemy.org</p>
                    <p className='login-hint'>Password: react</p>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className='container col-md-10 col-lg-4 d-flex flex-column'>
                                <div className='my-3'>
                                    <Field name="email" placeholder="Email" validate={validateEmail} className="form-control" />
                                    {errors.email && touched.email && <div className='form-validation'>{errors.email} </div>}
                                </div>
                                <div className='my-3'>
                                    <Field name="password" type="password" placeholder="Password" validate={validatePassword} className="form-control" />
                                    {errors.password && touched.password && <div className='form-validation'>{errors.password}</div>}
                                </div>
                                {logging === true
                                    ? 
                                    <button className="btn btn-success login-btn my-3" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                    :
                                    <button type="submit" className='btn btn-success my-3 login-btn'>Sign in</button>
                                }
                                
                            </Form> 
                        )}
                    </Formik>
                </div>
            </div>
        : navigate('/') } </>
    )
}

export default Login;