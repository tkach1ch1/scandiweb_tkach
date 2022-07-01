import { createSlice } from '@reduxjs/toolkit';

const totalItemsQuantityReducer = createSlice({
  name: 'quantity',
  initialState: {
    total: {},
  },
  reducers: {
    addItemToBasket: (state, action) => {
      const currentItems = {
        ...state.total,
        [action.payload.id +
        (action.payload.selectedSize + action.payload.selectedColor)]: !state
          .total[
          action.payload.id +
            (action.payload.selectedSize + action.payload.selectedColor)
        ]
          ? [action.payload]
          : [
              ...state.total[
                action.payload.id +
                  (action.payload.selectedSize + action.payload.selectedColor)
              ],
              action.payload,
            ],
      };

      state.total = currentItems;
    },
  },
});

export const { addItemToBasket, deleteItemFromBasket, increaseItemInBasket } =
  totalItemsQuantityReducer.actions;

export default totalItemsQuantityReducer.reducer;
