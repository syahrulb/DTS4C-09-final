import { signOut } from 'firebase/auth'
import { auth } from 'utils/firebase/firebase'

export const signingOut = async () => {
  return await signOut(auth)
    .then(() => {
      return true
    })
    .catch(error => {
      throw new Error(error)
    })
}
