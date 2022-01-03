import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'to be fixed';

export const login = createAsyncThunk('auth/login', async (state, action) => {
  const data = await fetch(`${url}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state),
  });
  const json = await data.json();
  return json;
});

export const register = createAsyncThunk(
  'auth/register',
  async (state, action) => {
    const data = await fetch(`${url}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state),
    });
    const json = await data.json();
    return json;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    //for testing purposes, fix this later
    isAuth: localStorage.getItem('fullMoonAuthToken') ? true : true,
    hasError: false,
    token: localStorage.getItem('fullMoonAuthToken') || '',
    errorMsg: '',
    isLoading: false,
  },
  reducers: {
    clearAuth: () => {
      localStorage.removeItem('fullMoonAuthToken');
      return { isAuth: false, hasError: false, token: '' };
    },
    resetError: (state, action) => {
      state.errorMsg = '';
      state.hasError = '';
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isAuth = false;
      state.hasError = false;
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (action.payload.success) {
        state.token = action.payload.token;
        localStorage.setItem('fullMoonAuthToken', action.payload.token);
        state.isAuth = true;
        state.hasError = false;
      } else {
        state.hasError = true;
        state.errorMsg =
          'We were unable to authenticate you. Please check your credentials and try again';
      }
    },
    [login.rejected]: (state, action) => {
      state.hasError = true;
      state.errorMsg =
        'There appears to be a problem with the server, please try again later.';
      state.isLoading = false;
    },
    // register reducers
  },
});

export const { clearAuth, resetError } = authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectIsAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => {
  const hasError = state.auth.hasError;
  const errorMsg = state.auth.errorMsg;
  return { hasError, errorMsg };
};

export default authSlice.reducer;
