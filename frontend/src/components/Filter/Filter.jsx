import styles from './Filter.module.scss';
const Filter = () => {
  return (
    <div className={styles.appBlock}>
      <h1>Filter</h1>
      <div>
        <input type="text" placeholder="Filter by title" />
      </div>
    </div>
  );
};

export default Filter;
