import { NavLink } from 'react-router-dom';

import { AnchorHTMLAttributes } from 'react';

import { useAuth } from '../../hooks/useAuth';

import { MdBarChart, MdDashboard, MdLogout, MdSettings } from 'react-icons/md';

import './styles.scss';

type NavLinkIconType = AnchorHTMLAttributes<HTMLAnchorElement> & {
  path: string;
}

export function NavLinkIcon({
  path,
  ...rest
}: NavLinkIconType) {
  return (
    <NavLink 
      to={path}
      className="sideNav-container"
      {...rest}
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
          ) : null }
        </div>
      )}
    </NavLink>
  );
}
