import { createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'
import { apiKey } from 'utils/axios'
const news = createSlice({
  name: 'news',
  initialState: {
    news: [],
    singleNews: {},
    status: 'idle' // idle || loading || success || failed
  },
  reducers: {
    setNews: (state, action) => (state.news = action.payload),
    setSingleNews: (state, action) => (state.singleNews = action.payload)
  }
})

export const getNewsNytimes = () => async () => {
  try {
    const response = await axios.get('search/v2/articlesearch.json', { params: { ...apiKey } })
    return response
  } catch (error) {
    return error
  }
}
export const { setNew, setSingleNews } = news.actions
export default news.reducer
