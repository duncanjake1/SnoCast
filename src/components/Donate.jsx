import React from 'react'
import { Button } from 'react-bootstrap'

import './styles/donate.css'

const Donate = () => {

    return(
        <div className="content-template single-container">
            <div className="content-header">
                <h2>Making and maintaining webistes is hard work</h2>
                <p>But we love it</p>
            </div>
            <div className="inner-div ">
                <div className="donate-snocast">
                    <p>This website is not currently in a useable state, but we are determined
                        to get it there. If you like the goal of this site and feel inclined 
                        to throw us a few bucks, we would really appriciate it!
                    </p>
                    <p>(donation ability is not currently active)</p>
                    <Button disabled>Donate to SnoCast</Button>
                </div>
                <div className="donate-source">

                </div>
            </div>
        </div>

    )
}
export default Donate