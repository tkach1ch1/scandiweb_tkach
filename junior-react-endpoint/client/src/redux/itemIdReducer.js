import { createSlice } from '@reduxjs/toolkit';

const itemIdReducer = createSlice({
    name: 'itemIdent',
    initialState: {
        identificator: [],
    },
    reducers: {
        itemAddedId: (state, action) => {
            state.identificator.push(action.payload)
        }
    }
})

export const {itemAddedId} = itemIdReducer.actions

export default itemIdReducer.reducer