import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: (builder) => {
    builder.addCase(setFilterData, (state, action) => {
      state = action.payload;
    });
  },
});

export const { setFilterData } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
