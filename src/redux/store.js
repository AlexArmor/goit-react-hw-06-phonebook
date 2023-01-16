import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedContactReducer = persistReducer(persistConfig, contactReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store)