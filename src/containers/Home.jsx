import Login from "../components/Login";
import { useLogin } from "../contexts/LoginContext";

const Home = () => {
    const { auth } = useLogin();

    return (
        <>
            <div className="container-fluid main d-flex justify-content-center align-items-center">
                    {auth === true ? <>
                        <div className="">
                        {/* <Menu /> */}
                        MENU
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