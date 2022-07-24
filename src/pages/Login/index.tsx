import { NavLink } from 'react-router-dom';

import { GoogleLogo, SignIn } from 'phosphor-react';

import { useAuth } from '../../hooks/useAuth';

import LogoImg from '../../assets/logo.svg';

export function Login() {
  const { setUser } = useAuth();

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-blue">
      <div className="flex flex-col items-center w-full max-w-xs gap-5">
        <img className="mb-5" src={LogoImg} alt="Logo Raimax" />
        <button
          className="text-blue bg-green w-full py-3 px-10 rounded-lg font-medium
          flex items-center justify-center hover:bg-blue hover:text-green hover:ring-2
          hover:ring-green transition-colors group"
        >
          <GoogleLogo
            weight="bold"
            className="text-blue mr-1 group-hover:text-green"
          />{' '}
          Faça login com o google
        </button>
        <div
          className="flex items-center text-white 
            white-line w-full justify-between text-sm my-3"
        >
          ou faça login
        </div>
        <input
          className="w-full rounded-lg py-3 px-4 border-gray border text-black"
          placeholder="nome@raimax.com.br"
          type="text"
        />
        <input
          className="w-full rounded-lg py-3 px-4 border-gray border text-black"
          placeholder="••••••••••"
          type="password"
        />
        <NavLink
          to="dashboard"
          className="text-blue bg-green w-full py-3 px-10 rounded-lg font-medium
          flex items-center justify-center hover:bg-blue hover:text-green hover:ring-2
        hover:ring-green transition-colors group"
          onClick={() => { setUser(true) }}
        >
          <SignIn
            weight="bold"
            className="text-blue mr-1 group-hover:text-green"
          />{' '}
          Fazer login
        </NavLink>
      </div>
    </div>
  );
}
