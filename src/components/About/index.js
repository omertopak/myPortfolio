import { useEffect, useState } from 'react'
import {
  faAngular,
  faBootstrap,
  faCss3,
  faDochub,
  faDocker,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import postman from '../../assets/images/Postman.png'
import mongo from '../../assets/images/mongo.png'
import express from '../../assets/images/Expressjs.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#EC4D28" />
            </div>
          </div>
        </div> */}
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#68A063" />
            </div>
            <div className="face2">
              {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
              <img src={postman} width="140px"/>
            </div>
            <div className="face3">
              {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
              <img src={mongo} width="130px"/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDocker} color="#5ED4F4" />
            </div>
            <div className="face5">
            <img src={express} width="140px"/>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
