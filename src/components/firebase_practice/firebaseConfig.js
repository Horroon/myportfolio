import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyAeJ33XJl-0YF_pfecPEmnGgAai_fiVZ6A",
    authDomain: "testphaseapp.firebaseapp.com",
    databaseURL: "https://testphaseapp.firebaseio.com",
    projectId: "testphaseapp",
    storageBucket: "testphaseapp.appspot.com",
    messagingSenderId: "379506126087",
    appId: "1:379506126087:web:e2517705fbce4f2fa0e9a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase