database.ref().on("child_added", function(snap){

	firstTrain = snap.val().first;
	frequency = snap.val().frequency;
	nextArrival();

	$("#venues").append("<tr><td>" + snap.val().name + 
		"</td><td>" + snap.val().destination +
		"</td><td>" + snap.val().frequency + 
		"</td><td>" + snap.val().nextTrain +
        "</td><td>" + snap.val().minutesAway + "</td></tr>");
});