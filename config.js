import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCy44yo_qXFxtyM7pLqENrS0q5hUua2UYE",
    authDomain: "booksanta-178d8.firebaseapp.com",
    projectId: "booksanta-178d8",
    storageBucket: "booksanta-178d8.appspot.com",
    messagingSenderId: "176778032822",
    appId: "1:176778032822:web:dee8563d880d8edd1d5817"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()