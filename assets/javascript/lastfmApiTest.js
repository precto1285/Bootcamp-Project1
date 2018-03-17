$(document).ready(function (event) {
    var artist = $("#lastFmUserInput").text();
    var lastFmURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artist + "&api_key=5a1f49eb4d70af0cf51958ba989b413c&format=json";

    $("#lastFmClick").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            method: 'GET',
            URL: lastFmURL
        }).done(function (e) {
            console.log(e);
            $(".info").append(e);
        });
    });
});
