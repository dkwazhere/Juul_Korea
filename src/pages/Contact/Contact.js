import React, { Component } from 'react';
import './Contact.css';
import Contactform from '../../components/Contactform';

class Contact extends Component {
    render() {
        return(
            <div className='contact'>
                <h1>Contact Us</h1>
                <Contactform />
            </div>
        )
    }
}

export default Contact;
