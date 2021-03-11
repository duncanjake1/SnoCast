import React from 'react'

import Logo from './Logo.jsx'
import Navbar from './Navbar.jsx'
import './styles/header.css'

const Header = () => {

    return(
        <div className="header">
            <div className="main-logo-container">
                <Logo />
            </div>
            <Navbar />
        </div>
    )
}
export default Header