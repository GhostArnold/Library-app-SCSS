import { useSelector, useDispatch } from 'react-redux';
//  Импортируем селекторы состояния из файла filterSlice для получения текущих фильтров
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from '../../redux/slices/filterSlice';
// Импортируем экшены для изменения состояния фильтров
import {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
} from '../../redux/slices/filterSlice';
import styles from './Filter.module.scss';
const Filter = () => {
  const dispatch = useDispatch();
  // Получаем текущие значения фильтров используя селекторы и хук useSelector
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoriteFilter);
  // Обработчик изменения поля фильтра по названию
  const handleTitleChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  // Обработчик изменения поля фильтра по автору
  const handleAuthorChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  // Обработчик избранного
  const handleFavoriteChange = () => {
    dispatch(setFavoriteFilter());
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
        <label>
          <input
            type="checkbox"
            checked={favoriteFilter}
            onChange={handleFavoriteChange}
          />
          Only Favorite
        </label>
      </div>
    </div>
  );
};

export default Filter;
