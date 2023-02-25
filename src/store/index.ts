import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "@/features/counterSlice"
import pageSlice from '@/features/pageSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pageer: pageSlice
  }
})

export default store

