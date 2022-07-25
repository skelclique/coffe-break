import { useState } from 'react';
import ReactModal from 'react-modal';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { MdLogout } from 'react-icons/md';
import { GiEntryDoor } from 'react-icons/gi';

import { NavLinkIcon } from '../../components/NavLinkIcon';

import './styles.scss';

export function LogOffModal({
  isOpen,
  setModalIsOpen
}: any) {
  const { setUser } = useAuth();

  const navigate = useNavigate();

  function handleLogOff() {
    setUser(false);
    navigate('/');
  }

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: '#060308cc',
        },

        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '590px',
          height: '362px',
          padding: 0,
        },
      }}
    >
      <div className="logOffContainer">
        <GiEntryDoor className="w-20 h-20" />
        <strong>Deslogar</strong>
        <p>Tem certeza que você deseja deslogar?</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
          <button onClick={handleLogOff}>Sim, deslogar</button>
        </div>
      </div>
    </ReactModal>
  );
}

export function Home() {
  const [logOffModal, setLogOffModal] = useState(false);

  return (
    <div className="homeContainer">
      <div className="homeApp-container">
        <nav className="sideBar-container">
          <NavLinkIcon path="dashboard" />
          <NavLinkIcon path="stats" />
          <NavLinkIcon path="generator" />
          <button className="absolute bottom-10 cursor-pointer" onClick={() => setLogOffModal(true)}>
            <MdLogout className="text-white icon-md flip-x" />
          </button>
          <LogOffModal isOpen={logOffModal} setModalIsOpen={setLogOffModal} />
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
