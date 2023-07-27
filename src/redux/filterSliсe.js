import { createSlice } from '@reduxjs/toolkit';

const filterSlise = createSlice({
  name: 'contactList',
  initialState: {
    filter: '',
  },
  reducers: {
    addFilter(state, action) {
      state.filter = action.payload;
    }
  },
}); 

export const { addFilter } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;

