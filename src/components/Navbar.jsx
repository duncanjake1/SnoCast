import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    const linkStyle={
        textDecoration: "none"
    }

    return(
        <div className={`navbar-container ${isMobile && '.burger-button'}`}>
            {isMobile ? 
            <Menu 
                isOpen={menuOpen}
                onOpen={() => setMenuOpen(true)}
                onClose={() => setMenuOpen(false)}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a className="menu-item--small" href="">Settings</a>
            </Menu>
            :
            <ul>
                <Link to="/" style={linkStyle}><li><h2>Home</h2></li></Link>
                <Link to="/about" style={linkStyle}><li><h2>About</h2></li></Link>
                <Link to="/donate" style={linkStyle}><li><h2>Donate</h2></li></Link>
                <Link to="/contact" style={linkStyle}><li><h2>Contact Us!</h2></li></Link>
            </ul>}
        </div>
    )
}
export default Navbar