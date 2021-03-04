import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

   const linkStyle = {
       textDecoration: 'none',
   }

    return(
        <div className="navbar-container">
            <ul>
                <Link to="/" style={linkStyle}><li><h2>Home</h2></li></Link>
                <Link to="/about" style={linkStyle}><li><h2>About</h2></li></Link>
                <Link to="/donate" style={linkStyle}><li><h2>Donate</h2></li></Link>
                <Link to="/contact" style={linkStyle}><li><h2>Contact Us!</h2></li></Link>
            </ul>
        </div>
    )
}
export default Navbar