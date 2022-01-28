import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useMenu } from "../contexts/MenuContext";
import Dish from "../components/Dish";

const Search = () => {
    const { menu, handleAdd, handleRemove } = useMenu();
    const [result, setResult] = useState(null);
    const apiKey = '9afaee5c88ed440485c8cde577fed382'

    const validateInput = (value) => {
        let error;
        if (!value) {
            error = 'Required!'
        } else if (value <= 2) {
            error = 'Search must be 2 characters or longer';
        }
        return error;
    };

    const addDish = ((dish) => {
        let dishById = result.find(({ id }) => id === parseInt(dish.target.id));
        handleAdd(dishById);
    });

    const removeDish = ((dish) => {
        let dishById = menu.find(({ id }) => id === parseInt(dish.target.id));
        handleRemove(dishById);
    });
        
    const findDish = (inputValue) => {
        axios({
            baseURL: 'https://api.spoonacular.com/recipes/',
            url: `complexSearch?apiKey=${apiKey}&query=${inputValue}&addRecipeInformation=true&addRecipeNutrition=true&number=24`
        })
            .then(snapshot =>
                setResult(snapshot.data.results)
            )
            .catch(err =>
                console.log(err)
            )
    };
    
    return (
        <div className="container-fluid main d-flex flex-column m-0 p-0">
            <div className="container col-12 d-flex flex-column ">
                <h1 className="m-3 search-title">DishFinder</h1>
                <Formik
                onSubmit={values => {
                    findDish(values.input);
                    }}
                    initialValues={{
                        input: ''
                    }}
                >
                {({ errors, touched }) => (
                    <Form className='input-group my-3 d-flex flex-column'>
                        <div className='d-flex flex-row'>
                            <Field name="input" type="text" id="input" validate={validateInput} className='form-control' /> 
                            <button type="submit" className='btn btn-success'>
                                <FontAwesomeIcon icon={faSearch} size='2x' className='search-icon' />
                            </button>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            {errors.input && touched.input ? <div className=''>{errors.input}</div> : null}
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
            {result && result.length > 0 ? <>
                <div className='container d-flex flex-row flex-wrap justify-content-evenly p-3 result-container'>
                    {result.map(n =>
                        <Dish key={n.id} title={n.title} image={n.image} calories={n.nutrition.nutrients[0].amount} healthScore={n.healthScore} vegan={n.vegan} glutenFree={n.glutenFree} add={addDish} remove={removeDish} id={n.id} />
                    )} 
                </div>
            </> : result === undefined ? <h5 className=''>No results</h5> : null}
        </div>
    )
}

export default Search;