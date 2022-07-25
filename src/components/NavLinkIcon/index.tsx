import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { MdBarChart, MdDashboard, MdLogout, MdSettings } from 'react-icons/md';

import './styles.scss';

type NavLinkIconType = {
  path: string;
}

export function NavLinkIcon({
  path,
}: NavLinkIconType) {
  const { setUser } = useAuth();

  return (
    <NavLink 
      to={path} 
      className={`${ path == '/' ? 'absolute bottom-8 cursor-pointer' : 'sideNav-container'}`}
      onClick={() => path == '/' && setUser(false)}
    >
      {({ isActive }) => (
        <div className="py-3">
          { path === 'dashboard' ? (
            <>
              <MdDashboard className={`${isActive ? 'text-blue' : 'text-white'} icon-md`} />
              <div className={`${isActive ? 'boxAnimation reverseBorder' : ''} boxEffect top-0`} />
            </>
          ) : path === 'stats' ? (
            <>
              <MdBarChart className={`${isActive ? 'text-blue' : 'text-white'} icon-lg`} />
              <div className={`${isActive ? 'boxAnimation reverseBorder ' : '' } boxEffect top-1`} />
            </>
          ) : path === 'generator' ? (
            <>
              <MdSettings className={`${isActive ? 'text-blue' : 'text-white'} icon-md`} />  
              <div className={`${isActive ? 'boxAnimation reverseBorder' : '' } boxEffect top-0`} />
            </>
          ) : path == '/' ? (
            <>
              <MdLogout className="text-white icon-md flip-x" />
            </>
          ) : null }
        </div>
      )}
    </NavLink>
  );
}
