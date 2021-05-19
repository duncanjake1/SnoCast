import React, { useState } from 'react'

import Info from './Info.jsx'
import Map from './Map.jsx'

import './styles/main.css'

const Main = () => {


    return (
        <div className="content-template main-content-grid">
            <Info />
            <Map />
        </div>
    )
}
export default Main