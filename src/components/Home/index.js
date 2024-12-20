import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/index';
// import Logo from './Logo';
import Loader from 'react-loaders';

const Home = ( ) => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o','m','e','r']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 4000)
      },[])

    return(
        <>
        <div className="container home-page"> 
            <div className="text-zone">
                <h1><span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>&nbsp;
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
                <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                idx={15}/>
                </h1>
                <h2> Full Stack Developer / ...</h2>
                <Link to="contact" className='flat-button'>CONTACT ME</Link>
            </div>
            {/* <Logo/> */}
            {/* <img
            className="logo-main"
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
        </div>
        <Loader type='line-scale'/>
        </>
    )
}

export default Home