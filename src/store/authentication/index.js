import { createSlice } from '@reduxjs/toolkit'
const authentication = createSlice({
  name: 'auth',
  initialState: { isLogin: false },
  reducers: {
    declareUuid: (state, action) => (state.isLogin = action.payload),
    logout: state => (state.isLogin = false)
  }
})
export const { declareUuid, logout } = authentication.actions
export default authentication.reducer
