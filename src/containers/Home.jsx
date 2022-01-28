import Login from "../components/Login";
import { useLogin } from "../contexts/LoginContext";
import Menu from "./Menu";
    
const Home = () => {
    const { auth } = useLogin();

    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            {auth === true ?
            <Menu />
            : <Login />}
        </div>
    )
}

export default Home;