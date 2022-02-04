import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    return (
        <div className="container-fluid main d-flex flex-column justify-content-center m-0 p-0">
            <div className="container-fluid d-flex flex-column align-items-center">
                <p className='about-paragraph'>
                    👋 Hi, I'm Mariano Perin from Argentina, a Front End Developer trying to land his first job at the tech industry.
                </p>
                <p className='about-paragraph'>
                    😎 I've been passionate about technology since I was a little boy, and just recently started to begin my journey.
                </p>
                <p className='about-paragraph'>
                    🌱 Always open to get acquainted to new technologies, and nurturing my knowledge.
                </p>
                <p className='about-paragraph'>
                    🎈 I'm slowly building a portfolio of my own, while I would love to participate in other projects.
                </p>
                <p className='about-paragraph'>
                    📫 You can reach me on Discord as Mariano#8414, or by sending an e-mail to mariano.perin@live.com.ar.
                </p>
                <ul className="d-flex justify-content-center list-unstyled ">
                    <a href="https://www.linkedin.com/in/marianoperin/" target='_blank' rel='noreferrer'><li className="ms-3"><FontAwesomeIcon icon={faLinkedin} size='3x' className='footer-icons'/></li></a>
                    <a href="https://github.com/marianoandresperin" target='_blank' rel='noreferrer'><li className="ms-3"><FontAwesomeIcon icon={faGithubSquare} size='3x' className='footer-icons'/></li></a>
                </ul>
            </div>
        </div>
    )
}

export default About;