import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export const useInsertDocument = (docCollection) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) return;
  }

  const insertDocument = async (document) => {
    checkIfIsCancelled();

    setError('');
    setLoading(true);

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      setLoading(false);
    } catch (error) {
      console.log(error.message);

      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertDocument, error, loading };
};
