import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Podpricejumbotron.css';

const Podpricejumbotron = (props) => {
  return (
  <div className='pod-intro'>
    <a className='pod-title'>JuulPods</a>
    <a className='pod-price'>$15.99</a><br/>
    <a className='pod-quantity'>Each pack contains 4 pods</a>
  </div>
  );
};

export default Podpricejumbotron;
