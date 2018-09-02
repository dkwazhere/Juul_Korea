import React from 'react';
import './Juultech.css';
import Juuldeviceimg from '../../assets/images/juul-device.png';
import Juultechcheck from '../../assets/images/juultechnology/juultech-check.png';
import Juultechcloud from '../../assets/images/juultechnology/juultech-cloud.png';
import Juultechsettings from '../../assets/images/juultechnology/juultech-setting.png';

const Juultech = (props) => {
  return (
    <div className='juultech-container'>
        <img className='juuldevpic' alt='juuldevpic' src={Juuldeviceimg}></img>
        <div className='juultech-side'>
            <div>
                <div><img src={Juultechcheck}></img></div>
                <div>
                    <h6>Simplicity</h6>
                </div>
            </div>

            <div>
                <div><img src={Juultechcloud}></img></div>
                <div>
                    <h6>Clean</h6>
                </div>
            </div>

            <div>
                <div><img src={Juultechsettings}></img></div>
                <div>
                <h6>Satisfying</h6>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Juultech;
