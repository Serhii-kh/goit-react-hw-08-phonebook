import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from 'redux/helpers/contactsInitialState';
import {
  fetchContacts,
  postContact,
  deleteContactById,
} from 'components/API/api';
import {
  deleteContactFulfilled,
  fetchContactsFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
  postContactFulfilled,
} from '../helpers/contacts';

import { CONTACTS } from 'redux/helpers/constants';

export const ContactsListSlice = createSlice({
  name: CONTACTS,
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(postContact.fulfilled, postContactFulfilled)
      .addCase(deleteContactById.fulfilled, deleteContactFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const contactReducer = ContactsListSlice.reducer;
