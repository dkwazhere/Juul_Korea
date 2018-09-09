import React from 'react';
import './Juultech.css';
import { Button } from 'reactstrap';
import Juuldeviceimg from '../../assets/images/juul-device.png';

const Juultech = (props) => {
  return (
    <div className='juultech-container'>
        <div className='juultech-img'><img className='juuldevpic' alt='juuldevpic' src={Juuldeviceimg}></img></div>
        <div className='juultech-side'>
            <h3>Your journey starts here!</h3>
            <a>With its unique satisfaction profile, simple <br/>interface, flavor variety and lack of lingering <br/>smell, JUUL stands out as the vapor alternative.</a><br/><br/>
            <Button color="warning">Shop devices</Button>{' '}
            <Button color="warning">Shop pods</Button>{' '}
        </div>
    </div>
  );
};

export default Juultech;
