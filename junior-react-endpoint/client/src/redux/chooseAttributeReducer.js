import { createSlice } from '@reduxjs/toolkit';

const chooseAttributeReducer = createSlice({
  name: 'chooseAttr',
  initialState: {
    sizeBtn: [''],
    colorBtn: [''],
  },
  reducers: {
    rememberSizeChoose: (state, action) => {
      state.sizeBtn.push(action.payload);
      state.sizeBtn.shift();
    },

    rememberColorChoose: (state, action) => {
      state.colorBtn.push(action.payload);
      state.colorBtn.shift();
    },
  },
});

export const { rememberSizeChoose, rememberColorChoose} =
  chooseAttributeReducer.actions;

export default chooseAttributeReducer.reducer;
