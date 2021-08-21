import React from 'react';
import PedidosItems from '../../components/Pedidos/ItemList';
import { useSelector } from 'react-redux';
import './Pedidos.css'

function Pedidos() {
    const pedidos = useSelector(state => state.pedidos)

    function pedidosVazio() {
        if (pedidos && pedidos.length === 0)
        {
            return ( <h1 className="Boasvindas"> Sem pedidos ainda... </h1> );
        }
        else {
            return ( <PedidosItems items={pedidos}/> );
        }
                    
    }

    return (
        <> 
            <div className="Pedidos">
                
                { pedidosVazio() }
                
            </div>    
        </>
    );
}

export default Pedidos;