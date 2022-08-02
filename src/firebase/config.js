import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDD24Hq5A-Vw_n7M3TdCre3YuT3uCsoj9o',
  authDomain: 'finances-7ded7.firebaseapp.com',
  projectId: 'finances-7ded7',
  storageBucket: 'finances-7ded7.appspot.com',
  messagingSenderId: '505997582302',
  appId: '1:505997582302:web:3c3c0f08864f75b739474f',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
