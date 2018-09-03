import React from 'react';
import './Juultech.css';
import Juuldeviceimg from '../../assets/images/juul-device.png';
import Juultechcheck from '../../assets/images/juultechnology/juultech-check.png';
import Juultechcloud from '../../assets/images/juultechnology/juultech-cloud.png';
import Juultechsettings from '../../assets/images/juultechnology/juultech-setting.png';

const Juultech = (props) => {
  return (
    <div className='juultech-container'>
        <div className='juultech-img'><img className='juuldevpic' alt='juuldevpic' src={Juuldeviceimg}></img></div>
        <div className='juultech-side'>
            <div>
                <div>
                    <img alt='juultech-settings' src={Juultechsettings}></img>
                    <h6 className='juultech-header'>Simplicity</h6>
                </div>
            </div>

            <div>
                <div>
                    <img alt='juultech-cloud' src={Juultechcloud}></img>
                    <h6 className='juultech-header'>Clean</h6>
                </div>
            </div>

            <div>
                <div>
                    <img alt='juultech-check' src={Juultechcheck}></img>
                    <h6 className='juultech-header'>Satisfying</h6>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Juultech;
