import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GetCastContext } from './GetCastContext'
import './styles/mapMarker.css'

const MapMarker = (props) => {
    
    const { setCastInfoConditions } = useContext(GetCastContext)
    const { color, name, key } = props;

    function handleClick(){
        setCastInfoConditions({
            url: props.url,
            imgUrl:props.imgUrl,
            title: props.name,
            description: props.description,
            source: props.source
        })
    }

    return(
        <div>
            <Link 
                onClick={handleClick}
                to={'/getCast'}>
                <div className="pin bounce"
                    key={key}
                    style={{backgroundColor: color, cursor: 'pointer'}}
                    title={name}
                />
                <div className="pulse" />
            </Link>
        </div>
    )
}
export default MapMarker