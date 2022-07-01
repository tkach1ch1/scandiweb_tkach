import { createSlice } from '@reduxjs/toolkit';

const switchCurrencyReducer = createSlice({
  name: 'currency',
  initialState: {
    currencySign: ['$'],
    allCurrencies: [],
  },
  reducers: {
    switchCurrencySign: (state, action) => {
      state.currencySign.push(action.payload);
      state.currencySign.shift();
    },
    addAllCurrencies: (state, action) => {
        state.allCurrencies.push(action.payload)
    }
  },
});

export const { switchCurrencySign, addAllCurrencies } = switchCurrencyReducer.actions;

export default switchCurrencyReducer.reducer;
