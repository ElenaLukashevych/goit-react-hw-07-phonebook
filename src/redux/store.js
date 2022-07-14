import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsOperation';
import { filterSlice } from 'redux/slice';


export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

