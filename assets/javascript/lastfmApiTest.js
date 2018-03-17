$(document).ready(function (event) {

    

    $("#lastFmClick").on("click", function (event) {
        event.preventDefault();
        var artist = $("#lastFmUserInput").val().trim();
        var lastFmURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artist + "&api_key=5a1f49eb4d70af0cf51958ba989b413c&format=json";
        $.ajax({
            type:"GET",
            url: lastFmURL,
            async:true,
            dataType: "json",
            success: function(json) {
                        console.log(json);
                        var newJsonLink = $('<a href="'+ json.results.artistmatches.artist[0].url + '">' + artist + '</a>');
                        $("#lastFmAPI").append(newJsonLink);
                        // Parse the response...
                        // Do other things.
                     },
            error: function(xhr, status, err) {
                        // This time, we do not end up here!
                        console.log(err);
                     }
          });
    });
});
