import React from 'react';

// Icons
import { IconContext } from 'react-icons';
import { BiUserCircle } from 'react-icons/bi';

import styles from './UserPreview.module.scss';

const UserPreview = () => {
  return (
    <div className={styles['userModule-container']}>
      <p className={styles['userModule-username']}>Diego triviño</p>

      <IconContext.Provider value={{ size: '2.4rem' }}>
        <BiUserCircle />
      </IconContext.Provider>
    </div>
  );
};

export default UserPreview;
