import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
        <div className="container-fluid pt-4 nav bg-dark">
            <footer className="container col-10 col-md-12 d-flex flex-wrap justify-content-between align-items-center p-md-3 border-top">
                <div className="col-6 col-md-4 d-flex align-items-center">
                    <p className="footer-credits">Designed and developed by Mariano Perin</p>
                </div>
                <ul className="nav col-6 col-md-4 justify-content-end list-unstyled d-flex">
                    <a href="https://www.linkedin.com/in/marianoperin/" target='_blank' rel='noreferrer'><li className="ms-3"><FontAwesomeIcon icon={faLinkedin} size='3x' className='footer-icons'/></li></a>
                    <a href="https://github.com/marianoandresperin" target='_blank' rel='noreferrer'><li className="ms-3"><FontAwesomeIcon icon={faGithubSquare} size='3x' className='footer-icons'/></li></a>
                </ul>
            </footer>
        </div >
        </>
    )
}

export default Footer;