import React from 'react';
import Item from "./Item";


import './Items.css';

const Items = ({ items }) => {
    // const total = useSelector(calculateTotalSelector);

    return ( 
        <>
            {console.log (items)}
            { items ?  items.map((item) => (
                <Item key={item.id} item={item} /> 
            )) : <></> 
            }
        </>
     );
}
 
export default Items;