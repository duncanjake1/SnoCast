import React, { useContext } from 'react'
import GoogleMap from 'google-map-react'


import './styles/map.css'

import MapMarker from './MapMarker.jsx'
import { MapPinTypeContext } from './MapPinTypeContext.jsx'
import snowReportData from './testDatas/snowReportData.json'
 
const Map = () => {

    const { showAccidents, showSnowConditions } = useContext(MapPinTypeContext)

    const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    const location = {
        address: '',
        lat: 45.676998,
        lng: -111.042931,
      }
    const zoomLevel = 6

   const data = [...snowReportData]

    return (
        <div className="map">
            <h2>Select location to receive report</h2>
    
            <div className="map-container">
                <GoogleMap
                    resetBoundsOnResize={true}
                    style={{ maxWidth: '100%', height: '68vh' }}
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    {showAccidents && data[0].map(report => //data[0] is index for accident reports
                        <MapMarker
                            key={report.id}
                            lat={report.lat}
                            lng={report.lng}
                            source={report.source}
                            url={report.url}
                            imgUrl={report.imgUrl}
                            description={report.description}
                            name={report.title}
                            color="red"
                        />
                    )}
                    {showSnowConditions && data[1].map(report => //data[1] is index for accident reports
                        <MapMarker
                            lat={report.lat}
                            lng={report.lng}
                            source={report.source}
                            url={report.url}
                            imgUrl={report.imgUrl}
                            description={report.description}
                            name={report.title}
                            color="blue"
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    )
}
export default Map;