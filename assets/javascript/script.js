
    $('.carousel').carousel();
    $("#bandPicClick").on("click", function (event) {

        $("#bandPicClick").on("click", function (event) {
            event.preventDefault();
            var bandName = $("#lastFmUserInput").val().trim();
            var bandpicURL = 'https://rest.bandsintown.com/artists/' + bandName + '?app_id=Jan';
            artist = artist.replace("+", " ");
            $.ajax({
                type: "GET",
                url: lastFmURL,
                async: true,
                dataType: "json",
                success: function (json) {
                    console.log(json);
                    var newCarouselItem = $('<a class="carousel-item" href="#six!>');
                    newCarouselItem.append('<img src="' + json.image_url + '">');
                    $(".carousel").append(newCarouselItem);
                    // Parse the response...
                    // Do other things.
                },
                error: function (xhr, status, err) {
                    // This time, we do not end up here!
                    console.log(err);
                }
            });
        });
    });
