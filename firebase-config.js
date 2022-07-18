import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDga3u2rVASg2nPj2QeZPMMcgBCOV7jYNg',
  authDomain: 'material-ui-login.firebaseapp.com',
  projectId: 'material-ui-login',
  storageBucket: 'material-ui-login.appspot.com',
  messagingSenderId: '1008755030568',
  appId: '1:1008755030568:web:5bb3f324f5ba92930d931d',
};

//  init firebase app
const app = initializeApp(firebaseConfig);

//  init services
const db = getFirestore(app);
const auth = getAuth(app);

//  collection ref
const colRef = collection(db, 'users');

export { db, auth, colRef };
