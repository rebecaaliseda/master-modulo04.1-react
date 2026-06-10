import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test') {
      navigate('/list');
    } else {
      alert('User / password not valid, psst... admin / test');
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleNavigation}>
        <h2 className="login-title">Miembros de GitHub</h2>

        <div className="login-field">
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="login-field">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
