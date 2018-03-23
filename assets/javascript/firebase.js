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

       
      var timestamp = "";
      var myDate = new Date(timestamp*1000);
      var formatedTime=myDate.toJSON();
       var database = firebase.database();

       
        // Cancel the default action, if needed

        // Number 13 is the "Enter" key on the keyboard
        

         // Capture Button Click
         $(document).on("keypress", "#search", function (event) {
         if (event.keyCode === 13){
          event.preventDefault();
          console.log("hi");
      

      //    // Grabbed values from text boxes
          var search = $("#search").val().trim();
            
          
         console.log(search);
       


         // Code for handling the push
            database.ref().push({
            search: search,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
         });
      
   
      //   Firebase watcher + initial loader + order/limit HINT: .on("child_added"
      database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
     
   
      //    // Console.loging the last user's data
      //    console.log(search);
         
 
      });
 
        database.ref().on("child_added", function(childSnapshot) {
 
            // Log everything that's coming out of snapshot
          console.log(childSnapshot.val().search);
          moment(childSnapshot.val().dateAdded).format("MMM Do YY");  
          
             
            });   
 
            database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
 
          // Change the HTML to reflect
          $("#search").text(snapshot.val().search);
          $("#fav-info").text(snapshot.val().search);

        });
        
            
        
          
          

            
   
          }
         });
        