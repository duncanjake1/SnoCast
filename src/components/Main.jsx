import React, { useState } from 'react'

import Header from'./Header.jsx'
import Info from './Info.jsx'
import Map from './Map.jsx'
import { MapPinTypeContext } from './MapPinTypeContext.jsx'

import './styles/main.css'

const Main = () => {
    
    const [ showAccidents, setShowAccidents ] = useState(true)
    const [ showSnowConditions, setShowSnowConditions ] = useState(true)

    return(
        <div className="page-template-grid">
            <Header />
            <MapPinTypeContext.Provider value={{showAccidents, setShowAccidents, showSnowConditions, setShowSnowConditions }}> 
                <div className="content-template main-content-grid">
                    <Info />
                    <Map />
                </div>
            </MapPinTypeContext.Provider>
        </div>
    )
}
export default Main