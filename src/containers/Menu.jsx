import { useMenu } from "../contexts/MenuContext";
import Dish from "../components/Dish";
import { NavLink } from "react-router-dom";

const Menu = () => {
    const { menu, handleRemove } = useMenu();

    const removeDish = ((dish) => {
        let dishById = menu.find(({ id }) => id === parseInt(dish.target.id));
        handleRemove(dishById);
    });

    const getTotal = (key) => {
        let total = menu.map(dish => dish[`${key}`]);
        return Math.round(total.reduce((a, b) => a + b));
    };

    const getAvg = (key) => {
        let initials = menu.map(dish => dish[`${key}`]);
        let total = initials.reduce((a, b) => a + b);
        return Math.round(total / menu.length);
    };
    
    return (
        <>
            <div className="container col-12 d-flex flex-column align-items-center">
                {menu && menu.length > 0 ? <>
                    <h1 className="m-3 menu-title">Menu</h1>
                    <div className='container d-flex flex-row flex-wrap justify-content-evenly p-3 result-container'>
                        <div className='card col-12 col-md-4 col-lg-2 my-md-1 p-2 d-flex flex-column align-items-center'>
                            <h5>{`Total price: $${getTotal('pricePerServing')}`}</h5>
                            <h5>{`Average prep time: ${getTotal('readyInMinutes')} mins`}</h5>
                            <h5>{`Average HealthScore: ${getAvg('healthScore')}`}</h5>
                        </div>
                        {menu.map(n =>
                            <Dish key={n.id} title={n.title} image={n.image} prepTime={n.readyInMinutes} price={n.pricePerServing} healthScore={n.healthScore} vegan={n.vegan} glutenFree={n.glutenFree} remove={removeDish} id={n.id} />
                        )}
                    </div>
                </> : <><h5 className='menu-message text-center m-3'>Start adding dishes to your menu...</h5>
                    <NavLink to={'/dishfinder'}>
                        <button className="btn btn-primary search-btn m-3">DishFinder</button>
                    </NavLink></>}
            </div>
        </>
    )
}

export default Menu;