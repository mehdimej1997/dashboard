import { combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './features';

export const rootReducer = combineReducers({
  theme: themeReducer,
});
