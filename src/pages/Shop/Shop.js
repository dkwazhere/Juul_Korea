import React, { Component } from 'react';
import './Shop.css';
import Shopcards from '../../components/Shopcards';

class Shop extends Component {
    render() {
        return(
            <div className='shop'>
                <Shopcards />
            </div>
        )
    }
}

export default Shop;
