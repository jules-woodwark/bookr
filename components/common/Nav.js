import { useContext } from 'react';
import { AuthContext } from 'store';
import LogoutButton from '../ui/LogoutButton';

export default function Nav() {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;

  return <nav>{isLoggedIn && <LogoutButton />}</nav>;
}
