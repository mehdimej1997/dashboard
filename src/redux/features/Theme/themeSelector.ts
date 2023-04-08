import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const theme = (state: RootState) => state.theme.dark;

export const selectTheme = createSelector(theme, (isDark) => isDark);
