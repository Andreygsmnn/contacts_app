import React from 'react';
import AuthForm from './AuthForm';
import '../styles/loginPage.css';

function LoginPage() {


  return (
    <div className="containerLoginPage">
      <h3 className="text-title">Вы не вошли в аккаунт! Пожалуйста введите логин и пароль</h3>
      <AuthForm />
    </div>
  )
}

export default LoginPage