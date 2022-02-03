import { useMenu } from "../contexts/MenuContext";
import Dish from "../components/Dish";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/LoginContext";
import { useEffect } from "react";

const Menu = () => {
    const { menu, handleRemove, getTotal, getAvg } = useMenu();
    const navigate = useNavigate();
    const { auth } = useLogin();

    const removeDish = ((dish) => {
        let dishById = menu.find(({ id }) => id === parseInt(dish.target.id));
        handleRemove(dishById);
    });

    useEffect(() => {
        if (auth === false) {
            navigate('/login')
        }
    }, [auth, navigate]);
    
    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            <div className="container col-12 d-flex flex-column align-items-center">
                {menu && menu.length > 0 ? <>
                    <h1 className="m-3 title">Menu</h1>
                    <div className='container d-flex flex-row flex-wrap justify-content-evenly p-3 result-container'>
                        <div className='card col-12 col-md-4 col-lg-2 my-md-1 p-2 d-flex flex-column align-items-center'>
                            <h5>{`Total price: $${getTotal('pricePerServing')}`}</h5>
                            <h5>{`Average prep time: ${getAvg('readyInMinutes')} mins`}</h5>
                            <h5>{`Average HealthScore: ${getAvg('healthScore')}`}</h5>
                        </div>
                        {menu.map(n =>
                            <Dish key={n.id}
                                title={n.title}
                                image={n.image}
                                prepTime={n.readyInMinutes}
                                price={n.pricePerServing}
                                healthScore={n.healthScore}
                                vegan={n.vegan}
                                glutenFree={n.glutenFree}
                                remove={removeDish}
                                id={n.id}
                                showDetailsBtn={true}
                            />
                        )}
                    </div>
                </> : <>
                    <h3 className='title text-center'>Your menu is empty!</h3>
                    <h5 className='menu-message text-center my-3'>Start adding dishes to your menu</h5>
                    <NavLink to={'/dishfinder'}>
                        <button className="btn btn-primary mt-2">Get started</button>
                    </NavLink></>}
            </div>
        </div>
    )
}

export default Menu;