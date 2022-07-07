const firebaseConfig = {

      apiKey: "AIzaSyBvyxEDKqDjs-yM0DOdjbl0VWAIoBda_JA",
    
      authDomain: "kwitter-b3683.firebaseapp.com",
    
      projectId: "kwitter-b3683",
    
      storageBucket: "kwitter-b3683.appspot.com",
    
      messagingSenderId: "681401393106",
    
      appId: "1:681401393106:web:c874cf54becf59abf0b20b"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 