import React from 'react';

// Components
import { Layout, RoomCard } from '../../components';

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

const Chats = () => {
  return (
    <Layout>
      <main className={styles['chats-container']}>
        {cards.map((card) => (
          <RoomCard key={card.id} {...card} />
        ))}
      </main>
    </Layout>
  );
};

export default Chats;
