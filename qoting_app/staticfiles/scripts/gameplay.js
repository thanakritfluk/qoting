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
var userid = "";

function init(id) {
    userid = id;
    console.log(userid);
}

window.onload = function () {
    console.log("init");
    var rq_1 = dbRef.ref("room/player/"+userid+"/question1/detail");
    var rq_2 = dbRef.ref("room/player/"+userid+"/question2/detail");
    var q1, q2;
    rq_1.on("value", function(snapshot) {
        q1 = snapshot.val();
        document.getElementById("q1").innerHTML = q1;
    })
    rq_2.on("value", function(snapshot) {
        q2 = snapshot.val();
        document.getElementById("q2").innerHTML = q2;
    })
};