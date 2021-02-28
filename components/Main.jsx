import React from 'react'

import Header from'./Header.jsx'
import Info from './Info.jsx'
import Map from './Map.jsx'

import './styles/main.css'

const Main = () => {

    return(
        <div className="main-content">
            <Header />
            <Info />
            <Map />
            
        </div>
    )
}
export default Main