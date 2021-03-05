import React,{ useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

const TestPage = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <div>
            <Menu
                className='.burger-button'
                right
                width={ 280 }
                isOpen={menuOpen}
                onOpen={() => setMenuOpen(true)}
                onClose={() => setMenuOpen(false)}
                style={{zIndex: 5}}
            >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a className="menu-item--small" href="">Settings</a>
            </Menu>
        </div> 
    )
}
export default TestPage