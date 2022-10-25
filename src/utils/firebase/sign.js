import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
export const signingIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(response => {
      return response
    })
    .catch(error => {
      throw new Error(error)
    })
}
