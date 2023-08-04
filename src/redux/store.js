import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSliсe';
import { contactsReducer } from './contactsSliсe';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'contactStore',
  storage,
  blacklist: ['filter'],
};
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedFilterReducer = persistReducer(persistConfig, filterReducer);
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
