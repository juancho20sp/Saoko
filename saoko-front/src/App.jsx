import React, { useState } from 'react';
import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Constants
import { modalOptions } from './utils/modal/modal';

// Components
import { ProtectedRoute, Modal } from './components';

// Routes
import { routes } from './utils/routes/routes';

// Views
import { Login, Home, CreateAccount, Chats, Boards, Profile } from './views';

// Context
export const ModalContext = React.createContext();

function App() {
  // Modal
  const [isShowing, setIsShowing] = useState(false);
  const [modalType, setModalType] = useState(modalOptions.createChat);
  const [code, setCode] = useState('CODE TEST ON APP.JSX');

  return (
    <div className={styles.App}>
      <ModalContext.Provider value={{ setIsShowing }}>
        <BrowserRouter>
          <Routes>
            <Route exact path={routes.login.path} element={<Login />} />
            <Route
              exact
              path={routes.signIn.path}
              element={<CreateAccount />}
            />
            <Route element={<ProtectedRoute />}>
              <Route exact path={routes.home.path} element={<Home />} />
              <Route exact path={routes.profile.path} element={<Profile />} />

              <Route exact path={routes.chats.path} element={<Chats />} />
              <Route exact path={routes.boards.path} element={<Boards />} />
            </Route>

            <Route path='*' element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </BrowserRouter>

        <Modal
          isShowing={isShowing}
          type={modalType}
          code={code}
          setModalType={setModalType}
          setIsShowing={setIsShowing}
        />
      </ModalContext.Provider>
    </div>
  );
}

export default App;

// PROTECTED ROUTES
// https://dev.to/olumidesamuel_/implementing-protected-route-and-authentication-in-react-js-3cl4#:~:text=Protected%20Routes%20are%20routes%20that,based%20on%20a%20set%20condition.
