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

       
      // var timestamp = "";
      // var myDate = new Date(timestamp*1000);
      // var formatedTime=myDate.toJSON();

        var favorites = ""      
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
          favorites = $("#search").val().trim();
          console.log(search);
        //  database.favorites.push(input);
        //  console.log(snapshot.favorites);


         // Code for handling the push
            database.ref().push({
            search: search,
            // dateAdded: firebase.database.ServerValue.TIMESTAMP
            favorites: favorites,
         });
      
   
      //   Firebase watcher + initial loader + order/limit HINT: .on("child_added"
      database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
     
   
      //    // Console.loging the last user's data
      //    console.log(search);
         
 
      });   
 
            database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
 
          // Change the HTML to reflect
          $("#search").text(snapshot.val().search);
          // $("#fav-info").text(snapshot.val().search);

        });

             // This function handles events where one button is clicked
    $("#search").on("click", function (snapshot) {
      event.preventDefault();
      // // This line grabs the input from the textbox
      // var input = $("#search").val().trim();
      // // Adding the drinks from the textbox to our array
      // database.favorites.prepend(input);
      // console.log(snapshot.favorites);
      
    });

    //Initial Load  and on child added
database.ref().on("child_added", function(snap){

	// firstTrain = snap.val().first;
	// frequency = snap.val().frequency;
	// nextArrival();

	$("#fav-info-table").append("<td>" + snap.val().favorites + "</td>")
		"</td><td>" + snap.val().favorites + "</td>"
		// "</td><td>" + snap.val().frequency + 
    // "</td><td>" + snap.val().nextTrain +
 

// Handle the errors
}, function(errorObject){
	console.log("Errors handled: " + errorObject.code);
});
   
          }
         });
        
      