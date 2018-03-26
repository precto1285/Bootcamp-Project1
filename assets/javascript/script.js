$("document").ready(function () {
    $(".button-collapse").sideNav();
    $('.slider').slider();

    $(document).on("keypress", "#search", function (event) {
        if (event.keyCode === 13) {
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

                     // Loads imaged of artist
                     var newImage = $('<img id="main-image-element">')

                     $("#main-image-link").append(newImage);
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
                    var queryURL = "https://rest.bandsintown.com/artists/"+ input + "/events?app_id=Jan"
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then(function (response) {
                
                        // Printing the entire object to console
                        console.log(response);
                        
                        // Empty the contents of the artist-div, append the new artist content
                        $("#venues").empty();
                        for (var i = 0; i < response.length; i++){
                            var newRow = $("<tr>")
                            $("#venues").append(response[i].datetime + "<br>");
                            $("#venues").append(response[i].venue.name + "<br>");
                            $("#venues").append(response[i].venue.city + "<br>");
                            $("#venues").append(response[i].venue.region + "<br>");
                            $("#venues").append(response[i].venue.country + "<br>");
                            $("#venues").append("----------------------------------<br><br>");

                               //Trying to get response to write to html in table format 
                            $.getJSON(queryUrl,
                                function (response) {
                                    var tr;
                                    for (var i = 0; i < response.length; i++) {
                                        tr = $('<tr/>');
                                        tr.append("<td>" + response[i].datetime + "</td>");
                                        tr.append("<td>" + response[i].venue.name + "</td>");
                                        tr.append("<td>" + response[i].venue.city + "</td>");
                                        tr.append("<td>" + response[i].venue.region + "</td>");
                                        tr.append("<td>" + response[i].venue.country + "</td>");
                                        $("#venues").append(tr);
                                    }
                                });
                            // $("#venues").append("<tr><td>" + response.val().venue + 
                            // "</td><td>" + response.val().datetime +
                            // "</td><td>" + response.val().venue.name + 
                            // "</td><td>" + response.val().venue.city +
                            // "</td><td>" + response.val().venue.region + 
                            // "</td><td>" + response.val().venue.country +"</td></tr>");    
                
                            
                            // function(response) {
                            //     $.each(response, function(key, val) {
                            //         var tr=$('<tr></tr>');
                            //         $.each(val, function(k, v){
                            //             $('<td>'+ response +'</td>').appendTo(tr);
                            //         });
                            //         tr.appendTo("#venues");
                            //     });​
                            // });​
                
                        }
                    });
                },
                error: function (xhr, status, err) {
                    // This time, we do not end up here!
                }
            });
        };
    });
});
