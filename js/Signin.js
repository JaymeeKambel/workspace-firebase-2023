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

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
    var username = $('input[name="fullname"]').val();
    var emailaddress = $('input[name="username"]').val();
    var password =$('input[name="password"]').val(); ;
    var confirmedpassword = "";
    console.log(username, emailaddress, password, confirmedpassword);
  // check if the password and confirmed password are the same

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      let user = result.user;
      user.updateProfile({
        displayName: username
      }).then(()=>{
        console.log("update profile successfully");
        console.log(user.displayName, " are signed up");

        var date = "Wed, 29 Nov 2023 07:28:00 GMT";
        var userinformation ={
          "username": user.displayName,
          "email": emailaddress,
          "signupDate": date
        };

        var db = firebase.firestore();
        db.collection("usertable").doc(user.displayName).set(userinformation).then(()=>{
          console.log("information saved to firestore");
          window.location.href = "Login.html";
        });


      });
   
      // get current date

      //save information to firestore base

      //window.location.href = "Login.html";
     
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});