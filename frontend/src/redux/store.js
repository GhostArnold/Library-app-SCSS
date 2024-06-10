import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/reducer';
import filterSlice from './slices/filterSlice';
// configureStore принимает объект конфигурации. В этом объекте указываем ключ reducer, который содержит объект всех редьюсеров, используемых в приложении.
const store = configureStore({
  // Указываем объект с редьюсерами
  reducer: {
    // Наш редьюсер
    books: booksReducer,
    filter: filterSlice,
  },
});
export default store;
