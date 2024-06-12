import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние фильтров
const initialState = {
  title: '',
  author: '',
  isFavorite: false,
};
// Создаем slice (порцию состояния) для фильтров
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Редьюсер для установки фильтра по заголовку
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    // Редьюсер для установки фильтра по автору
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    setFavoriteFilter: (state) => {
      state.isFavorite = !state.isFavorite;
    },
  },
});
// Экспорт экшенов
export const { setTitleFilter, setAuthorFilter, setFavoriteFilter } =
  filterSlice.actions;
// Селекторы для получения значений фильтров из состояния
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectFavoriteFilter = (state) => state.filter.isFavorite;
export default filterSlice.reducer;
