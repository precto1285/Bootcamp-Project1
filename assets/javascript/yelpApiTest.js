var apiKey = "gRvBKzmV6dSUtWhQeCEYwaglCqLarBUAz8UwDx2cI0-9LESTPeOGpHoQ4TumROnNJUSMaWlrJ2Uo5XWLmn2GS8O1tzku9tmHdpbiswFVfPmpGL6TkIMW7SMQ5PKrWnYx";
var clientId = "oaIQiNx4zJrgK8w3E8SoCg";
var pull = [{
    name:"",
    location:"",
    phone:"",
    photos:"",
    reviews:"",
    hours:""
}];

$(document).ready(function(){
    $("#yelpclick").click(function(){
        $("#yelpAPI").val("");
        $.ajax({
            url:"",
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function(response){
                $("").text('');
                $("").text('');
                $("").text('');
                $("").text('');
                $("").text('');
            },
            error: function() {
                $("").text("There was an error processing your request. Please try again.")
            }
        });
    });
});
