import { ButtonHTMLAttributes } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { GoogleLogo, SignIn } from 'phosphor-react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  path: string;
};

import './styles.scss';

export function Button({ 
  path,
  ...rest
 }: ButtonType) {
  const { setUser } = useAuth();

  const navigate = useNavigate();

  function handleLogin() {
    setUser(true);
    navigate('/dashboard');
  }

  return (
    <button 
      className="buttonContainer group"
      onClick={handleLogin}
      {...rest}
    >
      {path == 'google' ? (
        <>
          <GoogleLogo
            weight="bold"
            className="buttonIcon group-hover:text-green"
          />{' '}
          Faça login com o google
        </>
      ) : (
        <>
          <SignIn
            weight="bold"
            className="buttonIcon group-hover:text-green"
          />{' '}
          Fazer login
        </>
      )}
    </button>
  );
}
