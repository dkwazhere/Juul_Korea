import React from 'react';
import './Juulinfo.css';
import Juuldevicepic from '../../assets/images/juul-device-pic.png';
import Juulpodpic from '../../assets/images/juul-pod-pic.png';

const Juulinfo = (props) => {
  return (
    <div className='juul-info'>
        <div className='juul-device-info'>
            <h4>What is a Juul device?</h4>
            <a>JUUL uses an heating mechanism that creates <br/> an aerosol and is engineered to minimize combustion. <br/><br/></a>
            <a>JUUL is a closed system vapor product <br/> and is not designed to be refillable.<br/><br/></a>
            <a>JUUL is rechargeable via a USB port.</a>
        </div>
        <div className='juul-device-pic-container'>
            <img src={Juuldevicepic} alt='juuldevicepic' className='juul-device-pic'></img>
        </div>
        <div className='juul-pod-info'>
        <div className='horizontal-rule'><hr/></div>
            <h4>What is a Juul Pod?</h4>
            <a>A JUULpod is the cartridge that clicks into the top <br/> of the JUUL device. </a>
            <a>JUULpods contain a proprietary<br/> salt-based nicotine e-liquid formula, which is mixed <br/>under strict quality-controlled processes, and is intended <br/>to help satisfy smokers when transitioning from cigarettes.<br/><br/></a>
            <h4>What is an E-liquid?</h4>
            <a>An e-liquid is the fluid used in vapor products to create the actual vapor.<br/><br/></a>
            <h4>What is Vapor?</h4>
            <a>Vapor is the aerosol that is generated when an e-liquid is heated.</a>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div className='juul-pod-pic-container'>
            <img src={Juulpodpic} alt='juulpodpic' className='juul-pod-pic'></img>
        </div>
    </div>

  );
};

export default Juulinfo;
