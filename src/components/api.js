import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://6488c5720e2469c038fe5586.mockapi.io/contacts';
const CONTACTS_URL = 'https://connections-api.herokuapp.com/contacts';
// const USERS_URL = 'https://connections-api.herokuapp.com/users';


const contactsInstance = axios.create({
	baseURL: CONTACTS_URL,
})

// const CONTACTS = '/contacts'
// const USERS = '/users'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactsInstance('/');
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await contactsInstance.post('/', contact);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await contactsInstance.delete(`/${contactId}`);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
