import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Aboutjumbotron.css';
import Aboutjumbopic from '../../assets/images/aboutjumbopic.jpg';

const Aboutjumbotron = (props) => {
  return (
    <div className='Jumbotron'>
      <Jumbotron>
        <h1 className="display-3">About the Juul</h1>
        <img src={Aboutjumbopic} alt='aboutjumbopic'></img>
      </Jumbotron>
    </div>
  );
};

export default Aboutjumbotron;
