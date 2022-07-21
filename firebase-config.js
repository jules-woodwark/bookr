import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDkfEyAJ5m2dRz8gnzF0A0r_RmvSwZ7yec',
  authDomain: 'bookr-5ebad.firebaseapp.com',
  projectId: 'bookr-5ebad',
  storageBucket: 'bookr-5ebad.appspot.com',
  messagingSenderId: '861495615935',
  appId: '1:861495615935:web:bc8a760cc480b69c53c10a',
};

//  init firebase app
const app = initializeApp(firebaseConfig);

//  init services
const db = getFirestore(app);
const auth = getAuth(app);

//  collection ref
const colRef = collection(db, 'users');

export { db, auth, colRef };
