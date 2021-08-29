import styles from './style.module.scss';

function Layout1() {
  return (
    <div className={styles.layout1}>
      <div className={styles.layout1__header}>
        <h1 className={styles.layout1__title}>Header</h1>
      </div>

      <div className={styles.layout1__body}>
        <div className={styles.layout1__leftSidebar}>
          <h1 className={styles.layout1__title}>Left Sidebar</h1>
        </div>
        <div className={styles.layout1__content}>
          <h1 className={styles.layout1__title}>Scroll Content</h1>
          <div className={styles.layout1__higherThanContent}></div>
        </div>
      </div>

      <div className={styles.layout1__footer}>
        <h1 className={styles.layout1__title}>Footer</h1>
      </div>
    </div>
  )
}

export default Layout1;
