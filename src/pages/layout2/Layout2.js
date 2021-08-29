import styles from './style.module.scss';

function Layout2() {
  return (
    <div className={styles.layout2}>
      <div className={styles.layout2__header}>
        <h1 className={styles.layout2__title}>Header</h1>
      </div>

      <div className={styles.layout2__leftSidebar}>
        <h1 className={styles.layout2__title}>Left Sidebar</h1>
      </div>
      <div className={styles.layout2__content}>
        <h1 className={styles.layout2__title}>Scroll Content</h1>
        <div className={styles.layout2__higherThanContent}></div>
      </div>

      <div className={styles.layout2__footer}>
        <h1 className={styles.layout2__title}>Footer</h1>
      </div>
    </div>
  )
}

export default Layout2;
