import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const listener = (cb) => {
  onAuthStateChanged(auth, (user) => cb(user ? user.uid : false));
}