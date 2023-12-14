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

// for people need game rank
firebase.firestore().collection("test").orderBy("item").limit(3).get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().item}`);
  });
});

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from the form
  // You need to change this.
  var email = 'yilianz2@gmail.com';
  var password = 'ddsgagafda';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in successfully');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        myname = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(myname, email, emailVerified);
        window.location.href = 'Surveyresult.html';
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});