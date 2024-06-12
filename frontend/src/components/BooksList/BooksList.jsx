import { useDispatch, useSelector } from 'react-redux';
// Иконки избранного
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { deleteBook, toggleFavorite } from '../../redux/Books/actionCreators';
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from '../../redux/slices/filterSlice';
import styles from './BooksList.module.scss';

const BooksList = () => {
  // это хук, предоставляемый библиотекой react-redux, который позволяет компонентам React получать данные из хранилища Redux.
  // books - название редьюсера
  const books = useSelector((state) => state.books);
  // Получаем текущие значения фильтров используя селекторы и хук useSelector
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoriteFilter);
  // Хук Dispatch
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteBook(id));
  };
  const onToggleFavoriteHandler = (id) => {
    dispatch(toggleFavorite(id));
  };

  // Функция для отфильтровки книг
  const booksFiltered = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      book.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
      // Если чекбокс true, то фильтруем
      (favoriteFilter ? book.isFavorite : true)
    );
  });

  const highlightText = (text, filter) => {
    // Если filter пустой, возвращаем оригинальный текст
    if (!filter) return text;

    // Создаем регулярное выражение, которое ищет вхождения filter без учета регистра (флаги 'gi' обозначают глобальный поиск и поиск без учета регистра)
    const regex = new RegExp(`(${filter})`, 'gi');

    // Разбиваем текст на части, используя регулярное выражение, и затем обрабатываем каждую часть
    return text.split(regex).map((substring, i) =>
      // Если часть текста совпадает с filter (без учета регистра), оборачиваем её в <span> с особым классом для подсветки
      substring.toLowerCase() === filter.toLowerCase() ? (
        <span key={i} className={styles.highlight}>
          {substring}
        </span>
      ) : (
        // Если нет, оставляем часть текста без изменений
        substring
      )
    );
  };

  return (
    <div className={styles.appBlock}>
      <h1>Books list: </h1>
      {books.length === 0 ? (
        <h3>Not books available</h3>
      ) : (
        <ul>
          {booksFiltered.map((book, i) => {
            return (
              <li key={book.id}>
                <div className={styles.bookInfo}>
                  <div>
                    {++i}. {highlightText(book.title, titleFilter)} by{' '}
                    <strong>{highlightText(book.author, authorFilter)}</strong>
                  </div>
                  <div className={styles.icons}>
                    <div
                      onClick={() => onToggleFavoriteHandler(book.id)}
                      className={styles.favorite}
                    >
                      {book.isFavorite === false ? (
                        <BsBookmark className={styles.favoriteIcon} />
                      ) : (
                        <BsBookmarkFill className={styles.favoriteIcon} />
                      )}
                    </div>
                    <div>
                      <button
                        onClick={() => onDeleteHandler(book.id)}
                        className={styles.btnDelete}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BooksList;
