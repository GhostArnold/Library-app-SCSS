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

    // В случае нераспознанного действия возвращаем текущее состояние
    default:
      return state;
  }
};
export default booksReducer;
