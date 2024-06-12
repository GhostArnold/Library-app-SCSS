import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние фильтров
const initialState = {
  title: '',
  author: '',
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
  },
});
// Экспорт экшенов
export const { setTitleFilter, setAuthorFilter } = filterSlice.actions;
// Селекторы для получения значений фильтров из состояния
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export default filterSlice.reducer;
