
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBOua7N8VHvl43s78TWZ7L072EJDAlOvDM",
      authDomain: "kwitter-f5000.firebaseapp.com",
      projectId: "kwitter-f5000",
      storageBucket: "kwitter-f5000.appspot.com",
      messagingSenderId: "184290291783",
      appId: "1:184290291783:web:0f5f9899be61cab7b24162"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
