import { useLogin } from "../contexts/LoginContext";

const Navbar = () => {
    const { auth, logOut } = useLogin();
    
    const handleLogOut = () => {
        logOut();
    }

    const sections = [
        { section: 'Menu' },
        { section: 'DishFinder' },
        { section: 'About'}
    ]

    return (
        <nav className="nav bg-dark d-flex flex-row justify-content-around align-items-center navbar">
            <div className="navbar-brand">
                
                    <p>SpoonacularAPI</p>
                
            </div>
            <ul className="d-flex flex-column list-unstyled flex-lg-row">
                {sections.map((n) => (
                    <li key={n.section} className="navbar-sections" >
                        
                            {n.section}
                        
                    </li>
                ))}
            </ul>
            {auth === true ? <>
                <div className='d-flex flex-row'>
                    <button type="button" className="btn btn-outline-danger my-3" onClick={handleLogOut}>Sign out</button>
                </div> </> : null}
        </nav>
    )
}

export default Navbar;