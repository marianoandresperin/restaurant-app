import axios from "axios";
import Dish from "../components/Dish";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useMenu } from "../contexts/MenuContext";

const Detail = () => {
    const { menu, handleRemove, handleAdd } = useMenu();
    const { dishId } = useParams();
    const [detail, setDetail] = useState(null);
    const apiKey = '9afaee5c88ed440485c8cde577fed382'
    // const [added, setAdded] = useState(false);

    const removeDish = ((dish) => {
        let dishById = menu.find(({ id }) => id === parseInt(dish.target.id));
        handleRemove(dishById);
    });

    const addDish = ((dish) => {
        let dishById = detail.find(({ id }) => id === parseInt(dish.target.id));
        handleAdd(dishById);
    });

    useEffect(() => {
        axios({
            baseURL: 'https://api.spoonacular.com/recipes/',
            url: `${dishId}/information?apiKey=${apiKey}&addRecipeInformation=true&includeNutrition=true`
        })
            .then(snapshot =>
                // console.log(snapshot.data)
                setDetail(snapshot.data)
                // console.log(dishId)
            )
            .catch(err =>
                // console.log(err)
                console.log(dishId)
            )
    }, [dishId]);

    console.log(detail)

    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            {detail ? <>
                <div className='container d-flex flex-row flex-wrap justify-content-evenly p-3 result-container'>
                    <Dish key={detail.id} title={detail.title} image={detail.image} calories={detail.nutrition.nutrients[0].amount} healthScore={detail.healthScore} vegan={detail.vegan} glutenFree={detail.glutenFree} add={addDish} remove={removeDish} id={detail.id} />
                </div>
            </> : "Loading"}
        </div>
    )
}

export default Detail;