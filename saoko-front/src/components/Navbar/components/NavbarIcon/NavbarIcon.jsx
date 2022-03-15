import React from 'react';
import styles from './NavbarIcon.module.scss';

// Router
import { useNavigate } from 'react-router-dom';

// Components
import { IconContext } from 'react-icons';

const handleIconClick = (path, navigate) => {
  navigate(path);
};

const NavbarIcon = ({ text, icon, path }) => {
  const navigate = useNavigate();

  return (
    <IconContext.Provider value={{ size: '2.3rem' }}>
      <li
        className={styles['navbarIcon-main']}
        onClick={() => handleIconClick(path, navigate)}
      >
        {icon()}

        <p className={styles['navbarIcon-text']}>{text}</p>
      </li>
    </IconContext.Provider>
  );
};

export default NavbarIcon;
