import React from 'react';
import './Item.css';
import { formatPrice } from '../../utils/format-price'

const Item = ({ item,  addItemCarrinho, removeItemCarrinho }) => {
    
    function itemExist () {
        if (item.id !== undefined) {
            return (
                <div className="Item">
                    <img className="ItemImg" src={item.image} alt={item.name}/>
                    <div className="ItemInfo">
                        <li><h2>{item.name}</h2></li>
                        <li><h2>{ formatPrice(item.price)}</h2></li>
                        <li><h3>Quantidade: {item.quantity}</h3></li>
                        <li><h1>Subtotal: { formatPrice(item.price * item.quantity)}</h1></li>
                    </div>
                    
                    <div className="ItemActions">
                        <li><button onClick={() => addItemCarrinho(item)} className="ItemButton ItemAdd">Adicionar</button></li>
                        <li><button onClick={() => removeItemCarrinho(item)} className="ItemButton">Remover</button></li>                
                    </div>
                </div> )
        }
    }

    return ( 
        <>
            { itemExist() }
        </>
     );
}
 
export default Item;