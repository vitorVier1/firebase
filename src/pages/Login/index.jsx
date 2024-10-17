import './login.css';

import { useState } from 'react';

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="container-login">
            <form className='form'>
                <h1>Login</h1>

                <div className="inputs">
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
                        <button type='reset'>Limpar</button>
                        <button className='send'>Entrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}