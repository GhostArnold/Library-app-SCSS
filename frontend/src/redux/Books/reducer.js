import * as actionTypes from './actionTypes';
const initialState = [];

// Редьюсер для управления состоянием книг (массив книг)
const booksReducer = (state = initialState, action) => {
  // Определяем, какое действие пришло
  switch (action.type) {
    // Если действие имеет тип ADD_BOOK, добавляем новую книгу в состояние
    case actionTypes.ADD_BOOK:
      // Возвращаем новое состояние, которое является копией текущего с добавленной новой книгой
      return [...state, action.payload];

    case actionTypes.DELETE_BOOK:
      // Функция фильтрации state.filter(...):
      //  Эта функция создаст новый массив, исключающий элементы, которые не удовлетворяют условию в функции обратного вызова. В данном случае она исключает книгу, идентификатор которой совпадает с action.payload.
      return state.filter((book) => book.id !== action.payload);

    case actionTypes.TOGGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );

    // В случае нераспознанного действия возвращаем текущее состояние
    default:
      return state;
  }
};
export default booksReducer;
