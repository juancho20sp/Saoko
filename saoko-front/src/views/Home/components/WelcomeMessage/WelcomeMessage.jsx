import React from 'react';
import styles from './WelcomeMessage.module.scss';

const WelcomeMessage = () => {
  return (
    <div className={styles['welcomeMessage-main']}>
      <h4 className={styles['welcomeMessage-title']}>¡Bienvenido a SAOKO!</h4>
      <p className={styles['welcomeMessage-content']}>
        La plataforma que te permitirá comunicarte en tiempo real con tus
        compañeros y usar diferentes herramientas para facilitar el trabajo en
        equipo
      </p>

      <button className={styles['welcomeMessage-button']}>
        Empieza a chatear
      </button>
    </div>
  );
};

export default WelcomeMessage;
