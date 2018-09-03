import React, { Component } from 'react';
import './About.css';
import Aboutjumbotron from '../../components/Aboutjumbotron';
import Juulinfo from '../../components/Juulinfo';

class About extends Component {
    render() {
        return(
            <div className='home'>
                <Aboutjumbotron />
                <Juulinfo />
            </div>
        )
    }
}

export default About;
