import React, { Component } from 'react';
import './Home.css';
import Jumbotron from '../../components/Jumbotron';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Jumbotron />
            </div>
        )
    }
}

export default Home;
