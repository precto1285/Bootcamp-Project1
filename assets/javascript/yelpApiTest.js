//To authenticate API calls with the API Key, set the Authorization HTTP header value as Bearer API_KEY.
// GET https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972  - autocomplete

// review: https://www.yelp.com/developers/documentation/v3/authentication#where-is-my-client-secret-going


//Yelp needs Oauth. May not be good to use...

var tMurl= "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=U7yFX9RveYwkkgtRgbC5I2inlfCqb32G"
var apiKey = "U7yFX9RveYwkkgtRgbC5I2inlfCqb32G";
var clientId = "oaIQiNx4zJrgK8w3E8SoCg";


    $("#tMasterclick").click(function(event){
        event.preventDefault();
        var input = $("#userInput").val().trim();
      
        $.ajax({
            type:"GET",
            url: tMurl,
            async:true,
            dataType: "json",
            success: function(json) {
                        console.log(json);
                        // Parse the response.
                        // Do other things.
                     },
            error: function(xhr, status, err) {
                        // This time, we do not end up here!
                     }
          });
});