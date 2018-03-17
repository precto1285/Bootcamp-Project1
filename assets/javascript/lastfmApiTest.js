$(document).ready(function (event) {

    

    $("#lastFmClick").on("click", function (event) {
        event.preventDefault();
        var artist = $("#lastFmUserInput").val().trim();
        artist = artist.replace(" ", "+");
        var lastFmURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artist + "&api_key=5a1f49eb4d70af0cf51958ba989b413c&format=json";
        artist = artist.replace("+", " ");
        $.ajax({
            type:"GET",
            url: lastFmURL,
            async:true,
            dataType: "json",
            success: function(json) {
                        console.log(json);
                        window.location.replace(json.results.artistmatches.artist[0].url + "/+similar");
                        // Parse the response...
                        // Do other things.
                     },
            error: function(xhr, status, err) {
                        // This time, we do not end up here!
                        console.log(err);
            r         }
          });
    });
});
