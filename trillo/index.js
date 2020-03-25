const admin = require('firebase-admin');
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// var Timestamp = require('time-stamp');
firebase.initializeApp({
    apiKey: 'AIzaSyDMY4mf62u8jXfxTBWzbYErH1Qj6sdr3ac',
    authDomain: 'trillo-f5b00.firebaseapp.com',
    projectId: 'trillo-f5b00'
});
var db = firebase.firestore();

var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

