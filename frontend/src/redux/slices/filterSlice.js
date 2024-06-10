import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
  },
});
console.log(filterSlice.actions);
console.log(filterSlice.actions.setTitleFilter());

export default filterSlice;
