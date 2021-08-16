import React from 'react';
import Item from "./Item";
import { removeItem } from '../../store/Carrinho/Reducer';



const Items = ({ items, removeItemCarrinho }) => {
    return ( 
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} removeItemCarrinho={removeItemCarrinho} />
            ))}
        </>
     );
}
 
export default Items;