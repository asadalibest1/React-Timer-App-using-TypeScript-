importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyBbhfbSm308-S1M-WFeO4PzyB2azmQXCKw",
  authDomain: "pwa-quiz-app2.firebaseapp.com",
  databaseURL: "https://pwa-quiz-app2.firebaseio.com",
  projectId: "pwa-quiz-app2",
  storageBucket: "pwa-quiz-app2.appspot.com",
  messagingSenderId: "1078003486074",
  appId: "1:1078003486074:web:027a87d280b49eeaec9ac3",
  measurementId: "G-86GP3CB4N1"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();
