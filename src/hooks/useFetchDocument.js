// Hooks
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from 'firebase/firestore';

export const useFetchDocument = (docCollection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) return;
  }

  useEffect(() => {
    async function loadData() {
      checkIfIsCancelled();

      setLoading(true);
      setError('');

      const collectionRef = await collection(db, docCollection);

      try {
        let q;

        q = await query(collectionRef, orderBy('createdAt', 'desc'));

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);
      } catch (error) {
        console.log(error.message);

        setError(error.message);
        setLoading(false);
      }
    }
    loadData();
  }, [docCollection, cancelled]);

  return { documents, error, loading };
};
