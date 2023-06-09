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

const loginSlice = createSlice({
  name: 'user/login',
  initialState,
  reducers: {},
  extraReducers() {},
});

export default loginSlice.reducer;
