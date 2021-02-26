import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Search from '../Searchbox/Search';
import './Shop.css'

const Shop = () => {
    const first10=fakeData;
    const [product,setProduct]=useState(first10);
    const [cart,setCart] = useState([])
    const handleClick=(product)=>{
        console.log("added");
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <section>
            <Search cart={cart}></Search>
            <div className='shop'>
            <div className="product">
           
                {
                    product.map(pr=><Product product={pr} handleClick={handleClick}></Product>)
                }
            

            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
        </section>
    );
};

export default Shop;