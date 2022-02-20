import { useLogin } from "../contexts/LoginContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const { auth, logOut } = useLogin();
    const [hamburger, setHamburger] = useState('navbar-hamburger');
    const [navUl, setNavUl] = useState('navbar-ul');
    
    const handleHamburger = () => {
        hamburger === 'navbar-hamburger navbar-active' ? setHamburger('navbar-hamburger') : setHamburger('navbar-hamburger navbar-active');
        navUl === 'navbar-ul navbar-active' ? setNavUl('navbar-ul') : setNavUl('navbar-ul navbar-active');
    }

    const hideOnClick = () => {
        setHamburger('navbar-hamburger');
        setNavUl('navbar-ul');
    }


    const handleLogOut = () => {
        logOut();
    };

    return (
        <nav className="d-flex flex-row justify-content-between justify-content-md-around align-items-center navbar-container bg-dark">
            <Link className="navbar-logo navbar-links d-flex flex-row justify-content-md-center" onClick={hideOnClick} to={'/'}>
                SpoonacularAPI
            </Link>
            <ul className={navUl}>
                <Link className="navbar-text navbar-links p-0" to={'/menu'}>
                    <li className="navbar-li" onClick={hideOnClick}>
                        Menu
                    </li>
                </Link>
                <Link className="navbar-text navbar-links p-0" to={'/dishfinder'}>
                    <li className="navbar-li" onClick={hideOnClick}>
                        Dishfinder
                    </li>
                </Link>
                <Link className="navbar-text navbar-links p-0" to={'/about'}>
                    <li className="navbar-li" onClick={hideOnClick}>
                        About
                    </li>
                </Link>
                <div className="d-flex navbar-button-container justify-content-center">
                    <li className="navbar-li" onClick={hideOnClick}>
                        {auth === true ?
                            <button type="button" className="btn btn-danger navbar-button" onClick={handleLogOut}>Sign out</button>
                            : <Link to={'/login'}>
                                <button type="button" className="btn btn-primary navbar-button" onClick={hideOnClick}>Sign in</button>
                            </Link>}
                    </li>
                </div>
            </ul>
            <div className={hamburger} onClick={handleHamburger}>
                <span className='navbar-bar' onClick={handleHamburger}></span>
                <span className='navbar-bar' onClick={handleHamburger}></span>
                <span className='navbar-bar' onClick={handleHamburger}></span>
            </div>
        </nav>
    )
}

export default Navbar;