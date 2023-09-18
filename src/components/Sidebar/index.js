import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoM from '../../assets/images/muskan-logo.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    return <div className='nav-bar'>
        <Link className='logo' to='/'>
          <img src={LogoM} alt="logo" />
          {/* <img className="sub-logo" src={LogoSubtitle} alt="logo" /> */}
          <p> <strong>MUSKAN</strong></p>
        </Link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
               <a target="_blank" rel='noreferrer' href='linkedin.com/in/muskan-kapoor-5b239973'>
               <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a> 
            </li>
            <li>
               <a target="_blank" rel='noreferrer' href='https://github.com/muskan1z'>
               <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a> 
            </li>
            <li>
               <a target="_blank" rel='noreferrer' href='https://github.com/muskan1z'>
               <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a> 
            </li>
            <li>
               <a target="_blank" rel='noreferrer' href='skype:live:.cid.67850ce0acaa753c'>
               <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a> 
            </li>
        </ul>
    </div>
}

export default Sidebar