import React from 'react'

import Header from'./Header.jsx'
import Info from './Info.jsx'
import Map from './Map.jsx'
import { MapPinTypeContext } from './MapPinTypeContext.jsx'

import './styles/main.css'

const Main = () => {

    return(
        <div className="main-content">
            <Header />
            <MapPinTypeContext.Provider value="I am a peice of react context">
                <Info />
                <Map />
            </MapPinTypeContext.Provider>
        </div>
    )
}
export default Main