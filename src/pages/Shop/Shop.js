import React, { Component } from 'react';
import './Shop.css';
import Shopcards from '../../components/Shopcards';
import Podpricejumbotron from '../../components/Podpricejumbotron';
import Devicepriceinfo from '../../components/Devicepriceinfo';

class Shop extends Component {
    render() {
        return(
            <div className='shop'>
                <Podpricejumbotron />
                <Shopcards />
                <Devicepriceinfo />
            </div>
        )
    }
}

export default Shop;
