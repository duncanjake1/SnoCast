import React from 'react'
import { Link } from 'react-router-dom'
import './styles/mapMarker.css'

const MapMarker = (props) => {
    
    const { color, name, key } = props;

    return(
        <Link to="/getCast">
            <div>
                <div className="pin bounce"
                    key={key}
                    style={{backgroundColor: color, cursor: 'pointer'}}
                    title={name}
                />
                <div className="pulse" />
            </div>
        </Link>
    )
}
export default MapMarker