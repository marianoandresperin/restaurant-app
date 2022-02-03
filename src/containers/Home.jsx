import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/LoginContext";
    
const Home = () => {
    const { auth } = useLogin();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth === false) {
            navigate('/login')
        }
    }, [auth, navigate]);

    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            <div className="container">
                <div className='card col-12 col-md-4 col-lg-2 my-md-1 p-2 d-flex flex-column align-items-center'>
                    <h3>Welcome to the SpoonacularAPI!</h3>
                    <p>This is a small project where you can create your own customized menu by adding some of your all-time favourite dishes.</p>
                    <p>You can add up to 4 different dishes.</p>
                    <p>Two of them must be <span className="dish-vegan">vegan</span>.</p>
                    <Link to={'/dishfinder'}>
                        <button className="btn btn-primary my-3" type="button">Get started!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;