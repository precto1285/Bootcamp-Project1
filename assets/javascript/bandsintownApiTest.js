
function searchBandsInTown(artist) {

    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/"+ artist + "/events?app_id=Jan"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        console.log(response);
        
        // Empty the contents of the artist-div, append the new artist content
        $("#venues").empty();
        for (var i = 0; i < response.length; i++){
            $("#venues").append(response[i].venue.name + "<br>");
            $("#venues").append(response[i].venue.city + "<br>");
            $("#venues").append(response[i].venue.region + "<br>");
            $("#venues").append(response[i].venue.country + "<br>");
            $("#venues").append("----------------------------<br><br>");
                    

        }
    });
}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputArtist = $("#artist-input").val().trim();

    // Running the searchBandsInTown function (passing in the artist as an argument)
    searchBandsInTown(inputArtist);
});
