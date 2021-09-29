import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import setAuthToken from '../../utils/setAuthtoken';
import { fetchUser, loginUser, registerUser } from './authApi';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: true,
  user: null,
};

export const loadUser = createAsyncThunk('auth/loadUser', async () => {
  if (localStorage.getItem('token'))
    setAuthToken(localStorage.getItem('token'));

  return await fetchUser();
});

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }) => {
    return await registerUser({ name, email, password });
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    return await loginUser({ email, password });
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteAccount: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.user = null;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(loadUser.rejected, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        localStorage.removeItem('token');
        state.token = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(login.rejected, (state) => {
        localStorage.removeItem('token');
        state.token = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const authState = (state) => state.auth;

export const { logout, deleteAccount } = authSlice.actions;

export default authSlice.reducer;
