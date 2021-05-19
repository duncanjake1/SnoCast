import React, { useContext, useEffect, useState } from 'react'
import GoogleMap from 'google-map-react'


import './styles/map.css'

import MapMarker from './MapMarker.jsx'

const url = 'http://127.0.0.1:8000/api/'
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log('error:', error)
//     })



const Map = () => {


    const [reportData, setReportData] = useState(false)

    const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    const location = {
        address: '',
        lat: 45.676998,
        lng: -111.042931,
    }
    const zoomLevel = 6

    // grab data from db
    useEffect(async () => {
        const response = await fetch(url)
            .then(result => result.json())
        setReportData(response)
        console.log(response)
    }, [])


    return (
        <div className="map flex-item">
            <h2 style={{ textAlign: 'center', paddingBottom: '7px' }}>Select location to receive report</h2>

            <div className="map-container">
                <GoogleMap
                    resetBoundsOnResize={true}
                    style={{ maxWidth: '100%', height: '68vh' }}
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >

                    {reportData && reportData.map(report => //data[0] is index for accident reports
                        <MapMarker
                            name={report.Name}
                            date={report.Date}
                            lat={report.Lat}
                            lng={report.Long}
                            description={report.description}
                            pubDate={report.pubDate}
                            color="red"
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    )
}
export default Map;