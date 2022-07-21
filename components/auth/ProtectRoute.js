import { useContext } from 'react';
import { AuthContext } from 'store';

export default function ProtectRoute({ children }) {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;

  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading || (!isLoggedIn && window.location.pathname !== '/')) {
    return <LoadingScreen />;
  }
  return children;
}
