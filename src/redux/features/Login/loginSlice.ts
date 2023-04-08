/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  dark: boolean;
}

const initialState: InitialState = {
  dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
