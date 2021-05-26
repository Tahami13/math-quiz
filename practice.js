var firebaseConfig = {
    apiKey: "AIzaSyDhTIODzFtlxqHfA7EsHo0MfLUmENWVbQE",
    authDomain: "aarav-aaqx.firebaseapp.com",
    databaseURL: "https://aarav-aaqx-default-rtdb.firebaseio.com",
    projectId: "aarav-aaqx",
    storageBucket: "aarav-aaqx.appspot.com",
    messagingSenderId: "138991975168",
    appId: "1:138991975168:web:9d18e23eb59242fcf191e5",
    measurementId: "G-6ZMZLMGYQ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}