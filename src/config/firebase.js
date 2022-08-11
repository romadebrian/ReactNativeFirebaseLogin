// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// import * as firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaIvVrU3wRCNjh46_qwImhxpc1iDiOAhY",
  authDomain: "react-native-push-notifi-46135.firebaseapp.com",
  projectId: "react-native-push-notifi-46135",
  storageBucket: "react-native-push-notifi-46135.appspot.com",
  messagingSenderId: "27449484769",
  appId: "1:27449484769:web:4c9e06c13dbd3f629c5ea0",
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const authentication = getAuth(app);

firebase.initializeApp(firebaseConfig);
export default firebase;
