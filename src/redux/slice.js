import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'Filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
