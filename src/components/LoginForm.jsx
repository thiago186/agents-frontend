import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import { Eye, EyeOff } from 'lucide-react';

import './LoginForm.css';

const LoginForm = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
        <div className="password-input">
        <input
          type= {showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="button"
          className="show-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default LoginForm;