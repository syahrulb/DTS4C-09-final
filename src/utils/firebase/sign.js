import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
export const signingIn = (email, password) => async () => {
  try {
    const userClient = await signInWithEmailAndPassword(auth, email, password)
    return userClient.user
  } catch (error) {
    return error
  }
}
