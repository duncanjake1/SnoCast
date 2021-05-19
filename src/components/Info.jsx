import React from 'react'

import './styles/info.css'

const Info = () => {
    return (
        <div className="info-container flex-item">
            <div className="info-text flex-container" style={{ flexDirection: 'column' }}>
                <div className='inner-div flex-item'>
                    <h2 style={{ color: 'red' }}>THIS SITE IS UNDER CONSTRUCTION</h2>
                    <p>please check out our 'About' page to see what's in the works!</p>
                </div>
                <div className="inner-div flex-item">
                    <h2 id="info-header">Welcome!</h2>
                </div>
                <div id="info-description" className="inner-div">
                    <p>Each pin on the map represents a ski accident. Click on a pin to generate an audio report on the accident</p>
                    <br />
                    <p><strong>stay safe out there</strong></p>
                </div>
            </div>
        </div>
    )
}
export default Info