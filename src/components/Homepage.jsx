import { Button } from 'react-bootstrap'

import './styles/homepage.css'
import Logo from './Logo.jsx'
import MountainCss from './MountainCss.jsx'

const Homepage = ({history}) => {
    
    function handleClick(){
        history.push('/')
    }
    return(
        <div className="homepage-content">
            {/* <animated.h1 style={props}>SnowCast</animated.h1> */}
            <div className="homepage-logo">
                <Logo />
            </div>
            <MountainCss />
            <Button onClick={handleClick}>C'mon in</Button>
        </div>
    )
}
export default Homepage