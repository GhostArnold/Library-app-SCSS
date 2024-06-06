import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../../redux/Books/actionCreators';
import styles from './BooksList.module.scss';
const BooksList = () => {
  //  это хук, предоставляемый библиотекой react-redux, который позволяет компонентам React получать данные из хранилища Redux.
  // books - название редьюсера
  const books = useSelector((state) => state.books);

  // Хук Dispatch
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className={styles.appBlock}>
      <h1>Books list: </h1>
      {/* Делаем проверку. Если длинна массива равна ноль, то отображаем  "Not books avaliable", иначе выводим список книг с помощью map*/}
      {books.length === 0 ? (
        <h3>Not books avaliable</h3>
      ) : (
        <ul>
          {books.map((book, i) => {
            return (
              <li key={book.id}>
                <div className={styles.bookInfo}>
                  <div>
                    {++i}. {book.title} by {book.author}
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
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BooksList;
