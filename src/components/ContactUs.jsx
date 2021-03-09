import React, { useState } from 'react'

import Header from './Header.jsx'
import ContactForm from './ContactForm.jsx'
import './styles/contactUs.css'

const ContactUs = () => {

    const [formSubmitted, setFormSubmitted] = useState(false)

    function handleSubmit(submitted) {
        setFormSubmitted(submitted);
      }

    return(
        <div className="page-template-grid">
            <Header />
            <div className="content-template single-container">
                {formSubmitted ? 
                    <div className="submitted-text snowcast-bio" style={{padding: '15px'}}>
                        <h2>Thanks for the Feedback</h2>
                        <p>We'll get back to you as soon as possible</p>
                    </div>
                    :
                    <ContactForm onSubmit={handleSubmit}/>
                }
            </div>
        </div>
    )
}
export default ContactUs