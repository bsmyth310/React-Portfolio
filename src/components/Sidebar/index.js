import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoB from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/logo-ben.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    <div className='nav-bar'>
        <link className='logo' to='/'>
            <img src={LogoB} alt="logo" />
            <img className="subtitle-logo" src={LogoSubtitle} alt="Ben" />
        </link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="about-Link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target=" blank" rel="noreferrer" href="https://www.linkedin.com/in/benjamin-smyth/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target=" blank" rel="noreferrer" href="https://github.com/bsmyth310">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
}

export default Sidebar