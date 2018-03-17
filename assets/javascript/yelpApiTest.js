var key = 'gRvBKzmV6dSUtWhQeCEYwaglCqLarBUAz8UwDx2cI0-9LESTPeOGpHoQ4TumROnNJUSMaWlrJ2Uo5XWLmn2GS8O1tzku9tmHdpbiswFVfPmpGL6TkIMW7SMQ5PKrWnYx';
var corsProxy = "https://cors-anywhere.herokuapp.com/";
var url = corsProxy + "https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972";


$("#yelpclick").on("click", function (event) {
    event.preventDefault();
    var input = $("#user_Input").val().trim();
    console.log(input);


    $.ajax({
        url: url,
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'bearer ' + key);
        },
        data: {}
    }).then(function (data) {
        console.log(data);

    });
});