import React from 'react'
import './styles/mapMarker.css'

const MapMarker = (props) => {
    
    const { color, name, key } = props;

    return(
        <div>
            <div className="pin bounce"
                key={key}
                style={{backgroundColor: color, cursor: 'pointer'}}
                title={name}
            />
            <div className="pulse" />
        </div>
    )
}
export default MapMarker