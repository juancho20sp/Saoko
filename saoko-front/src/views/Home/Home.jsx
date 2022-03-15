import React from 'react';
import styles from './Home.module.scss';

// Components
import { Navbar, Banner } from '../../components';

// TODO -> if there are no rooms -> show the message
// TODO -> if there are rooms -> go to chats (or the option that has a room)
const Home = () => {
  return (
    <main className={styles['home-main']}>
      <Navbar />

      <div>
        <Banner />
        {/* ROUTER AQUÍ */}
      </div>
    </main>
  );
};

export default Home;
