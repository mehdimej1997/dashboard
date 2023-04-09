import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const auth = (state: RootState) => state.auth;

export const selectUser = createSelector(auth, (state) => state.user);
export const selectToken = createSelector(auth, (state) => state.token);
