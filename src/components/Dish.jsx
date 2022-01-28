import { faBreadSlice,  faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useMenu } from "../contexts/MenuContext";
import { NavLink } from "react-router-dom";

const Dish = ({ title, image, healthScore, calories, vegan, glutenFree, add, remove, id }) => {
    const { menu } = useMenu();
    const [added, setAdded] = useState(false);

    useEffect(() => {
        if (menu.some((dish) => dish.id === id)) {
            setAdded(true);
        } else {
            setAdded(false);
        }
    }, [menu, id])


    return (
        <>
            <div className='card col-10 col-md-4 col-lg-2 my-3 my-md-1 p-2 dish-container' >
                <img className='dish-image' src={image} alt={`${title} thumbnail.`}/>
                <div className="card-body">
                    <h5 className="card-title dish-title">{title}</h5>
                </div>
                <div className="d-flex flex-row justify-content-around px-2">
                    {vegan === true ? <h5 className="dish-vegan"><FontAwesomeIcon icon={faSeedling} />Vegan</h5> : null}
                    {glutenFree === true ? <h5 className="dish-glutenfree"><FontAwesomeIcon icon={faBreadSlice} />Gluten Free</h5> : null}
                </div>
                <ul className="list-group list-group-flush align-items-center">
                    <li className='list-group-item'>Calories: {calories} kcal</li>
                    <li className='list-group-item'>HealthScore: {healthScore}</li>
                </ul>
                <div className="d-flex flex-row justify-content-evenly align-items-center dish-buttons">
                    <NavLink to={`/dish/${id}`}>
                        <button className="btn btn-primary search-btn">Details</button>
                    </NavLink>
                    {added === true ?
                        <button id={id} onClick={remove} className="btn btn-danger search-btn">Remove</button>
                        : <button id={id} onClick={add} className="btn btn-success search-btn">Add</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Dish;