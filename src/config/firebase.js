import * as firebase from 'firebase';
export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHGD7dFObCehnk6n9KfN8IxqXgFKHsfTg",
    authDomain: "meetupaapp.firebaseapp.com",
    databaseURL: "https://meetupaapp.firebaseio.com",
    projectId: "meetupaapp",
    storageBucket: "meetupaapp.appspot.com",
    messagingSenderId: "278497241987"

})

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();

export default firebase;
