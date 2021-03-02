import React, { useState, useContext } from 'react'
import { Form } from 'react-bootstrap'

import { MapPinTypeContext } from './MapPinTypeContext.jsx'

const Legend = () => {

    const [showAccidents, setShowAccidents] = useState(true)
    const [showSnowReports, setShowSnowReports] = useState(true)

    const showReports = useContext(MapPinTypeContext)

    return (
        <div className="legend-container">
            <h2>Legend</h2>
            <p>{showReports}</p>
            <br />
            <Form>
                <Form.Check
                    custom
                    type='checkbox'
                    checked={showAccidents}
                    onClick={() => setShowAccidents(!showAccidents)}
                    readOnly
                    label='Show Accidents'
                />
                <Form.Check
                    custom
                    type='checkbox'
                    checked={showSnowReports}
                    onClick={() => setShowSnowReports(!showSnowReports)}
                    readOnly
                    label='Show Snow Conditions'
                />
            </Form>
            <br />
            <p>Show me {(!showAccidents && !showSnowReports) && '...'}<br /> {showAccidents && 'accident reports'} {(showAccidents && showSnowReports) && <br />} {showSnowReports && 'snow reports'}</p>

        </div>
    )
}
export default Legend