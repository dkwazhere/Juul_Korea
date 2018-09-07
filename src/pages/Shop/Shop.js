import React, { Component } from 'react';
import './Shop.css';
import Shopcards from '../../components/Shopcards';
import Podpricejumbotron from '../../components/Podpricejumbotron';

class Shop extends Component {
    render() {
        return(
            <div className='shop'>
                <Podpricejumbotron />
                <Shopcards />
            </div>
        )
    }
}

export default Shop;
