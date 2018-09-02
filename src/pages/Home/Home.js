import React, { Component } from 'react';
import './Home.css';
import Jumbotron from '../../components/Jumbotron';
import Carousel from '../../components/Carousel';
import Juultech from '../../components/Juultech';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Jumbotron />
                <Carousel />
                <Juultech />
            </div>
        )
    }
}

export default Home;
