import styles from './App.module.scss';

import Layout1 from './pages/layout1/Layout1.js';
import Layout2 from './pages/layout2/Layout2.js';
import MultipleCheckboxList from './pages/multiple-checkbox-list/MultipleCheckboxList.js';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__answer}>
        <h1 className={styles.app__answerTitle}>Layout1</h1>
        <Layout1 />
      </div>
      <div className={styles.app__answer}>
        <h1 className={styles.app__answerTitle}>Layout2</h1>
        <Layout2 />
      </div>
      <div className={styles.app__answer}>
        <h1 className={styles.app__answerTitle}>多選清單</h1>
        <MultipleCheckboxList />
      </div>
    </div>
  );
}

export default App;
