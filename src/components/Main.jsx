import React, { useState } from 'react'

import Header from'./Header.jsx'
import Info from './Info.jsx'
import Map from './Map.jsx'
import { MapPinTypeContext } from './MapPinTypeContext.jsx'

import './styles/main.css'

const Main = () => {
    
    const [ showAccidents, setShowAccidents ] = useState(false)
    const [ showSnowConditions, setShowSnowConditions ] = useState(false)

    return(
        <div className="main-content">
            <Header />
            <MapPinTypeContext.Provider value={{showAccidents, setShowAccidents, showSnowConditions, setShowSnowConditions }}> 
                <Info />
                <Map />
            </MapPinTypeContext.Provider>
        </div>
    )
}
export default Main