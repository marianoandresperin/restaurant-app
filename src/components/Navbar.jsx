import { useLogin } from "../contexts/LoginContext";
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    const { auth, logOut } = useLogin();
    
    const handleLogOut = () => {
        logOut();
    };

    return (
        <nav className="nav bg-dark d-flex flex-row justify-content-around align-items-center navbar">
            <div className="navbar-brand d-flex flex-row">
                <Link to={'/'}>
                    SpoonacularAPI
                </Link>
            </div>
            <ul className="d-flex flex-column list-unstyled flex-lg-row align-items-center">
                <li className="navbar-sections">
                    <Link to={'/menu'}>
                        Menu
                    </Link>
                </li>
                <li className="navbar-sections">
                    <Link to={'/dishfinder'}>
                        Dishfinder
                    </Link>
                </li>
                <li className="navbar-sections">
                    <Link to={'/about'}>
                        About
                    </Link>
                </li>
            </ul>
            {auth === true ? <>
                <div className='d-flex flex-row'>
                    <button type="button" className="btn btn-outline-danger my-3" onClick={handleLogOut}>Sign out</button>
                </div> </> : null}
        </nav>
    )
}

export default Navbar;