import { useSelector, useDispatch } from 'react-redux';
import {
  selectTitleFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice';
import {
  setTitleFilter,
  setAuthorFiltter,
} from '../../redux/slices/filterSlice';
import styles from './Filter.module.scss';
const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const handleTitleChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorChange = (e) => {
    dispatch(setAuthorFiltter(e.target.value));
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
        <input
          type="text"
          placeholder="Filter by author"
          value={authorFilter}
          onChange={handleAuthorChange}
        />
      </div>
    </div>
  );
};

export default Filter;
