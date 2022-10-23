import { onAuthStateChanged, signOut } from 'firebase/auth'
import { createSlice } from '@reduxjs/toolkit'
import { auth } from 'utils/firebase/firebase'

const authentication = createSlice({
  name: 'auth',
  initialState: { isLogin: false },
  reducers: {
    declareUuid: (state, action) => {
      state.isLogin = action.payload
    },
    logout: state => (state.isLogin = false)
  }
})
export const initLogin = cb => {
  onAuthStateChanged(auth, user => cb(user ? user.uid : false))
}
export const signingOut = () => async dispatch => {
  try {
    const signedOut = await signOut(auth)
    dispatch(authentication.actions.logout())
    return signedOut
  } catch (error) {
    return error
  }
}
export const { declareUuid, logout } = authentication.actions
export default authentication.reducer
