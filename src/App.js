import styles from './App.module.scss';

import Layout1 from './pages/layout1/Layout1.js';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__answer}>
        <h1 className={styles.app__answerTitle}>Layout1</h1>
        <Layout1 />
      </div>
    </div>
  );
}

export default App;
