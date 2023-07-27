import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

// export const logIn = createAsyncThunk(
//     'auth/login',
//     async(credentials, thunkAPI) = {}
// );

// export const logOut = createAsyncThunk(
//     'auth/logout',
//     async(_, thunkAPI) = {}
// );

// export const refreshUser = createAsyncThunk(
//     'auth/refresh',
//     async(_, thunkAPI) = {}
// );

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
     } 
    // if (persistedToken === null) {
    //   // If there is no token, exit without performing any request
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }

    setAuthHeader(token);
    try {
      // If there is a token, add it to the HTTP header and perform the request
      // setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
