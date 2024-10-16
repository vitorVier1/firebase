import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from './dbConnection';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'

import './App.css';

function App() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    await addDoc(collection(db, "cadastros"), {
      name: name,
      lastName: lastName,
      email: email,
      password: password
    })
    .then(() => {
      console.log('Conta cadastrada com sucesso!')
    })
    .catch(() => {
      console.log('Erro')
    })
  }

  return (
    <div className="container-app">
      <ToastContainer autoClose={4500} />

      <form className='form'>
        <div className='inputs'>
          <h1>Cadastro</h1>
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
            <button type='reset'>Reset</button>
            <button onClick={handleRegister} className='send'>Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
