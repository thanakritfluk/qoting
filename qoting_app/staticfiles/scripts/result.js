var config = {
    apiKey: "AIzaSyAioE3uCJP-KCBuA7d0JOCzR2u13qupGkY",
    authDomain: "qoting-1ca86.firebaseapp.com",
    databaseURL: "https://qoting-1ca86.firebaseio.com",
    projectId: "qoting-1ca86",
    storageBucket: "qoting-1ca86.appspot.com",
    messagingSenderId: "241026992000"
};
firebase.initializeApp(config);
var dbRef = firebase.database();

window.onload = function () {
    get_score();
    counter()
};

function counter() {
    seconds = 5;
    countDown();
}

function countDown() {
    document.getElementById("remain").innerHTML = "Time Left: " + seconds;
    setTimeout("countDown()", 1000);
    if (seconds === 0) {
        reset();
    } else {
        seconds--;
    }
}

function get_score(){
    var ref = dbRef.ref('room/player');
    ref.orderByChild("point").on("child_added", function(snapshot) {
        first.innerHTML = snapshot.val().name;
      });
}

function reset(){
    var ref = dbRef.ref('room');
    ref.set({
        "count":0,
        "missing":{
            "gameid":0
        }
    });
    var form = document.getElementById('form');
    console.log(form);
    form.submit();
}

