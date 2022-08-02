// Router
import { Link } from 'react-router-dom';

// Hooks
import { useState } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login: userLogin, error, loading } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    userLogin(user);
  };

  return (
    <div className="login">
      <div className="header">
        <Link to={'/'}>
          <h1>
            finances<span className="red">.</span>
          </h1>
        </Link>
      </div>

      <div className="form-container">
        <h2>Entrar</h2>
        <div className="hr"></div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Insira seu email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Insira sua senha..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Link to="/" className="forgot-password">
            Esqueci minha senha!
          </Link>
          <button>{(!loading && 'Entrar') || 'Aguarde...'}</button>
          {error && <p className="errorMessage">{error}</p>}
          <p>
            Ainda não possui uma conta? <Link to="/signup">Criar Conta</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
