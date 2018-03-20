 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyACI1VUl9WeNYT0wG8w0SSGW3bjlG-KW2g",
    authDomain: "bootcamp-project-1-f4a8d.firebaseapp.com",
    databaseURL: "https://bootcamp-project-1-f4a8d.firebaseio.com",
    projectId: "bootcamp-project-1-f4a8d",
    storageBucket: "bootcamp-project-1-f4a8d.appspot.com",
    messagingSenderId: "765880317002"
  };
  firebase.initializeApp(config);

       // define variables
       var search= "";
       
    
       var database = firebase.database();
 
         // Capture Button Click
         $("#search").on("click", function (event) {
         event.preventDefault();
     
 
         // Grabbed values from text boxes
         var search = $("#search").val().trim();
      
   
         // Code for handling the push
         database.ref().push({
           search: search,
           dateAdded: firebase.database.ServerValue.TIMESTAMP
         });
      
   
       // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
       database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
     
   
         // Console.loging the last user's data
         console.log(search);
         
 
       });
 
       dataRef.ref().on("child_added", function(childSnapshot) {
 
              // Log everything that's coming out of snapshot
              console.log(childSnapshot.val().search);
             
       });   
 
       dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
 
         // Change the HTML to reflect
         $("#search").text(snapshot.val().search);

       });
   
     
 
         // Handle the errors
         }, function(errorObject) {
         console.log("Errors handled: " + errorObject.code);
       });
    