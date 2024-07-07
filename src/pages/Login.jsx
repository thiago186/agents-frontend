import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../services/api';
import './Login.css';

const Login = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await login(credentials);
      console.log('Login bem-sucedido:', response);
      // Aqui você pode salvar o token de autenticação, se houver
      navigate('/home'); // Navega para a página inicial após o login bem-sucedido
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Email ou senha incorretos. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Faça login na sua conta</h2>
        {error && <p className="error-message">{error}</p>}
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Login;