import React from 'react'
import GoogleMap from 'google-map-react'


import './styles/map.css'

import MapMarker from './MapMarker.jsx'
import snowReportData from './testDatas/snowReportData.json'
 
const Map = () => {

    const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    const location = {
        address: '',
        lat: 45.676998,
        lng: -111.042931,
      }
    const zoomLevel = 6

   const data = [...snowReportData]
   console.log(data)

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
                    {data[0].map(report => 
                            <MapMarker 
                                lat={report.lat}
                                lng={report.lng}
                                name={report.description}
                                color="red"
                            />
                    )}
                    {data[1].map(report => 
                            <MapMarker 
                                lat={report.lat}
                                lng={report.lng}
                                name={report.description}
                                color="blue"
                            />
                    )}
                    

                    {/* <MapMarker
                        lat={location.lat}
                        lng={location.lng}
                        name="My Marker"
                        color="blue"
                    />
                    <MapMarker
                        lat={46}
                        lng={-112}
                        name="My Marker 2"
                        color="red"
                    /> */}
                </GoogleMap>
            </div>
        </div>
    )
}
export default Map;