import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CarrinhoItems from '../components/Carrinho/Items';
import './Carrinho.css';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/Carrinho/Reducer' 

function Carrinho() {
   
    const carrinho = useSelector(state => state.carrinho)
    const dispatch = useDispatch();

    function removeItemCarrinho (id) {
        
        dispatch(removeItem(id));
    }

    
    return (
        <> 
            <Navbar />
            
            <div className="Carrinho">
                { carrinho.length == 0 ? 
                    <h1 className="Boasvindas"> Sem produtos no carrinho... </h1>
                    :
                    <CarrinhoItems items={carrinho} removeItemCarrinho={removeItemCarrinho}/>    
                }
            </div>    
            
        
            <Footer />
        </>
    );
}

export default Carrinho;