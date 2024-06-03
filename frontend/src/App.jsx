import BooksForm from './components/BooksForm/BooksForm';
import BooksList from './components/BooksList/BooksList';
import Filter from './components/Filter/Filter';
// header
import headerStyles from './BasicsComponents/Header.module.scss';
// main
import mainStyles from './BasicsComponents/Main.module.scss';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className={headerStyles.header}>
        <h1>Book Library App</h1>
      </header>
      <main className={mainStyles.main}>
        <div className={mainStyles.leftColumn}>
          <BooksForm />
        </div>
        <div className={mainStyles.rightColumn}>
          <Filter />
          <BooksList />
        </div>
      </main>
    </div>
  );
}

export default App;
