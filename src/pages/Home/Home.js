import React, { Component } from 'react';
import './Home.css';
import Jumbotron from '../../components/Jumbotron';
import Carousel from '../../components/Carousel';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Jumbotron />
                <Carousel />
            </div>
        )
    }
}

export default Home;
