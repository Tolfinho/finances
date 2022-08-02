import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// Components
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Context
import { AuthProvider } from './context/authContext';

// Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider value={{ user }}>
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              exact
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
