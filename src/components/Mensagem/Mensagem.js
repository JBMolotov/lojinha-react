import React from 'react';
import { useSelector } from 'react-redux';
import './Mensagem.css'

export default function Mensagem( {msg} ) {

    return (
        <div className="Mensagem"> 
            <h2> { msg } </h2>
        </div>
    )
}