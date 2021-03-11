import React, { useState } from 'react'

import Info from './Info.jsx'
import Map from './Map.jsx'
import { MapPinTypeContext } from './MapPinTypeContext.jsx'

import './styles/main.css'

const Main = () => {
    
    const [ showAccidents, setShowAccidents ] = useState(true)
    const [ showSnowConditions, setShowSnowConditions ] = useState(true)

    return(
        <MapPinTypeContext.Provider value={{showAccidents, setShowAccidents, showSnowConditions, setShowSnowConditions }}> 
            <div className="content-template main-content-grid">
                <Info />
                <Map />
            </div>
        </MapPinTypeContext.Provider>
    )
}
export default Main