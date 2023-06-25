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
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await contactsInstance.post('/', contact);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
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

export const setToken = token => {
  usersInstance.defaults.headers.common['Authorization'] = token;
  contactsInstance.defaults.headers.common['Authorization'] = token;
};

export const deleteToken = () => { 
	delete usersInstance.defaults.headers.common['Authorization'];
  delete contactsInstance.defaults.headers.common['Authorization'];
 }

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, thunkAPI) => {
    try {
      const { data } = await usersInstance.post('/signup', body);
      // console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  'auth/profile',
  async thunkAPI => {
    try {
      const { data } = await usersInstance('/current');
      // console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await usersInstance.post('/login', body);
      if ('token' in data) setToken(`Bearer ${data.token}`);
      dispatch(getProfileThunk());
      return data;
    } catch (e) {
      // console.log(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
			return await usersInstance.post('/logout');
    } catch (e) {
      console.log(e);
    }
  }
);
