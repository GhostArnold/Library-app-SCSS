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
  //  это хук, предоставляемый библиотекой react-redux, который позволяет компонентам React получать данные из хранилища Redux.
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

  return (
    <div className={styles.appBlock}>
      <h1>Books list: </h1>
      {/* Делаем проверку. Если длинна массива равна ноль, то отображаем  "Not books avaliable", иначе выводим список книг с помощью map*/}
      {books.length === 0 ? (
        <h3>Not books avaliable</h3>
      ) : (
        <ul>
          {booksFiltered.map((book, i) => {
            return (
              <li key={book.id}>
                <div className={styles.bookInfo}>
                  <div>
                    {++i}. {book.title} by <strong>{book.author}</strong>
                  </div>
                  <div className={styles.icons}>
                    <div
                      onClick={() => onToggleFavoriteHandler(book.id)}
                      className={styles.favorite}
                    >
                      {/* Избранное */}
                      {book.isFavorite === false ? (
                        <BsBookmark className={styles.favoriteIcon} />
                      ) : (
                        <BsBookmarkFill className={styles.favoriteIcon} />
                      )}
                      {/* Удаление */}
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
