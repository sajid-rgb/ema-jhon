import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Search.css'

const Search = (props) => {
    const cart=props.cart
    return (
        <div className="searchDiv">
            <input type="text" placeholder='Enter your product'/>
            <span className="fontIcon"><FontAwesomeIcon icon={faShoppingCart} /><span >{cart.length}</span></span>
        </div>
    );
};

export default Search;