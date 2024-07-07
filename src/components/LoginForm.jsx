import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import './LoginForm.css';

const LoginForm = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(email)) newErrors.email = 'Email inválido';
    if (!validatePassword(password)) newErrors.password = 'Senha deve ter pelo menos 8 caracteres';

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default LoginForm;