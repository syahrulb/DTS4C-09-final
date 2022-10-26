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
    },
    pickNews: {},
    keywords: ''
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload
      if (action.payload.length != 0) {
        state.isLoading = true
        state.higlightNews = action.payload[0]
      }
    },
    setSingleNews: (state, action) => (state.singleNews = action.payload),
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setTotalNews: (state, action) => {
      state.totalNews = action.payload
    },
    setKeyword: (state, action) => {
      state.keywords = action.payload
    },
    selectNews: (state, action) => {
      state.pickNews = action.payload
    }
  }
})

export const getNewsMediastack = () => async (dispatch, getState) => {
  const { actions } = news
  dispatch(actions.setLoading(true))
  await axios
    .get('', { params: { ...apiKey, ...getState().news.params, keywords: getState().news.keywords } })
    .then(({ data }) => {
      dispatch(actions.setNews(data.data))
      dispatch(actions.setTotalNews(data.pagination.total))
      dispatch(actions.setLoading(false))
    })
    .catch(() => {
      dispatch(actions.setLoading(false))
    })
}
export const { setNew, setSingleNews, selectNews, setKeyword } = news.actions
export default news.reducer
