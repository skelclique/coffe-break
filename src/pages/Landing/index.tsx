import { useAuth } from '../../hooks/useAuth';

import { Login } from '../Login';
import { Home } from '../Home';

export function Landing() {
  const { user } = useAuth();

  return <>
    { user ? <Home /> : <Login /> }
  </>;
}
