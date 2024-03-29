import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faBars, faClose, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'




const Sidebar = () => {
    
    const [showNav, setShowNav] = useState(false)
    const vrblcolor="#ff370"
    return ( 
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="logo"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#737374' />
            </NavLink>
            <NavLink  onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#737374' />
            </NavLink>
            <NavLink  onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#737374' />
            </NavLink>
            <NavLink  onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faBriefcase} color='#737374' />
            </NavLink>
            <FontAwesomeIcon onClick={()=>setShowNav(false)} icon={faClose} color='#ffd700' size='3x' className='close-icon'/>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/%C3%B6mer-topak-72603a16a/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/omertopak'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            {/* <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/%C3%B6mer-topak-72603a16a/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li> */}
        </ul>
        <FontAwesomeIcon
        onClick={()=>setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon'/>
    </div>)
}

export default Sidebar