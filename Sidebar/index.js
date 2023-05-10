import './index.scss'
import { useState } from 'react'
import LogoB from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/logo-ben.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [showNav, setShownav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShownav(false)}>
                <img src={LogoB} alt="logo" />
                <img className="subtitle-logo" src={LogoSubtitle} alt="Ben" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    exact="true" 
                    activeClassname="active" 
                    to="/"
                    onClick={() => setShownav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeClassname="active" 
                    className="about-Link" 
                    to="/about"
                    onClick={() => setShownav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeClassname="active" 
                    className="portfolio-Link" 
                    to="/portfolio"
                    onClick={() => setShownav(false)}>
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                exact="true" 
                activeClassname="active" 
                className="contact-link" 
                to="/contact"
                onClick={() => setShownav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon 
                    onClick={() => setShownav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className="close-icon" 
                />  
            </nav>
            <ul>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/benjamin-smyth/" 
                        target=" blank" 
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon 
                            icon={faLinkedin} 
                            color='#4d4d4e' 
                            className="anchor-icon"
                        />
                    </a>
                </li>

                <li>
                    <a 
                        href="https://github.com/bsmyth310" 
                        target="blank" 
                        rel="noreferrer" 
                    >   
                        <FontAwesomeIcon 
                            icon={faGithub} 
                            color='#4d4d4e'
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShownav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />                
        </div>
    )    
}

export default Sidebar