import Login from "../components/Login";
import { useLogin } from "../contexts/LoginContext";
import Search from "./Search";

const Home = () => {
    const { auth } = useLogin();

    return (
        <>
            <div className="container-fluid main d-flex justify-content-center m-0 p-0">
                    {auth === true ? <>
                        <div className="container">
                        {/* <Menu /> */}
                        <Search />
                        </div>
                        </>
                        : <div className="container">
                            <Login />
                        </div>
                    }
                </div>
            
        </>
    )
}

export default Home;