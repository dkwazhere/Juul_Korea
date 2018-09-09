import React from 'react';
import './Devicepriceinfo.css';

const Devicepriceinfo = (props) => {
  return (
  <div className='device-intro'>
    <a className='device-title'>Device kits</a>
    <a className='device-price'>$34.99</a><br/>
    <a className='device-quantity'>Each kit contains the following: {''} </a>
    <a className='device-contain'> A Rechargeable JUUL device, {''} </a>
    <a className='device-contain'> USB Charger, {''}</a>
    <a className='device-contain'> One year limited device warranty  </a>
  </div>
  );
};

export default Devicepriceinfo;
