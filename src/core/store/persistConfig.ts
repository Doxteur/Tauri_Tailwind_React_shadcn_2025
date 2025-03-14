import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import des reducers
import authReducer from '@/features/auth/authSlice';
import uiReducer from '@/features/ui/uiSlice';

// Configuration de redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Seul le state 'auth' sera persisté
};

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
