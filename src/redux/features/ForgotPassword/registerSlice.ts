import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  user: unknown;
  token: string | null;
}

const initialState: InitialState = {
  user: {},
  token: null,
};

// const login = createAsyncThunk('user/login', async () => {});

const themeSlice = createSlice({
  name: 'user/login',
  initialState,
  reducers: {},
  extraReducers() {},
});

export default themeSlice.reducer;
