import React, { Component } from 'react';
import './Contact.css';
import Contactform from '../../components/Contactform';

class Contact extends Component {
    render() {
        return(
            <div className='contact'>
                <Contactform />
            </div>
        )
    }
}

export default Contact;
