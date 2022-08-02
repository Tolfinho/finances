// Router
import { Link, useNavigate } from 'react-router-dom';

// Hooks
import { useAuthentication } from '../hooks/useAuthentication';
import { useState, useEffect } from 'react';

function Signup() {
  const { error: authError, loading, createUser } = useAuthentication();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas devem ser iguais!!!');
      return;
    } else {
      setError('');
    }

    const newUser = {
      displayName,
      email,
      password,
    };

    await createUser(newUser);

    if (!error) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (!error) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div>
      <div className="signup">
        <div className="header">
          <Link to={'/'}>
            <h1>
              finances<span className="red">.</span>
            </h1>
          </Link>
        </div>

        <div className="form-container">
          <h2>Cadastrar-se</h2>
          <div className="hr"></div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">Nome</label>
            <input
              type="text"
              name="displayName"
              placeholder="Insira seu nome..."
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
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
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Insira sua senha novamente..."
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />

            {error && <p className="errorMessage">{error}</p>}

            <Link to="/" className="forgot-password">
              Esqueci minha senha!
            </Link>
            <button>{(!loading && 'Cadastrar') || 'Aguarde...'}</button>
            <p>
              Já possui uma conta? <Link to="/login">Entrar</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
