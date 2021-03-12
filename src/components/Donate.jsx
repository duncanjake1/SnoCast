import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import DonatePopUp from './DonatePopUp.jsx'

import './styles/donate.css'

const Donate = () => {

    const [donateOpen, setDonateOpen] = useState (false)
    
    function handleClose(closed){
        setDonateOpen(closed)
    }

    return(
        <div className="content-template single-container">
            <div className="content-header">
                <h2>Making and maintaining webistes is hard work</h2>
                <p>But we love it</p>
            </div>
            <div className="inner-div flex-container donate-container">
                <div className="donate-item">
                    <h2>Want to donate to us?</h2>
                    <p>This website is not currently in a useable state, but we are determined
                        to get it there. If you like the goal of this site and feel inclined 
                        to throw us a few bucks, we would really appriciate it!
                    </p>
                    <p>(donation ability is not currently active)</p>
                    <Button onClick={() => setDonateOpen(true)}>Donate to SnoCast</Button>
                </div>
                <div className="donate-item">
                    <h2>Don't want to donate to us?</h2>
                    <p>
                        No worries! But our site relies on a number of
                        other great organizations. Please consider giving 
                        them a donation for all their great work.
                    </p>
                    <ul>
                        <li>National Avalanche Center</li>
                        <li>Montana Snow Report</li>
                        <li>Colorado Avalanche Organization</li>
                    </ul>
                    <Button disabled>Donate to our sources</Button>
                </div>
            </div>
            {donateOpen && <DonatePopUp onClick={handleClose} />}
        </div>

    )
}
export default Donate