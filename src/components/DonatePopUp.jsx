import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {Elements, CardElement} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const DonatePopUp = (props) => {

    const [donationAmount, setDonationAmount] = useState()
    const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`)

    function handleClick(value){
        setDonationAmount(value)
    }

    return(
        <div className="donate-popup">
            <div className="popup-container">
                <div className="popup-header">
                    <h2>Select Donation Amount</h2>
                </div>
                <Elements stripe={stripePromise}>
                    <div className="popup-amounts">
                        <Button onClick={() => handleClick(5)}>$5</Button>
                        <Button onClick={() => handleClick(10)}>$10</Button>
                        <Button onClick={() => handleClick(25)}>$25</Button>
                        <Button onClick={() => handleClick(50)}>$50</Button>
                        <Button onClick={() => handleClick(100)}>$100</Button>
                        <Form>
                        <Form.Label>Custom Donation</Form.Label>
                            <Form.Control 
                                onChange={e => setDonationAmount(e.target.value)} 
                                value={donationAmount} 
                                type="number" 
                                min="0.00" 
                                max="10000.00" 
                                step="0.01"
                                placeholder="$ - enter custom amount" 
                            />
                        </Form>
                        <Form>
                            <Form.Label>
                                <CardElement
                                    options={{
                                        style: {
                                        base: {
                                            fontSize: '16px',
                                            color: 'black',
                                            '::placeholder': {
                                            color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                        },
                                    }}
                                />
                            </Form.Label>
                        </Form>
                        
                    </div>
                    <div className="popup-footer">
                        <Button onClick={() => console.log('donated')} disabled={!donationAmount}>
                            Donate{donationAmount && ` $${donationAmount}`}
                        </Button>
                        <Button onClick={() => props.onClick(false)}>Close</Button>
                    </div>
                </Elements>
            </div>
        </div>
    )
}
export default DonatePopUp