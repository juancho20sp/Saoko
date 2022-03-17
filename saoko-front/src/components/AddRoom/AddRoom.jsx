import React from 'react';

import styles from './AddRoom.module.scss';

// Components
import { IconContext } from 'react-icons';
import { GrAddCircle } from 'react-icons/gr';

const handleClick = (event) => {
  event.preventDefault();

  console.log('Adding room...');
};

const AddRoom = () => {
  return (
    <div className={styles['addRoom-main']} onClick={handleClick}>
      <IconContext.Provider value={{ size: '4rem' }}>
        <GrAddCircle />
      </IconContext.Provider>
    </div>
  );
};

export default AddRoom;
