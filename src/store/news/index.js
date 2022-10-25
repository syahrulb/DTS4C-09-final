import { createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'
import { apiKey } from 'utils/axios'
const news = createSlice({
  name: 'news',
  initialState: {
    totalNews: 0,
    isLoading: false,
    news: [],
    singleNews: {},
    higlightNews: {},
    params: {
      sources: 'fullcomment',
      limit: 10,
      offset: 0
    }
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload
      state.higlightNews = action.payload[0]
    },
    setSingleNews: (state, action) => (state.singleNews = action.payload),
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setTotalNews: (state, action) => {
      state.totalNews = action.payload
    }
  }
})

export const getNewsMediastack = () => async (dispatch, getState) => {
  const { actions } = news
  dispatch(actions.setLoading(true))
  await axios
    .get('', { params: { ...apiKey, ...getState().news.params } })
    .then(({ data }) => {
      dispatch(actions.setNews(data.data))
      dispatch(actions.setTotalNews(data.pagination.total))
      dispatch(actions.setLoading(false))
    })
    .catch(() => {
      dispatch(actions.setLoading(false))
    })
}
export const { setNew, setSingleNews } = news.actions
export default news.reducer
