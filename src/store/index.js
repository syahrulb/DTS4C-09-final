import { configureStore } from '@reduxjs/toolkit'
import sidePanel from './sidePanel'
import authentication from './authentication'
export const store = configureStore({
  reducer: {
    sidePanel,
    authentication
  }
})
