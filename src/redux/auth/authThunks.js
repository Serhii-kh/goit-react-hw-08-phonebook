import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn } from 'components/api';

export const loginThunk = createAsyncThunk('auth/login', body => logIn(body));
