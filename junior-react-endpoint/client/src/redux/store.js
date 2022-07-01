import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import switchCurrencyReducer from './switchCurrencyReducer';
import itemIdReducer from './itemIdReducer';
import chooseAttributeReducer from './chooseAttributeReducer';
import totaItemsQuantityReducer from './totaItemsQuantityReducer';

const reducers = combineReducers({
  currency: switchCurrencyReducer,
  itemIdent: itemIdReducer,
  chooseAttr: chooseAttributeReducer,
  quantity: totaItemsQuantityReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['quantity', 'counter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
