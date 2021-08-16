import React, { useState } from 'react';
import './Inicial.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cadastro from '../components/Form/Cadastro';
import Login from '../components/Form/Login';


function Inicial() {
    return ( 
        <> 
            <Navbar />

            <div className='rowC'>
                <Cadastro />
                <Login />
            </div>
        
            <Footer />
        </>
    );
}

export default Inicial;