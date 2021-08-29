import styles from './App.module.scss';

import Layout1 from './pages/layout1/Layout1.js';
import Layout2 from './pages/layout2/Layout2.js';
import MultipleCheckboxList from './pages/multiple-checkbox-list/MultipleCheckboxList.js';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__answer}>
        <h1 className={styles.app__answerTitle}>
          請持續往下捲動，題目及回答分別為<br />
          Q1. Layout1, Layout2<br />
          Q2. 多選清單<br />
          Q3. 前端常用到的 CRUD API 規格<br />
        </h1>
      </div>
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
      <div className={styles.app__answer}>
        <h1 className={styles.app__answerTitle}>前端常用到的 CRUD API 規格</h1>
        <a
          target="_blank"
          href="https://www.evernote.com/shard/s456/sh/630c1a8d-87de-6e1e-ed2c-a275f672a174/b5fedc9daf829bef3d27ebcec221b000" rel="noreferrer"
        >
          前端常用到的 CRUD API 規格
        </a>
      </div>
    </div>
  );
}

export default App;
