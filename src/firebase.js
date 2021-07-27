import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyC3E-BUmfu-Gck3G3qBu-hvApUNr6SHNRg",
  authDomain: "react-contact-a1a83.firebaseapp.com",
  databaseURL: "https://react-contact-a1a83-default-rtdb.firebaseio.com",
  projectId: "react-contact-a1a83",
  storageBucket: "react-contact-a1a83.appspot.com",
  messagingSenderId: "867876835770",
  appId: "1:867876835770:web:604fb145b343ec02ca0d83",
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
