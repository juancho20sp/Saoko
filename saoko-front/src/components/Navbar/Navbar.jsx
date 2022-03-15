import React from 'react';
import styles from './Navbar.module.scss';

// Components
import { BsChatDots } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import { NavbarIcon } from './components';

const Navbar = () => {
  return (
    <aside className={styles['aside-main']}>
      <nav>
        <ul>
          <NavbarIcon icon={BsChatDots} text={`Chats`} />
          <NavbarIcon icon={MdDashboard} text={`Tableros`} />
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
