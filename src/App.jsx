import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    return toast.success('Conta cadastrada com sucesso!')
  }

  function erro() {
    toast.warn('error')
  }

  return (
    <div className="container-app">
      <ToastContainer autoClose={5000} />

      <form className='form'>
        <div className='inputs'>
          <h1>Cadastro</h1>
          <input 
            type='text' 
            className='input-nome'
            placeholder='Digite seu nome'
          />

          <input 
            type='text' 
            className='input-sobrenome'
            placeholder='Digite seu sobrenome'
          />
          
          <input 
            type='email' 
            className='input-email'
            placeholder='Digite seu e-mail'
          />
          
          <input 
            type='password' 
            className='input-senha'
            placeholder='Digite sua senha'  
          />

          <div className='buttons'>
            <input type='reset' value='Limpar' onClick={erro}/>
            <input type='button' value='Enviar' onClick={handleRegister}/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
