//To authenticate API calls with the API Key, set the Authorization HTTP header value as Bearer API_KEY.
// GET https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972  - autocomplete

// review: https://www.yelp.com/developers/documentation/v3/authentication#where-is-my-client-secret-going


//Yelp needs Oauth. May not be good to use...

// var tMurl= "https://app.ticketmaster.com/discovery/v2/venues.json?keyword=" +  "&apikey="
var apiKey = "U7yFX9RveYwkkgtRgbC5I2inlfCqb32G";
console.log("hello");

$("#tMasterclick").on("click", function (event) {
    event.preventDefault();
    var input = $("#userInput").val().trim();
    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + input + "&apikey=" + apiKey,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);

            //external link to homepage:
            if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].externalLinks.hasOwnProperty('homepage')) {
                console.log("works");
                var homePage = json._embedded.attractions[0].externalLinks.homepage[0].url;
                $("#website").html('<a href="' + homePage + '" target="_blank">' + homePage + '</a>');
            }

            //external link to instagram:
            if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].externalLinks.hasOwnProperty('instagram')) {
                console.log("works");
                var instagram = json._embedded.attractions[0].externalLinks.instagram[0].url;
                $("#instagram").html('<a href="' + instagram + '" target="_blank">' + instagram + '</a>');
            }

            //external link to facebook:
            if (json._embedded.attractions[0].hasOwnProperty('externalLinks') && json._embedded.attractions[0].externalLinks.hasOwnProperty('facebook')) {
                console.log("works");
                var facebook = json._embedded.attractions[0].externalLinks.facebook[0].url;
                $("#facebook").html('<a href="' + facebook + '" target="_blank">' + facebook + '</a>');
            }

        },
        error: function (xhr, status, err) {
            // This time, we do not end up here!
        }
    });






    // var tMurl= "https://app.ticketmaster.com/discovery/v2/venues.json?keyword=" + input + "&apikey=";
    // console.log(input);

    // $.ajax({
    //     type:"GET",
    //     url: tMurl + apiKey,
    //     async:true,
    //     dataType: "json",
    //     success: function(json) {
    //                 console.log(json);

    //              },
    //     error: function(xhr, status, err) {
    //                 // This time, we do not end up here!
    //              }
    //   });

});



