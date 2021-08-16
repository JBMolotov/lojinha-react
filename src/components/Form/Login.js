import React, { useState } from 'react';
import './Login.css';

const initialValue = {
    email: null,
    senha: null
}



const Login = () => {
    const [values, setValues] = useState({})
    const [erros, setErros] = useState({})
    

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({...values, [name]: value});
    }

   function validate(values) {
        const erros = {};

        if (values.email == null)
            erros.geral = 'Insira um email válido'
        else if (values.senha == null)
            erros.geral = 'Insira uma senha válida'
        else erros.geral = 'Email e/ou senha incorretos'

        return erros;
    }

    


    function onSubmit(ev) {
        ev.preventDefault();
                
        setErros( validate(values));

        console.log(erros);
        
        if ((values.email == 'teste@liven.tech' && values.senha == '123'))
           {
                localStorage.setItem('@lojinha/auth', true);
                window.location.reload();
           }
        
        

    }

  

    return ( <div className="Acesso">

            <h1>Entrar</h1>
            <p className="Desc">Se você já possui um cadastro é só entrar e aproveitar!</p>
            <form onSubmit={onSubmit}> 
                {erros.geral && <p name="error" className="erro">{erros.geral}</p>}
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={onChange}
                />
                <input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    onChange={onChange}
                />
                <div>
                    <button type='submit'> Entrar </button>
                </div>
            </form>

    </div> );
}
 
export default Login;