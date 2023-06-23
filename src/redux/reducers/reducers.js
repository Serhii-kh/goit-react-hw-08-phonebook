import { ContactsListSlice } from 'redux/slices/contactsListSlice';
import { FilterSlice } from 'redux/slices/FilterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from 'redux/slices/authSlice';

export const rootReducer = combineReducers({
  contacts: ContactsListSlice.reducer,
  filter: FilterSlice.reducer,
  auth: authReducer,
});
