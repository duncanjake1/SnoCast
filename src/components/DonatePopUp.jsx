import React from 'react'
import { Button, Form } from 'react-bootstrap'

const DonatePopUp = (props) => {

    function handleDonate(){
        console.log('donate clicked!')
    }

    function handleClose(){
        console.log('close the window')
    }

    return(
        <div className="donate-popup">
            <div className="popup-container">
                <div className="popup-header">
                    <h2>Select Donation Amount</h2>
                </div>
                <div className="popup-amounts">
                    <Button>$5</Button>
                    <Button>$10</Button>
                    <Button>$25</Button>
                    <Button>$50</Button>
                    <Button>$100</Button>
                    <Form>
                    <Form.Label>Custom Donation</Form.Label>
                        <Form.Control type="text" placeholder="$ - enter custom amount" />
                    </Form>
                </div>
                <div className="popup-footer">
                    <Button onClick={handleDonate} disabled>Donate</Button>
                    <Button onClick={() => props.onClick(false)}>Close</Button>
                </div>
            </div>
        </div>
    )
}
export default DonatePopUp