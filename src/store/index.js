import { configureStore } from '@reduxjs/toolkit'
import sidePanel from './sidePanel'
export const store = configureStore({
  reducer: {
    sidePanel
  }
})
