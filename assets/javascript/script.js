$("document").ready(function () {
    $(".button-collapse").sideNav();
    $('.slider').slider();



    function makeApiCalls(artist) {
        var ticketmasterApiKey = "U7yFX9RveYwkkgtRgbC5I2inlfCqb32G";
        // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=Jan"
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketmasterApiKey,
            async: true,
            dataType: "json",
            success: function (json) {
                console.log(json);

                //external link to youtube:
                if (json._embedded.hasOwnProperty('attractions') && json._embedded.attractions[0].externalLinks.hasOwnProperty('youtube')) {
                    console.log("works");
                    var youTube = json._embedded.attractions[0].externalLinks.youtube[0].url;
                    console.log(youTube);
                    // $("#youtube").attr("href", youTube);
                }
                // else {
                //     $("#youtube").addClass("unavailable");
                // }

                //external link to instagram:
                if (json._embedded.hasOwnProperty('attractions') && json._embedded.attractions[0].externalLinks.hasOwnProperty('instagram')) {
                    console.log("works");
                    var instagram = json._embedded.attractions[0].externalLinks.instagram[0].url;
                    console.log(instagram);
                    // $("#instagram").attr("href", instagram);
                }
                // else {
                //     $("#instagram").addClass("unavailable");
                // }

                //external link to facebook:
                if (json._embedded.hasOwnProperty('attractions') && json._embedded.attractions[0].externalLinks.hasOwnProperty('facebook')) {
                    console.log("works");
                    var facebook = json._embedded.attractions[0].externalLinks.facebook[0].url;
                    console.log(facebook);
                    // $("#facebook").attr("href", facebook);
                }
                // else {
                //     $("#facebook").addClass("unavailable");
                // }
                //external link to Genre:
                if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].classifications[0].hasOwnProperty('genre')) {
                    console.log("works");
                    var genre = json._embedded.attractions[0].classifications[0].genre.name;
                    console.log(genre);
                }
                if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].classifications[0].hasOwnProperty('subGenre')) {
                    console.log("works");
                    var subGenre = json._embedded.attractions[0].classifications[0].subGenre.name;
                    console.log(subGenre);
                }

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {

                    // Printing the entire object to console
                    console.log(response);

                    for (var i = 0; i < response.length; i++) {
                        console.log(response[i].venue.name + "<br>");
                        console.log(response[i].venue.city + "<br>");
                        console.log(response[i].venue.region + "<br>");
                        console.log(response[i].venue.country + "<br>");
                        console.log("----------------------------------<br><br>");
                    }

                });

            },
            error: function (xhr, status, err) {
                // This time, we do not end up here!

            }
        });
    }


    //firebase js file

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

    var favorites = [""];
    var database = firebase.database();


    // Cancel the default action, if needed

    // Number 13 is the "Enter" key on the keyboard


    // Capture Button Click
    $(document).on("keypress", "#search", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log("hi");


            //    // Grabbed values from text boxes
            var search = $("#search").val().trim();


            console.log(search);



            // Code for handling the push
            database.ref().push({
                search: search,
                // dateAdded: firebase.database.ServerValue.TIMESTAMP
                favorites: favorites,
            });


            //   Firebase watcher + initial loader + order/limit HINT: .on("child_added"
            database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {


                //    // Console.loging the last user's data
                console.log(search);
                makeApiCalls(search);

            });

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
      database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
  
  
        //    // Console.loging the last user's data
        //    console.log(search);
  
  
      });
  
      database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
  
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
      database.ref().on("child_added", function (snap) {
  
        // firstTrain = snap.val().first;
        // frequency = snap.val().frequency;
        // nextArrival();
  
        $("#fav-info-table").append("<td>" + snap.val().favorites + "</td>")
        "</td><td>" + snap.val().favorites + "</td>"
        // "</td><td>" + snap.val().frequency + 
        // "</td><td>" + snap.val().nextTrain +
  
  
        // Handle the errors
      }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  
    }
  });
  
  
  // Click function for Favorites button
  $("#fav-button").on('click', function () {
    
  })
        

});
