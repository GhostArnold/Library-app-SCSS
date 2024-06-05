import { useState } from 'react';
// Импорт действий
import { addBook } from '../../redux/Books/actionCreators';
// Импорт диспатч хука
import { useDispatch } from 'react-redux';
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
    };

    // Если title и author заполнены чем-то
    if (title && author) {
      //Отправляем изменения
      dispatch(addBook(book));

      // После диспатча обнуляем инпуты
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className={` ${styles.appBlock} ${styles.bookForm}`}>
      <h1>Add a new Book</h1>
      <form onSubmit={onSubmitHandler} className={styles}>
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
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
