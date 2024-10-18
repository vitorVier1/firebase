import './login.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="container-login">
            <form className='form'>
                <div className="title">
                    <h1>Log In</h1>
                </div>

                <div className="inputs-login">
                    <input 
                        type='email' 
                        className='input-email'
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                        
                    <input 
                        type='password' 
                        className='input-senha'
                        placeholder='Digite sua senha'  
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                    />

                    <div className='buttons'>
                        <Link to='/access'>
                            <input type='button' className='send' value='Entrar'/>
                        </Link>
                    </div>
                </div>

                <div className="toCadastro">
                    <span>Ainda não tem uma conta?</span> <Link to='/cadastro'>Cadastrar-se</Link>
                </div>
            </form>
        </div>
    )
}