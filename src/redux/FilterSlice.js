import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from './constants';

export const FilterSlice = createSlice({
  name: FILTER,
  initialState: '',

  reducers: {
    addFilterText(state, {payload}) {
      return state = payload;
    },
  },
});

export const { addFilterText } = FilterSlice.actions;
export const getFilterValue = state => state.filter;