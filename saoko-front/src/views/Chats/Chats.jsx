import React, { useContext } from 'react';
import { ModalContext } from '../../App';

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

const addRoomClick = (setIsShowing) => {
  console.log('Adding room...');
  setIsShowing((isShowing) => !isShowing);
};

const Chats = () => {
  const { setIsShowing } = useContext(ModalContext);

  return (
    <Layout>
      <main className={styles['chats-container']}>
        {cards.map((card) => (
          <RoomCard key={card.id} {...card} />
        ))}
        <AddRoom handleClick={() => addRoomClick(setIsShowing)} />
      </main>
    </Layout>
  );
};

export default Chats;
