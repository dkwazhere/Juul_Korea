import React, { Component } from 'react';
import './About.css';
import Aboutjumbotron from '../../components/Aboutjumbotron';

class About extends Component {
    render() {
        return(
            <div className='home'>
                <Aboutjumbotron />
            </div>
        )
    }
}

export default About;
