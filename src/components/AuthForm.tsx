import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux_hook';
import { inputLogin } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import '../styles/authform.css';

function AuthForm(): JSX.Element {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailRedux = useAppSelector(state => state.auth.email)
    const passwordRedux = useAppSelector(state => state.auth.password)

    const dispatch = useAppDispatch()
    const push = useNavigate()
    const handleAuth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (email === emailRedux && password === passwordRedux) {
            dispatch(inputLogin())
            push('/')
        }
        else { alert('Введен неверный логин или пароль!') }
    }
    return (
        <form className="container-form">

            <input
                type='email'
                value={email}
                placeholder='Введите email он же логин'
                onChange={(e) => setEmail(e.target.value)} />

            <input
                type='password'
                value={password}
                placeholder='Введите пароль'
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={(e) => handleAuth(e)}> Войти </button>
        </form>
    )
}

export default AuthForm;