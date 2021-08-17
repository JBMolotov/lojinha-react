import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PedidosItems from '../components/Pedidos/Items';
import { useSelector } from 'react-redux';
import './Pedidos.css'

function Pedidos() {
    const pedidos = useSelector(state => state.pedidos)

    return (
        <> 
            <Navbar />
            
            <div className="Pedidos">
                
                { pedidos && pedidos.length == 0 ? 
                    <h1 className="Boasvindas"> Sem pedidos ainda... </h1>
                    : <PedidosItems items={pedidos}/>    
                }
                
            </div>    
            
        
            <Footer />
        </>
    );
}

export default Pedidos;