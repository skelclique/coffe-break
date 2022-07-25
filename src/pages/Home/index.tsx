import { Outlet } from 'react-router-dom';

import { NavLinkIcon } from '../../components/NavLinkIcon';

import './styles.scss';

export function Home() {
  return (
    <div className="homeContainer">
      <div className="homeApp-container">
        <nav className="sideBar-container">
          <NavLinkIcon path="dashboard" />
          <NavLinkIcon path="stats" />
          <NavLinkIcon path="generator" />
          <NavLinkIcon path="/" />
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
