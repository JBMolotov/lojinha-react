import React from 'react';
import Item from "./Item";


import './ItemList.css';

const Items = ({ items }) => {
    // const total = useSelector(calculateTotalSelector);

    function temItems () {
        // console.log(items)
        if (items) {
            return (
                items.map((item) => (
                    <Item key={item.id} item={item} />  ))
            )
        }
    }

    return ( 
        temItems()
     );
}
 
export default Items;