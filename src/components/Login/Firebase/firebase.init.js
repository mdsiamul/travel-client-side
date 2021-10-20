import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inisializeAuthentication = () => { initializeApp(firebaseConfig); }

export default inisializeAuthentication;