import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name: ''
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBySAnmount: (state, action: { payload: { value: number, name: string } }) => {
      state.value += action.payload.value;
      state.name = action.payload.name;
    }
  }
})

export const { increment, decrement, incrementBySAnmount } = counterSlice.actions

export default counterSlice.reducer