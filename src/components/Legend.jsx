import React, { useState, useContext } from 'react'
import { Form } from 'react-bootstrap'

import { MapPinTypeContext } from './MapPinTypeContext.jsx'

const Legend = () => {

    const { showAccidents, setShowAccidents, showSnowConditions, setShowSnowConditions } = useContext(MapPinTypeContext)

    return (
        <div className="legend-container">
            <h2>Legend</h2>
            <p>What do you want to see?</p>
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
                    checked={showSnowConditions}
                    onClick={() => setShowSnowConditions(!showSnowConditions)}
                    readOnly
                    label='Show Snow Conditions'
                />
            </Form>
            <br />
        </div>
    )
}
export default Legend