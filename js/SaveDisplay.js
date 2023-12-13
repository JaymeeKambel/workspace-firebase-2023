// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// ***** Use your configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZIAVnBvB-GHlaDDO2GbOFjQhVvleb344",
  authDomain: "database2023test.firebaseapp.com",
  projectId: "database2023test",
  storageBucket: "database2023test.appspot.com",
  messagingSenderId: "352598568614",
  appId: "1:352598568614:web:b1acd2e65514f8050f8e67",
  measurementId: "G-6EF9ZJX352"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//global variable
var currentuser="";
var currentemail = "";

//check if the user is logged in or out
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    currentuser= user.displayName;
    currentemail = user.email;
    console.log("Logged in ", currentuser,currentemail);
  }else{
    console.log("Use is logged out");
    window.location.href="Login.html";
  }
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
 



});
