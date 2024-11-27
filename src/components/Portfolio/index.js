import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
// import { getDocs, collection } from 'firebase/firestore';
import portfolioData from '../data/data.json';

const Portfolio = () => { 
    console.log(portfolioData);
    const [letterClass, setLetterClass] = useState('text-animate');
     
    //animasyon letter
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    // console.log(portfolioData);
    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <h2>{port.cover}</h2>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="flex-box">{renderPortfolio(portfolioData.portfolio)}</div>
                <div className="images-container">
            </div>
            </div>
            <Loader type="line-scale" />
        </>
    );
}

export default Portfolio;