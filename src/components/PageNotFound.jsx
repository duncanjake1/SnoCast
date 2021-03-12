import { Button } from 'react-bootstrap'

import './styles/pageNotFound.css'
import MountainCss from './MountainCss.jsx'

const Homepage = ({history}) => {
    
    function handleClick(){
        history.push('/')
    }
    return(
        <div className="pnf-content">
            <div className="pnf-text">
                <h1>404</h1>
                <p>Couldn't quite find what you're looking for...</p>
            </div>
            <MountainCss />
            <Button onClick={handleClick}>Go Home?</Button>
        </div>
    )
}
export default Homepage