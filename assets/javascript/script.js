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
                    $("#youtube-link").attr("href",  "javascript:void(0);");
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
                    $("#instagram-link").attr("href",  "javascript:void(0);");
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
                    $("#facebook-link").attr("href",  "javascript:void(0);");
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
    });
});
