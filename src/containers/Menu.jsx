import { useMenu } from "../contexts/MenuContext";
import Dish from "../components/Dish";

const Menu = () => {
    const { menu, handleRemove } = useMenu();

    const removeDish = ((dish) => {
        let dishById = menu.find(({ id }) => id === parseInt(dish.target.id));
        handleRemove(dishById);
    });
    
    return (
        <>
            <div className="container col-12 d-flex flex-column align-items-center">
                <h1 className="m-3 menu-title">Menu</h1>
                {menu && menu.length > 0 ? <>
                    <div className='container d-flex flex-row flex-wrap justify-content-evenly p-3 result-container'>
                        {menu.map(n =>
                            <Dish key={n.id} title={n.title} image={n.image} type={n.dishTypes} cuisines={n.cuisines} calories={n.nutrition.nutrients[0].amount} healthScore={n.healthScore} vegan={n.vegan} glutenFree={n.glutenFree} remove={removeDish} id={n.id} />
                        )}
                    </div>
                </> : <h5 className=''>Start adding dishes to your menu...</h5>}
            </div>
        </>
    )
}

export default Menu;