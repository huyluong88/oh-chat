import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD0W5YE76MsuFswMayPGshqxQ_faD8RBhQ",
    authDomain: "oh-chat-9f0dc.firebaseapp.com",
    databaseURL: "https://oh-chat-9f0dc.firebaseio.com",
    storageBucket: "oh-chat-9f0dc.appspot.com",
    messagingSenderId: "964489432502"
  };
firebase.initializeApp(config);

 export default firebase
