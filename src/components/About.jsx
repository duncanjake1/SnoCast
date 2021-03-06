import React from 'react'

import Header from './Header.jsx'
import './styles/about.css'
import Duncan from './images/duncan.jpg'
import Tom from './images/tom.jpg'

const About = () => {
    return(
        <div className="page-template-grid">
            <Header />
            <div className="content-template single-container">
                <img alt="Duncan in the desert" className="mug-shot" src={Duncan}/>
                <img alt="zooTom skiing" className="mug-shot" src={Tom} />
            </div>
        </div>
    )
}
export default About