import styles from './App.module.scss';

import { Login, Home } from './views';

function App() {
  return (
    <div className={styles.App}>
      <Home />
    </div>
  );
}

export default App;
