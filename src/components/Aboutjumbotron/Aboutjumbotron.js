import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Aboutjumbotron.css';
import Aboutjumbopic from '../../assets/images/aboutjumbopic.jpg';

const Aboutjumbotron = (props) => {
  return (
    <div className='Jumbotron'>
      <Jumbotron>
        <h1 className="display-3">Juul Technology</h1>
        <img src={Aboutjumbopic} alt='aboutjumbopic'></img>
      </Jumbotron>
      <div className='about-intro'>JUUL Labs was founded with the goal of improving the lives of the world’s one billion adult smokers by providing them with an easy to use vapor alternative to combustible cigarettes, containing a similar level of nicotine to make switching as easy as possible.</div>
    </div>
  );
};

export default Aboutjumbotron;
