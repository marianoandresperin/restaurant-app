import axios from "axios";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useMenu } from "../contexts/MenuContext";
import Dish from "../components/Dish";
import { useLogin } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const { menu, handleAdd, handleRemove } = useMenu();
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiKey = '9afaee5c88ed440485c8cde577fed382'
    const { auth } = useLogin();
    const navigate = useNavigate();

    const validateInput = (value) => {
        let error;
        if (!value) {
            error = 'Required!'
        } else if (value.length < 2) {
            error = 'Must be 2 characters or longer';
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
        
    const findDish = async (inputValue) => {
        try {
            setLoading(true);
            await axios({
                baseURL: 'https://api.spoonacular.com/recipes/',
                url: `complexSearch?apiKey=${apiKey}&query=${inputValue}&addRecipeInformation=true&addRecipeNutrition=true&number=24`
            })
            .then(snapshot =>
                setResult(snapshot.data.results)
            )
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (auth === false) {
            navigate('/login');
        }
    }, [auth, navigate]);
    
    return (
        <div className="container-fluid main d-flex flex-column m-0 p-0">
            <div className="container d-flex flex-column">
                <h1 className="m-3 title">Dishfinder</h1>
                <Formik
                onSubmit={values => {
                    findDish(values.input);
                    }}
                    initialValues={{
                        input: ''
                    }}
                >
                {({ errors, touched }) => (
                    <Form className='my-3 d-flex flex-column'>
                        <div className='d-flex flex-row input-group'>
                            <Field name="input" type="text" id="input" validate={validateInput} className='form-control' /> 
                            {loading === true
                                ? <button className="btn btn-success search-btn" type="button" disabled>
                                    <span className="spinner-border" role="status" aria-hidden="true"></span>
                                    <span className="visually-hidden">Loading...</span>
                                </button>
                                : <button type="submit" className='btn btn-success search-btn'>
                                    <FontAwesomeIcon icon={faSearch} size='2x' className='search-icon' />
                                </button>
                            }
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            {errors.input && touched.input ? <div className='form-validation'>{errors.input}</div> : null}
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
            {result && result.length > 0 ? <>
                <div className='container d-flex flex-row flex-wrap justify-content-evenly p-3 result-container'>
                    {result.map(n =>
                        <Dish key={n.id}
                            title={n.title}
                            image={n.image}
                            prepTime={n.readyInMinutes}
                            price={n.pricePerServing}
                            healthScore={n.healthScore}
                            vegan={n.vegan}
                            glutenFree={n.glutenFree}
                            add={addDish}
                            remove={removeDish} 
                            id={n.id} 
                            showDetailsBtn={true}
                        />
                        )} 
                </div>
            </> : result && result.length === 0 ? <h3 className='search-negative'>No results</h3> : null}
        </div> 
    )
}

export default Search;