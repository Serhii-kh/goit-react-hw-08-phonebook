import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, signUp } from 'components/api';

export const loginThunk = createAsyncThunk('auth/login', body => logIn(body));
export const signUpThunk = createAsyncThunk('auth/signUp', body =>
  signUp(body)
);
