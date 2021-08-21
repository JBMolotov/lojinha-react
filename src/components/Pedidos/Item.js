import React from 'react';
import './Item.css';
import { formatPrice } from '../../utils/format-price'

const Item = ({ item }) => {
    
    function itemExist () {
        if (item.id !== undefined) {
            return (
                <div className="Item">
                <img className="ItemImg" src={item.image} alt={item.name}/>
                <div className="ItemInfo">
                    <li><h2>{item.name}</h2></li>
                    <li><h2>{ formatPrice(item.price)}</h2></li>
                    <li><h3>Quantidade: {item.quantity}</h3></li>
                    <li><h1>Subtotal pago: { formatPrice(item.price * item.quantity)}</h1></li>
                </div>
            </div> )
        }
    }

    return ( 
       itemExist()
     );
}
 
export default Item;