import { createSlice } from '@reduxjs/toolkit'
const news = createSlice({
  name: 'news',
  initialState: { news: [], singleNews: {} },
  reducers: {
    setNews: (state, action) => (state.news = action.payload),
    setSingleNews: (state, action) => (state.singleNews = action.payload)
  }
})
export const { setNew, setSingleNewss } = news.actions
export default news.reducer
