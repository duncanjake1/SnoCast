import React from 'react'
import emailjs from 'emailjs-com'
import { Form, Button } from 'react-bootstrap'


const ContactForm = (props) => {

    const SERVICE_KEY = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`
    const TEMPLATE_KEY = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`
    const USER_KEY = `${process.env.REACT_APP_EMAILJS_USER_ID}`

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, e.target, USER_KEY)
        .then((result) => {
            console.log(result)
            console.log(result.text);
        }, (error) =>{
            console.log(error)
            console.log(error.text);
        })
        .then(props.onSubmit(true))// callback to parent component to set state
    }

    return(
        <div>
            <div className="contact-description">
                <h2>We'd love to hear from you!</h2>
                <p>Drop us a line, and we'll get back to you as soon as possible!</p>
            </div>
            <div className="contact-form-container snowcast-bio">
                <Form className="contact-form" onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <br />
                        <Form.Control type="text" placeholder="John Smith" name="from_name"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <br />
                        <Form.Control type="email" placeholder="name@example.com" name="email_address"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <br />
                        <Form.Control type="text" placeholder="Give us the rundown" name="subject"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <br />
                        <Form.Control as="textarea" placeholder="Whats up?" rows={10} style={{width: '80%'}} name="message"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default ContactForm