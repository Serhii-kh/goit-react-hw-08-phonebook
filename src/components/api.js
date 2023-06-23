import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const CONTACTS_URL = 'https://connections-api.herokuapp.com/contacts';
const USERS_URL = 'https://connections-api.herokuapp.com/users';

export const getIsAuth = state => state.auth.access_token;

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
  'contacts/addContact',
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
};

// export const signUp = async body => {
//   try {
//     return await usersInstance.post('/signup', body);
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const signUpThunk = createAsyncThunk(
//   'auth/signUp',
//   async (body, thunkAPI) => {
//     try {
//       const { data } = await signUp(body);
//       console.log(data);
//       return data;
//     } catch (e) {
//       console.log(e);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, thunkAPI) => {
    try {
      const { data } = await usersInstance.post('/signup', body);
      console.log(data);
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
      console.log('yours profile getted successfully!');
      console.log(data);
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
      console.log('you are logged and we set profile!');
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);
