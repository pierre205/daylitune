import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDEB8OYJljeMbAmcfFgL2To_a-9GMaL7k",
  authDomain: "dailytune-b6244.firebaseapp.com",
  projectId: "dailytune-b6244",
  storageBucket: "dailytune-b6244.appspot.com",
  messagingSenderId: "27313058366",
  appId: "1:27313058366:web:b624ae8c8d5a5e16cb176f"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };