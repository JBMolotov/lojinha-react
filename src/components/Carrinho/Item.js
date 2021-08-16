import React, { useState } from 'react';
import './Item.css';

const Item = ({ item }) => {
    return ( 
        <div className="Item">
            {/* <li><img src={item.image} alt={item.name}/></li> */}
            <li><h2>{item.name}</h2></li>
            <li><h1>R$ {item.price}</h1></li>
            {/* <li>Estoque: {item.stock}</li> */}
            <li><button><li> Remover</li></button></li>
        </div>
     );
}
 
export default Item;