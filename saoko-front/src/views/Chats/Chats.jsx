import React from 'react';

// Components
import { Layout, RoomCard, AddRoom } from '../../components';

import styles from './Chats.module.scss';

const cards = [
  {
    id: 0,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 1,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 2,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 3,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 4,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 5,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 2,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 3,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 4,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 5,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 2,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 3,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 4,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 5,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 2,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 3,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 4,
    name: 'Chat 1',
    path: 'chat-one',
  },
  {
    id: 5,
    name: 'Chat 1',
    path: 'chat-one',
  },
];

const addRoomClick = () => {
  console.log('Adding room...');
};

const Chats = () => {
  return (
    <Layout>
      <main className={styles['chats-container']}>
        {cards.map((card) => (
          <RoomCard key={card.id} {...card} />
        ))}
        <AddRoom handleClick={addRoomClick} />
      </main>
    </Layout>
  );
};

export default Chats;
