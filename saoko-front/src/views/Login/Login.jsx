import React from 'react';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <main className={styles['login-main']}>
      <div className={styles['login-container']}>
        <h1 className={styles['login-title']}>Saoko</h1>

        <form className={styles['login-form']}>
          <div className={styles['login-formRow']}>
            <label htmlFor='loginEmailInput'>Email</label>
            <input
              type='text'
              id='loginEmailInput'
              placeholder='mail@mail.com'
              className={styles['login-input']}
            />
          </div>

          <div className={styles['login-formRow']}>
            <label htmlFor='loginPasswordInput'>Password</label>
            <input
              type='text'
              id='loginPasswordInput'
              placeholder='PASSWORD'
              className={styles['login-input']}
            />
          </div>

          <div className={styles['login-formRow_actions']}>
            <button className={styles['login-button']}>Sign in</button>
            <button className={styles['login-button']}>Log in</button>
          </div>
        </form>

        <div className={styles['login-links']}>
          <a className={styles['login-link']}>Forgot your password?</a>
        </div>
      </div>
    </main>
  );
};

export default Login;
