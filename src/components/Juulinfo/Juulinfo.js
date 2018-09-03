import React from 'react';
import './Juulinfo.css';
import Juuldevicepic from '../../assets/images/juul-device-pic.png';

const Juulinfo = (props) => {
  return (
    <div className='juul-info'>
        <div className='juul-device-info'>
            <h5>What is a Juul device?</h5>
            <a>JUUL uses an heating mechanism that creates <br/> an aerosol and is engineered to minimize combustion. <br/><br/></a>
            <a>JUUL is a closed system vapor product <br/><br/> and is not designed to be refillable.</a>
            <a>JUUL is rechargeable via a USB port.</a>
        </div>
        <div className='juul-device-pic-container'>
            <img src={Juuldevicepic} alt='juuldevicepic' className='juul-device-pic'></img>
        </div>
    </div>

  );
};

export default Juulinfo;
