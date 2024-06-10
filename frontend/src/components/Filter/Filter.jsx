import styles from './Filter.module.scss';
const Filter = () => {
  return (
    <div className={styles.appBlock}>
      <h1>Filter</h1>
      <div className={styles.mainBlock}>
        <input type="text" placeholder="Filter by title" />
        <input type="text" placeholder="Filter by author" />
      </div>
    </div>
  );
};

export default Filter;
