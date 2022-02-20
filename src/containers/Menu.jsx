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
            navigate('/login');
            console.log('reloaded')
        }
    }, [auth, navigate]);
    
    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            <div className="container col-12 d-flex flex-column align-items-center">
                {menu && menu.length > 0 ? <>
                    <h1 className="m-3 title">Menu</h1>
                    <div className='container d-flex flex-row flex-wrap justify-content-between justify-content-lg-between p-3 result-container'>
                        <div className="col-lg-12 d-lg-flex justify-content-lg-center">
                            <div className='card col-12 col-lg-5 my-md-3 p-2 d-flex flex-column align-items-center'>
                                <h5 className="dish-stats">{`Total price: $${getTotal('pricePerServing')}`}</h5>
                                <h5 className="dish-stats">{`Average prep time: ${getAvg('readyInMinutes')} mins`}</h5>
                                <h5 className="dish-stats">{`Average HealthScore: ${getAvg('healthScore')}`}</h5>
                            </div>
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
                    <p className='menu-message text-center my-3'>Start adding dishes to your menu</p>
                    <NavLink to={'/dishfinder'}>
                        <button className="btn btn-primary mt-2 home-button">Get started</button>
                    </NavLink></>}
            </div>
        </div>
    )
}

export default Menu;