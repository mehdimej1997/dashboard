import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer, themeReducer } from './features';

export const rootReducer = combineReducers({
  theme: themeReducer,
  auth: loginReducer,
});
