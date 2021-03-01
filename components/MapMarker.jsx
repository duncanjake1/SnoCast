import React from 'react'
import './styles/mapMarker.css'

const MapMarker = (props) => {
    
    const { color, name, id } = props;

    return(
        <div>
            <div className="pin bounce"
                key={id}
                style={{backgroundColor: color, cursor: 'pointer'}}
                title={name}
            />
            <div className="pulse" />
        </div>
    )
}
export default MapMarker