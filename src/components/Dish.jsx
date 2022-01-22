const Dish = ({ title, image, cuisine, healthScore, ingredients, vegan, glutenFree, remove, id }) => {

    return (
        <>
            <div className='card col-10 col-md-4 col-lg-2 my-3 my-md-1' >
                <img className='dish-image' src={image} alt={`${title} thumbnail.`}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>Cuisine type: {cuisine[0]}</li>
                    <li className='list-group-item'>Ingredients: {ingredients.map(n => n.name + ', ')}</li>
                    <li className='list-group-item'>HealthScore: {healthScore}</li>

                    {vegan === true ? <li className='list-group-item'>Vegan</li> : null}
                    {glutenFree === true ? <li className='list-group-item'>Gluten Free</li> : null}

                </ul>
                <div className="card-body d-flex flex-row justify-content-evenly">
                    {/* <NavLink to={`/hero/${id}`}> */}
                        <button className="btn btn-primary">Details</button>
                    {/* </NavLink> */}
                    <button id={id} onClick={remove} className="btn btn-danger">Remove</button>
                </div>
            </div>
        </>
    )
}

export default Dish;