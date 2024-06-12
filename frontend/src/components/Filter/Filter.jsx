import { useSelector, useDispatch } from 'react-redux';
import { selectTitleFilter } from '../../redux/slices/filterSlice';
import { setTitleFilter } from '../../redux/slices/filterSlice';
import styles from './Filter.module.scss';
const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const handleTitleChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  return (
    <div className={styles.appBlock}>
      <h1>Filter</h1>
      <div className={styles.mainBlock}>
        <input
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={handleTitleChange}
        />
        <input type="text" placeholder="Filter by author" />
      </div>
    </div>
  );
};

export default Filter;
