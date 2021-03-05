import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Logo from './Logo.jsx'
import Navbar from './Navbar.jsx'
import './styles/header.css'

const Header = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

    return(
        <div className="header">
            <div className="main-logo-container">
                {isMobile ? 
                <Logo />
                :
                <Link to="/home" style={{textDecoration: 'none'}}>
                    <Logo />
                </Link>}

            </div>
            <Navbar />
        </div>
    )
}
export default Header