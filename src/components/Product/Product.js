import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className='products'>
            <div>
             <img src={img} alt=""/>
            </div>
            <div>
            <h4>{name}</h4>
            <br/>
            <p><small>by: {seller}</small></p>
            <p>${price}</p>
            <br/>
            <p>Only {stock} left in the stock - order soon</p>
            <button className='mainButton' onClick={()=>props.handleClick(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;