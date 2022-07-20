import React, { createContext, useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import Router from 'next/router';

export const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const userIsLoggedIn = !!user;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const { uid } = fbUser;
        setUser({ uid });
        Router.push('/bookings');
      } else {
        setUser(null);
        // Router.push('/');
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
