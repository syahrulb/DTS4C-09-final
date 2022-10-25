import { configureStore } from '@reduxjs/toolkit'
import sidePanel from './sidePanel'
import authentication from './authentication'
import news from './news'
import snackbars from './snackbars'
export const store = configureStore({
  reducer: {
    sidePanel,
    authentication,
    news,
    snackbars
  }
})
