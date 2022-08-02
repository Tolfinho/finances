import { db } from '../firebase/config';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) return;
  }

  // Criar Usuário
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      console.log(data);

      let systemErrorMessage;
      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha deve conter pelo menos 6 caracteres!';
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'Email já cadastrado, tente outro!';
      } else {
        systemErrorMessage = 'Algo deu errado, tente novamente mais tarde!';
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  // Login
  const login = async (data) => {
    checkIfIsCancelled();

    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;
      console.log(error.message);

      if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha inválida!';
      } else if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuário não encontrado!';
      } else if (error.message.includes('too-many-requests')) {
        systemErrorMessage =
          'Muitas tentativas falhas, tente novamente mais tarde!';
      } else {
        systemErrorMessage = 'Algo deu errado, tente novamente mais tarde!';
      }

      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  // Logout
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    error,
    loading,
    createUser,
    auth,
    logout,
    login,
  };
};
