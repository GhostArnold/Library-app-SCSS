import { useSelector } from 'react-redux';
import styles from './BooksList.module.scss';
const BooksList = () => {
  //  это хук, предоставляемый библиотекой react-redux, который позволяет компонентам React получать данные из хранилища Redux.
  // books - название редьюсера
  const books = useSelector((state) => state.books);
  return (
    <div className={styles.appBlock}>
      <h1>Books list: </h1>
      {/* Делаем проверку. Если длинна массива равна ноль, то отображаем  "Not books avaliable", иначе выводим список книг с помощью map*/}
      {books.length === 0 ? (
        <h3>Not books avaliable</h3>
      ) : (
        books.map((book, i) => {
          return (
            <ul>
              <li key={i}>
                <div>
                  {++i}. {book.title} by {book.author}
                </div>
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
};

export default BooksList;
