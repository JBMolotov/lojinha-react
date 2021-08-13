import React, { useState } from 'react';
import './Inicial.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Cadastro from './components/Form/Cadastro';
import Login from './components/Form/Login';

function Inicial() {
    return ( 
        <> 
            <Menu />

            <div className='rowC'>
                <Cadastro />
                <Login />
            </div>
        
            <Footer />
        </>
    );
}

export default Inicial;