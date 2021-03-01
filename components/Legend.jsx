import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Legend = () => {

    const [showAccidents, setShowAccidents] = useState(false)
    const [showSnowReports, setShowSnowReports] = useState(false)

    return (
        <div className="legend-container">
            <h2>Legend</h2>
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