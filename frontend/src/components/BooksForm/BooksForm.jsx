import { useState } from 'react';
// Импорт действий
import { addBook } from '../../redux/Books/actionCreators';
// Импорт диспатч хука
import { useDispatch } from 'react-redux';
// Делаем импорт пакета для уникальных id
import { v4 as uuidv4 } from 'uuid';
// Делаем импорт объекта json
import booksData from '../../data/books.json';
import styles from './BooksForm.module.scss';
const BooksForm = () => {
  // Состояние поля title
  const [title, setTitle] = useState('');
  // Состояние поля author
  const [author, setAuthor] = useState('');

  // Хук для отправки данных в состояние
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    // Чтобы страница не перезагружалась
    e.preventDefault();
    // Объект, который мы добавляем в payload
    const book = {
      title: title,
      author: author,
      // Уникальный id
      id: uuidv4(),
    };

    // Если title и author заполнены чем-то
    if (title && author) {
      // alert(book.id.toString());
      //Отправляем изменения
      dispatch(addBook(book));

      // После диспатча обнуляем инпуты
      setTitle('');
      setAuthor('');
    }
  };
  // Добавляем рандомную книгу
  const onAddRandomBookHandler = () => {
    // Рандомне число от 0 до длинны json()
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookWithID = {
      // Объект с title,author,year
      ...randomBook,
      // Добавляем id
      id: uuidv4(),
    };

    dispatch(addBook(randomBookWithID));
  };
  return (
    <div className={` ${styles.appBlock} ${styles.bookForm}`}>
      <h1>Add a new Book</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter the title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            placeholder="Enter the author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={onAddRandomBookHandler}>
          Add Random
        </button>
      </form>
    </div>
  );
};

export default BooksForm;
