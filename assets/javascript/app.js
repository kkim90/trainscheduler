var config = {
    apiKey: "AIzaSyAdoZJ6LV3sg010v_8whFwNZGdOLCqkGtM",
    authDomain: "trainhw-f1553.firebaseapp.com",
    databaseURL: "https://trainhw-f1553.firebaseio.com",
    projectId: "trainhw-f1553",
    storageBucket: "trainhw-f1553.appspot.com",
    messagingSenderId: "93644230004"
  };
firebase.initializeApp(config);


var trainData = firebase.database();

$("#addTrainBtn").on("click", function(){
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
    var frequency = $("#freqInput").val().trim();

    console.log(firstTrain);
    return false;
})

trainData.ref().on("child_added", function(snapshot){
    var name = snapshot.val().name;
    var destination = snapshot.val().destination;
    var frequency = snapshot.val().frequency;
    var firstTrain = snapshot.val().firstTrain;

    var remainder = moment().diff(moment.unix(firstTrain), "minute")%frequency;
    var minutes = frequency - remainder;
    var arrival = moment().add(minutes, "m").format("hh:mm A");

    console.log(remainder);
    console.log(minutes);
    console.log(arrival);

    $("#trainTable > tbody").append("<tr><td>"+name+"</td><td>"+destination+"</td><td>"+frequency+"</td><td>"+arrival+"</td><td>"+minutes+"</td></tr>");

})
