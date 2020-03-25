import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Component/Header/Header';
import * as firebase from 'firebase';
import './App.css'
const firebaseConfig = {
  apiKey: "AIzaSyDMY4mf62u8jXfxTBWzbYErH1Qj6sdr3ac",
  authDomain: "trillo-f5b00.firebaseapp.com",
  databaseURL: "https://trillo-f5b00.firebaseio.com",
  projectId: "trillo-f5b00",
  storageBucket: "trillo-f5b00.appspot.com",
  messagingSenderId: "822040318359",
  appId: "1:822040318359:web:5fa40699d91e2232fff4d2",
  measurementId: "G-KY0LZP232E"
};


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        
      </div>
    </Provider>
  );
}

export default App;
