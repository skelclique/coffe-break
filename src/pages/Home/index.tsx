import { useAuth } from '../../hooks/useAuth';

import { NavLink, Outlet } from 'react-router-dom';

import { MdBarChart, MdDashboard, MdLogout, MdSettings } from 'react-icons/md';

export function Home() {
  const { setUser } = useAuth();

  return (
    <div className="h-screen">
      <div className="flex h-screen w-screen p-10">
        <nav
          className="flex flex-col items-center w-20
          gap-6 py-6 pt-20 rounded-3xl bg-blue relative"
        >
          <NavLink to="dashboard" className="relative">
            {({ isActive }) => (
              <div
                className={`${
                  isActive
                    ? 'bg-white flex items-center ml-4 pl-4 pr-6 rounded-l-2xl active-link'
                    : 'bg-blue'
                } py-3`}
              >
                <MdDashboard
                  className={`${isActive ? 'text-blue' : 'text-white'} w-6 h-6`}
                />
              </div>
            )}
          </NavLink>
          <NavLink to="stats" className="relative">
            {({ isActive }) => (
              <div
                className={`${
                  isActive
                    ? 'bg-white flex items-center ml-4 pl-3 pr-5 rounded-l-2xl active-link'
                    : 'bg-blue'
                } py-2`}
              >
                <MdBarChart
                  className={`${isActive ? 'text-blue' : 'text-white'} w-8 h-8`}
                />
              </div>
            )}
          </NavLink>
          <NavLink to="generator" className="relative">
            {({ isActive }) => (
              <div
                className={`${
                  isActive
                    ? 'bg-white flex items-center ml-4 pl-4 pr-6 rounded-l-2xl active-link'
                    : 'bg-blue'
                } py-3`}
              >
                <MdSettings
                  className={`${isActive ? 'text-blue' : 'text-white'} w-6 h-6`}
                />
              </div>
            )}
          </NavLink>
          <NavLink
            to="/"
            className="absolute bottom-8 cursor-pointer"
            onClick={() => { setUser(false) }}
          >
            <MdLogout className="text-white w-6 h-6 flip-horizontal" />
          </NavLink>
        </nav>
        <div className="pl-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
