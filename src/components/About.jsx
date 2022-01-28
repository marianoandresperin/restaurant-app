import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            <div className="container-fluid d-flex flex-column align-items-center">

                <h1>About</h1>
                <ul className="d-flex justify-content-center list-unstyled ">
                    <a href="https://www.linkedin.com/in/marianoperin/" target='_blank' rel='noreferrer'><li className="ms-3"><FontAwesomeIcon icon={faLinkedin} size='3x' className='footer-icons'/></li></a>
                    <a href="https://github.com/marianoandresperin" target='_blank' rel='noreferrer'><li className="ms-3"><FontAwesomeIcon icon={faGithubSquare} size='3x' className='footer-icons'/></li></a>
                </ul>

            </div >
        </div>
    )
}

export default About;