$("document").ready(function () {
    $(".button-collapse").sideNav();
    $('.slider').slider();

    $("#search").on("keyup", function (event) {
        var apiKey = "U7yFX9RveYwkkgtRgbC5I2inlfCqb32G";
        event.preventDefault();
        console.log("search triggered");
        var input = $("#search").val().trim();
        $("#artist-name").html(input);
        $.ajax({
            type: "GET",
            url: "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + input + "&apikey=" + apiKey,
            async: true,
            dataType: "json",
            success: function (json) {
                console.log(json);
                $("#main-image-element").attr("src", json._embedded.attractions[0].images[0].url);

                //external link to youtube:
                if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].externalLinks.hasOwnProperty('youtube')) {
                    console.log("works");
                    var youTube = json._embedded.attractions[0].externalLinks.youtube[0].url;
                    $("#youtube-link").attr("href", youTube);
                    $("#youtube-link").removeClass("unavailable");
                }
                else {
                    $("#youtube-link").addClass("unavailable");
                    $("#youtube-link").attr("href", "javascript:void(0);");
                }

                //external link to instagram:
                if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].externalLinks.hasOwnProperty('instagram')) {
                    console.log("works");
                    var instagram = json._embedded.attractions[0].externalLinks.instagram[0].url;
                    $("#instagram-link").attr("href", instagram);
                    $("#instagram-link").removeClass("unavailable");
                }
                else {
                    $("#instagram-link").addClass("unavailable");
                    $("#instagram-link").attr("href", "javascript:void(0);");
                }

                //external link to facebook:
                if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].externalLinks.hasOwnProperty('facebook')) {
                    console.log("works");
                    var facebook = json._embedded.attractions[0].externalLinks.facebook[0].url;
                    $("#facebook-link").attr("href", facebook);
                    $("#facebook-link").removeClass("unavailable");
                }
                else {
                    $("#facebook-link").addClass("unavailable");
                    $("#facebook-link").attr("href", "javascript:void(0);");
                }
                //external link to Genre:
                if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].classifications[0].hasOwnProperty('genre')) {
                    console.log("works");
                    var genre = json._embedded.attractions[0].classifications[0].genre.name;
                    $("#genre-info").html(genre);
                }
                if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].classifications[0].hasOwnProperty('subGenre')) {
                    console.log("works");
                    var subGenre = json._embedded.attractions[0].classifications[0].subGenre.name;
                    $("#genre-info").append(subGenre);
                }
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

    //   var favorites = ""
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
            //   favorites = $("#search").val().trim();
            console.log(search);
            //  database.favorites.push(input);
            //  console.log(snapshot.favorites);


            // Code for handling the push
            database.ref().push({
                search: search,
                // dateAdded: firebase.database.ServerValue.TIMESTAMP
                // favorites: favorites,
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

                // $("#fav-info-table").append("<td>" + snap.val().favorites + "</td>")
                // "</td><td>" + snap.val().favorites + "</td>"
                // "</td><td>" + snap.val().frequency + 
                // "</td><td>" + snap.val().nextTrain +


                // Handle the errors
            }, function (errorObject) {
                console.log("Errors handled: " + errorObject.code);
            });

        }
    });


    // Click function for Favorites button
    //   $("#fav-button").on('click', function () {

    //   })


});
