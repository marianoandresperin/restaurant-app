import { Link } from "react-router-dom";

const Error = () => {

    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            <div className="container">
                <div className='card col-12 col-md-4 col-lg-2 my-md-1 py-3 px-4 d-flex flex-column align-items-center'>
                    <h1 className="error-title my-3">Error 404: Not found.</h1>
                    <h3 className="error-message my-3">Seems like something went wrong...</h3>
                    <Link to={'/'}>
                        <button className="btn btn-primary home-button my-3" type="button">Go to Homepage</button>
                    </Link>
                </div>
            </div>    
        </div>
    )
}

export default Error;