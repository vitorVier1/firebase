import './login.css';

import { toast } from 'react-toastify';

import { auth } from '../../dbConnection';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState([])


    // Confere se há usuário logado
    useEffect(() => {
        async function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    console.log(user)
                    setUser(true)
                    setUserDetail({
                        uid: user.uid,
                        email: user.email
                    })
                } else {
                    setUser(false)
                    setUserDetail({})
                }
            })
        }

        checkLogin();
    }, [])


    // Logar usuário
    async function loginUser() {
        await signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
            toast.success('Usuário logado com sucesso!')
            setEmail('')
            setPassword('')

            setUserDetail({
                uid: value.user.uid, 
                email: value.user.email
            })

            setUser(true)
        })
        .catch(() => {
            toast.error('Erro ao fazer login')
        })
    }

    // Deslogar usuário
    async function logOut() {
        if(!user) {toast.warn("Não há usuário logado")}
        else{
            await signOut(auth) 
            setUser(false)
            setUserDetail({})
            toast.success("Usuario deslogado")
        }
    }

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
                        <Link to='#'>
                            <input type='button' onClick={loginUser} className='send' value='Entrar'/>
                            <input type='button' onClick={logOut} className='send' value='Sair'/>
                        </Link>
                    </div>
                </div>

                <div className="toCadastro">
                    <span>Ainda não tem uma conta?</span> <Link to='/cadastro'>Cadastrar-se</Link>
                </div>
            </form>

            {user && (
                <div>
                    <strong>Seja Bem-Vindo(a). Você está logado(a)!</strong><br/>
                    <span>ID: {userDetail.uid} | E-mail: {userDetail.email}</span>
                </div>
            )} 
        </div>
    )
}