import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useAuthValue } from '../context/authContext';
import { useAuthentication } from '../hooks/useAuthentication';

import { BsCaretDownFill } from 'react-icons/bs';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleDropdown = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };

  return (
    <header>
      <Link to={'/'}>
        <div className="logo">
          finances<span className="red">.</span>
        </div>
      </Link>
      <div className="menu">
        <div className="icons" onClick={handleDropdown}>
          <img src="/images/default-user-image.png" alt="user" />
          <span className="caret-down">
            <BsCaretDownFill />
          </span>
        </div>
        {showMenu && (
          <div className="menu-dropdown">
            {(!user && (
              <ul>
                <Link to="/login">
                  <li>Entrar</li>
                </Link>
                <Link to="/signup">
                  <li>Cadastrar-se</li>
                </Link>
              </ul>
            )) || (
              <ul>
                <Link to="/">
                  <li>Meu perfil</li>
                </Link>
                <Link to="/">
                  <li>Nova Transação</li>
                </Link>
                <li onClick={logout}>Sair</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
