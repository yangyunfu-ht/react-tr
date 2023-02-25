import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'pageSlice',
  initialState: {
    currentPage: 1,
    pageSize: 10,
  },
  reducers: {
    changeCurrentPage: (state) => {
      state.currentPage += 1
    },
    changePageSize: (state) => {
      state.pageSize += 10
    }
  }
})

export const { changeCurrentPage, changePageSize } = pageSlice.actions

export default pageSlice.reducer