import React from 'react'

import GoogleMap from 'google-map-react'
 
const Map = () => {

    const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    const location = {
        address: '',
        lat: 45.676998,
        lng: -111.042931,
      }
    const zoomLevel = 6

    return (
        <div className="map">
            <h2>Select location to receive report</h2>
    
            <div className="map-container">
                <GoogleMap
                    resetBoundsOnResize={true}
                    style={{ maxWidth: '1500px', height: '700px' }}
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                </GoogleMap>
            </div>
        </div>
    )
}
export default Map;