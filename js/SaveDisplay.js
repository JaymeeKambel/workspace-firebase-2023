// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// ***** Use your configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsnv-Z9WcP43lCUHMMVJCQsNYVbDfrRw",
  authDomain: "jayproject-7751f.firebaseapp.com",
  projectId: "jayproject-7751f",
  storageBucket: "jayproject-7751f.appspot.com",
  messagingSenderId: "867999030379",
  appId: "1:867999030379:web:cb58f9294071c65606252e",
  measurementId: "G-NYFDJNCSVH"
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
