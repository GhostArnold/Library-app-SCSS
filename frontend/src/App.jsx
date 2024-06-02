import BooksForm from './components/BooksForm/BooksForm';
import BooksList from './components/BooksList/BooksList';
import Filter from './components/Filter/Filter';
import './App.css';
import styles from './header.module.scss';
function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <h1>Book Library App</h1>
      </header>
      <main>
        <div>
          <BooksForm />
        </div>
        <div>
          <Filter />
          <BooksList />
        </div>
      </main>
    </div>
  );
}

export default App;
