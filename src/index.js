import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./global-style";
import { FirebaseContext } from "./context/firebase";

import { seedDatabase } from './seed';

const config = {
  apiKey: "AIzaSyD_tJDABlClKX84bBYk9Uzgoe8Zvig-XNI",
  authDomain: "netflix-e7bb5.firebaseapp.com",
  databaseURL: "https://netflix-e7bb5-default-rtdb.firebaseio.com",
  projectId: "netflix-e7bb5",
  storageBucket: "netflix-e7bb5.appspot.com",
  messagingSenderId: "917475057788",
  appId: "1:917475057788:web:32ea043080f973a49069f9",
  measurementId: "G-0DJ5RJWNNM"
}

const firebase = window.firebase.initializeApp(config);


ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);