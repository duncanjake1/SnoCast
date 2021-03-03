import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo.jsx'
import Navbar from './Navbar.jsx'
import './styles/header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="main-logo-container">
                <Link to="/home" style={{textDecoration: 'none'}}>
                    <Logo />
                </Link>
            </div>
            <Navbar />
        </div>
    )
}
export default Header