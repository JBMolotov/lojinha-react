import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CarrinhoItems from '../components/Carrinho/Items';
import './Carrinho.css';


function Carrinho() {
   

    const [items, setItems] = useState([
        {
            id: "1",
            name: "Teste",
            price: "2555"
        },
        {
            id: "2",
            name: "Jaqueta de couro",
            price: "4352"
        }
    ]);

    const handleItemAddition = (itemName) => {
        const newItems = [
            ...items,
            {
                name: itemName,
                id: "3"
            }
        ];

        setItems(newItems);
    }
    
    return (
        <> 
            <Navbar />
            {/* {loggin} */}
            <div className="Carrinho">
                <CarrinhoItems items={items} />
            </div>
        
            <Footer />
        </>
    );
}

export default Carrinho;