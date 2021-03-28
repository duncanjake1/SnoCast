import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import Logo from './Logo.jsx'
import './styles/about.css'
import Duncan from './images/duncan.jpg'
import Tom from './images/tom.jpg'

const About = () => {

    const [isHovering, setIsHovering] = useState('')
    const [propsDuncan, setDuncan] = useSpring(() => ({scale: 1, config: {mass: 1, tension: 200, friction: 8}}))
    const [propsTom, setTom] = useSpring(() => ({scale: 1, config: {mass: 1, tension: 200, friction: 8}}))
    const transScale = (s) => `scale(${s})`


    return(
        <div className="content-template single-container">
            <div className="inner-div">
                <Logo />
                <h2 style={{color: "lightgray", paddingBottom: '15px'}}>Making backcountry safety information more accessible than ever</h2>
                <h1 style={{color: 'red'}}>THIS SITE IS UNDER CONSTRUCTION</h1>
                <p style={{color: 'black'}}>(but we have big plans in the works)</p>
                <br />
                <p>Our goal at SnoCast is to make it as easy as possible to digest the latest
                    information on accident reports and snow conditions, so that you can be as safe as
                    possible in the backcountry! <br /> <br />
                    In the finished version of this site, we plan to have a backend database comprised of the latest
                    ski accident and snow conditions information. This information will be accesible to the users by clicking
                    on one of the pins on the homescreen map. The text that was scraped for that specific report will then be ran through
                    a text-to-speech program, essentially turning that report into an easily digestible audio podcast!
                </p>
            </div>
            <div className="flex-container">
                <div className="duncan-bio flex-item">
                    <div className="img-container">
                        <a href="https://github.com/duncanjake1" target="_blank" rel="noreferrer">
                                <animated.img 
                                    onMouseEnter={() => {
                                        setIsHovering('duncan')
                                        setDuncan({scale: 1.25})}}
                                    onMouseLeave={() => {
                                        setIsHovering('')
                                        setDuncan({scale: 1})}}
                                    alt="Duncan in the desert" 
                                    className="mug-shot" 
                                    src={Duncan}
                                    style={{transform: propsDuncan.scale.interpolate(transScale)}}
                                />
                                {(isHovering === 'duncan') && 
                                    <div className="github-text">
                                        <p>check out my github!</p>
                                    </div>
                                }
                        </a>
                    </div>
                    <h2>Duncan Jacobsen</h2>
                    <h3>Frontend Web Designer</h3>
                    {/* <p>about me:</p> */}
                </div>
                <div className="tom-bio">
                    <div className="img-container">
                        <a href="https://github.com/tomchingas" target="_blank" rel="noreferrer">
                            <animated.img 
                                onMouseEnter={() => {
                                    setIsHovering('tom')
                                    setTom({scale: 1.25})}}
                                onMouseLeave={() => {
                                    setIsHovering('')
                                    setTom({scale: 1})}}
                                alt="Tom skiing" 
                                className="mug-shot" 
                                src={Tom} 
                                style={{transform: propsTom.scale.interpolate(transScale)}}
                            />
                            {(isHovering === 'tom') && 
                                <div className="github-text">
                                    <p>check out my github!</p>
                                </div>
                            }
                        </a>
                    </div>
                    <h2>Tom Chingas</h2>
                    <h3>Backend Engineer</h3>
                    {/* <p>about me:</p> */}
                </div>
            </div>
        </div>
    )
}
export default About