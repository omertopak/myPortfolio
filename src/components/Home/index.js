import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';

const Home = ( ) => {
    
    return(
        <div className="container home-page"> 
            <div>
                <h1>Hi<br/> I'm
                <img src={LogoTitle} alt="developer "/>
                omertopak
                <br/>
                </h1>
                <h2>Frontend Developer / Javascript Expert/...</h2>
                <Link to="contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home