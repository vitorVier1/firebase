import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { db, auth } from '../../dbConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
// import { collection, addDoc } from 'firebase/firestore';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import './cadastros.css';

export default function Cadastros() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success('Conta cadastrada com sucesso!')
            setName('')
            setLastName('')
            setEmail('')
            setPassword('')
        })
        .catch((error) => {
            if(error.code === 'auth/weak-password') {
                toast.error('Senha Fraca!')
            } else if(error.code === 'auth/email-already-in-use') {
                toast.error('E-mail já existente!')
            }
        })
    }
    
    return(
        <div className="container-cadastros">
            <form className='form'>
                <div className='inputs'>
                    <div className="title">
                        <h1>Cadastro</h1>
                    </div>

                    <input 
                        type='text' 
                        className='input-nome'
                        placeholder='Digite seu nome'
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                    />

                    <input 
                        type='text' 
                        className='input-sobrenome'
                        placeholder='Digite seu sobrenome'
                        value={lastName}
                        onChange={ (e) => setLastName(e.target.value)}
                    />
                    
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
                        <input type='button' onClick={registerUser} className='send' value='Enviar' />
                    </div>
                </div>

                <div className="toLogin">
                    <span>Já tem uma conta?</span> <Link to='/login'>Faça Login</Link>
                </div>
            </form>
        </div>
    )
}