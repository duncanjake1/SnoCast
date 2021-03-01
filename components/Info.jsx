import React from 'react'

import Legend from './Legend'
import './styles/info.css'

const Info = () => {
    return(
        <div className="info-container">
            <div className="info-text">
                <h2>Welcome!</h2>
                <br/>
                <p>select a search query from the legend, and click on a pin on the map to generate a report!</p>
                <br />
                <p><strong>stay safe out there</strong></p>
                <br />
                <Legend />
            </div>
        </div>
    )
}
export default Info