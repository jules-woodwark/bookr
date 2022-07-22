import React, { createContext, useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import Router from 'next/router';
import useFirebase from 'hooks/useFirebase';
import { getAllUserInfo } from 'utils/utils';

export const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const userIsLoggedIn = !!user;

  const { getAllUserDocs } = useFirebase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const { uid } = fbUser;
        setUser({ uid });
        // DEBUG: Very bad, getAllUserInfo doesn't belong here.
        // It's just for the demo...
        getAllUserInfo(getAllUserDocs);
        Router.push('/bookings');
      } else {
        Router.push('/');
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const contextValue = useMemo(() => ({
    user,
    isLoggedIn: userIsLoggedIn,
  }));

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
