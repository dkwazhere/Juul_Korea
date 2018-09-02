import React from 'react';
import './Juultech.css';
import Juuldeviceimg from '../../assets/images/juul-device.png';

const Juultech = (props) => {
  return (
    <div className='juultech-container'>
        <img className='juuldevpic' alt='juuldevpic' src={Juuldeviceimg}></img>
        <div className='juultech-side'>Juul img</div>
    </div>
  );
};

export default Juultech;
