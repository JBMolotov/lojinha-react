import React, { useState } from 'react';
import './Item.css';

const Item = ({ item, removeItemCarrinho }) => {
    

    return ( 
        <div className="Item">
            <img className="ItemImg" src={item.image} alt={item.name}/>
            <div className="ItemInfo">
                <li><h2>{item.name}</h2></li>
                <li><h2>R$ {item.price}</h2></li>
                <li><h3>Quantidade: {item.quantity}</h3></li>
                <li><h1>Subtotal: R$ {item.price}</h1></li>
            </div>
            
            <div className="ItemActions">
                <li><button className="ItemButton ItemAdd">Adicionar</button></li>
                <li><button onClick={() => removeItemCarrinho(item.id)} className="ItemButton">Remover</button></li>                
            </div>
        </div>

        
     );
}
 
export default Item;