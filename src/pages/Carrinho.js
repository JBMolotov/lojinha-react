import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CarrinhoItems from '../components/Carrinho/Items';
import './Carrinho.css';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/Carrinho/Reducer' 


function Carrinho() {
   
    const carrinho = useSelector(state => state.carrinho)
    const dispatch = useDispatch();

    function removeItemCarrinho (id) {
        dispatch(removeItem(id));
    }

    function addItemCarrinho (item) {
        dispatch(addItem(item));
    }

    
    return (
        <> 
            <Navbar />
            
            <div className="Carrinho">
                { carrinho && carrinho.length == 0 ? 
                    <h1 className="Boasvindas"> Sem produtos no carrinho... </h1>
                    :
                    <CarrinhoItems items={carrinho} addItemCarrinho={addItemCarrinho} removeItemCarrinho={removeItemCarrinho}/>    
                }
            </div>    
            
        
            <Footer />
        </>
    );
}

export default Carrinho;