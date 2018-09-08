import React from 'react';
import './Juultech.css';
import Juuldeviceimg from '../../assets/images/juul-device.png';

const Juultech = (props) => {
  return (
    <div className='juultech-container'>
        <div className='juultech-img'><img className='juuldevpic' alt='juuldevpic' src={Juuldeviceimg}></img></div>
        <div className='juultech-side'>
        </div>
    </div>
  );
};

export default Juultech;
