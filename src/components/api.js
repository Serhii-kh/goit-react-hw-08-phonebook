import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CONTACTS_URL = 'https://connections-api.herokuapp.com/contacts';
const USERS_URL = 'https://connections-api.herokuapp.com/users';

const contactsInstance = axios.create({
  baseURL: CONTACTS_URL,
});
const usersInstance = axios.create({
  baseURL: USERS_URL,
});

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
// const setToken = (token) => {

// }
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (body, thunkAPI) => {
    try {
      const { data } = await usersInstance.post('/signup', body);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const signUp = async body => {
//   try {
//     const { data } = await usersInstance.post('/signup', body);
//     console.log(data);
//     console.log(data.token);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await usersInstance.post('/login', body);
    console.log(data.token);
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue(e.message);
  }
});

