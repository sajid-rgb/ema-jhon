import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // let total=0;
    // for(let i=0;i<cart.length;i++){
    //     const product=cart[i];
    //     total=total+product.price;
    // }
    const total = cart.reduce((total,pd)=>total+pd.price,0);
    let shipping =0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99
    }
    else if(total>0){
        shipping=12.99
    }
    const tax=total/10;
    const totalPrice = total+shipping+tax
    return (
        <div className='order'>
            <h1>Order Summary</h1>
                <div className="summary">
                <p>Items Order:    ${cart.length}</p>
                <p>Sub total:      ${total.toFixed(2)}</p>
                <p><small>Shipping Price: ${shipping}</small></p>
                <p><small>Tax:${tax.toFixed(2)}</small></p>
                <p className='total'>Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
                <button>Review your order</button>
        </div>
    );
};

export default Cart;