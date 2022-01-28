import { Formik, Form, Field } from 'formik';
import { useLogin } from '../contexts/LoginContext';

const Login = () => {    
    const { formSubmit } = useLogin();

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    function validatePassword(value) {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }
    
    const handleSubmit = (value) => {
        formSubmit(value);
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className='login-title'>Log in</h5>
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
                            {errors.email && touched.email && <div className='validation-text'>{errors.email} </div>}
                        </div>
                        <div className='my-3'>
                            <Field name="password" type="password" placeholder="Password" validate={validatePassword} className="form-control" />
                            {errors.password && touched.password && <div className='validation-text'>{errors.password}</div>}
                        </div>
                        <button type="submit" className='btn btn-success my-3'>Sign in</button>
                    </Form> 
                )}
            </Formik>
        </div>
    )
}

export default Login;