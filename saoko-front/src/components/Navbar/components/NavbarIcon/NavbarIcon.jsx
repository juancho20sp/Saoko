import React from 'react';
import styles from './NavbarIcon.module.scss';

// Components
import { IconContext } from 'react-icons';

const NavbarIcon = ({ text, icon }) => {
  return (
    <IconContext.Provider value={{ size: '2.3rem' }}>
      <li className={styles['navbarIcon-main']}>
        {icon()}

        <p className={styles['navbarIcon-text']}>{text}</p>
      </li>
    </IconContext.Provider>
  );
};

export default NavbarIcon;
