import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const signingUp = async (email, password) => {
  try {
    const userClient = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userClient.user
  } catch (error) {
    console.log(error)
    return error
  }
}