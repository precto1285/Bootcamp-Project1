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
          if (event.keyCode === 13) {
            event.preventDefault();
            
            // Grabbed values from text boxes
            var search = $("#search").val().trim();
            console.log(search);
            console.log("HiH");
        
        
            // Code for handling the push
            database.ref().push({
              search: search
            });
        
        
            //Initial Load  and on child added
            var recentSearch = [];
            database.ref().on("child_added", function (snap) {
              // var prevSearch = {"":"",};
              for (var i = 0; i < 1; i++) {
                var obj = snap.val().search;
                // console.log(obj);
                // var prevSearch = (obj = "what");
                // for(var x = 0; x < recentSearch.length; x++) {
                  //   if (obj === recentSearch[i])
                  // }
                  // console.log(prevSearch);
                  recentSearch.push(snap.val().search);
                  // console.log(recentSearch);
                }
                var bands = {};
                for (var b = 0; b < recentSearch.length; b++) {
                  var newName = recentSearch[b];
                  console.log("check");
                  for (var a = 0; a < bands.length; a++) {
                    var newBand = bands[a];
                  }
                    if (newName !== newBand) {
                      var bandName = newName;
                      bands[bandName] = 1;
                      console.log("this is related to the first loop");
                    }
                    else if (newName === newBand) {
                      bands[newName] = bands[newName].value++;
                      console.log("band already been searched!")
                    } else {
                      console.log('nope');
                    }
                  console.log(bands);
                }
              });
            }
         });