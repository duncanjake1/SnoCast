import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

    const linkStyle={
        textDecoration: "none"
    }

    return(
        <div className={'navbar-container'}>
            {isMobile ? 
            <Menu 
                right
                width={ 200 }
                isOpen={menuOpen}
                onOpen={() => setMenuOpen(true)}
                onClose={() => setMenuOpen(false)}
            >
                <Link to="/" style={linkStyle}><li><h2>Home</h2></li></Link>
                <Link to="/about" style={linkStyle}><li><h2>About</h2></li></Link>
                <Link to="/donate" style={linkStyle}><li><h2>Donate</h2></li></Link>
                <Link to="/contact" style={linkStyle}><li><h2>Contact Us!</h2></li></Link>
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