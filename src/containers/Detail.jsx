import axios from "axios";
import Dish from "../components/Dish";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useMenu } from "../contexts/MenuContext";
import { useLogin } from "../contexts/LoginContext";

const Detail = () => {
    const { menu, handleRemove, handleAdd, getTotal, getAvg } = useMenu();
    const { auth } = useLogin();
    const navigate = useNavigate();
    const { dishId } = useParams();
    const [detail, setDetail] = useState(null);
    const apiKey = '9afaee5c88ed440485c8cde577fed382'

    const removeDish = ((dish) => {
        let dishById = menu.find(({ id }) => id === parseInt(dish.target.id));
        handleRemove(dishById);
    });

    const addDish = ((dish) => {
        let dishById = [detail].find(({ id }) => id === parseInt(dish.target.id));
        handleAdd(dishById);
    });

    useEffect(() => {
        axios({
            baseURL: 'https://api.spoonacular.com/recipes/',
            url: `${dishId}/information?apiKey=${apiKey}&addRecipeInformation=true&includeNutrition=true`
        })
            .then(snapshot =>
                setDetail(snapshot.data)
            )
            .catch(err =>
                console.log(err)
        )
        if (auth === false) {
            navigate('/login')
         } 
    }, [dishId, auth, navigate]);

    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            {detail && auth === true ? <>
                <div className='container d-flex flex-column flex-md-row justify-content-evenly p-3 result-container'>
                    <Dish key={detail.id}
                        title={detail.title}
                        image={detail.image}
                        prepTime={detail.readyInMinutes}
                        price={detail.pricePerServing}
                        healthScore={detail.healthScore}
                        vegan={detail.vegan}
                        glutenFree={detail.glutenFree}
                        add={addDish}
                        remove={removeDish}
                        id={detail.id}
                        showDetailsBtn={false}
                    />
                    <div className="d-flex flex-column col-md-5 col-lg-7 align-items-center">
                        <h1 className="my-md-5 col-12 detail-title">Menu totals</h1>
                        <div className='card col-12 col-lg-8 d-flex flex-column align-items-center totals-container'>
                            {menu.length > 0 ?
                            <>
                                <h5 className='detail-stats'>{`Total price: $${getTotal('pricePerServing')}`}</h5>
                                <h5 className='detail-stats'>{`Average prep time: ${getAvg('readyInMinutes')} mins`}</h5>
                                <h5 className='detail-stats'>{`Average HealthScore: ${getAvg('healthScore')}`}</h5>
                            </> : <h5>Your menu is empty.</h5>}
                        </div>
                    </div>
                </div>
            </> :
                <div className="d-flex flex-column align-content-center align-items-center">
                    <div className="spinner-border text-success detail-loader" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
        </div>
    )
}

export default Detail;