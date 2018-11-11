var config = {
    apiKey: "AIzaSyAioE3uCJP-KCBuA7d0JOCzR2u13qupGkY",
    authDomain: "qoting-1ca86.firebaseapp.com",
    databaseURL: "https://qoting-1ca86.firebaseio.com",
    projectId: "qoting-1ca86",
    storageBucket: "qoting-1ca86.appspot.com",
    messagingSenderId: "241026992000"
};
firebase.initializeApp(config);
// const functions = require('firebase-functions');
var dbRef = firebase.database();
var room1 = document.querySelector('room1');
var room2 = document.querySelector('room2');
var room3 = document.querySelector('room3');
var room4 = document.querySelector('room4');
var room5 = document.querySelector('room5');
var room6 = document.querySelector('room6');
var room7 = document.querySelector('room7');
var room8 = document.querySelector('room8');


function counter() {
    seconds = 60;
    countDown();
}

function countDown() {
    document.getElementById("remain").innerHTML = "Time Left: " + seconds;
    setTimeout("countDown()", 1000);
    if (seconds === 0) {
        document.answer.submit();
    } else {
        seconds--;
    }
}

function show() {
    let field = $('#password');
    field.attr('type') === 'text' ? field.attr('type', 'password') : field.attr('type', 'text');
}


window.onload = function () {
    initilizePeopleCount("1");
    onUpdatePeopleCount();
    // showAllUser();
    // showallQuestion();
};

function initilizePeopleCount() {
    getCurrentUser("1", room1);
    getCurrentUser("2", room2);
    getCurrentUser("3", room3);
    getCurrentUser("4", room4);
    getCurrentUser("5", room5);
    getCurrentUser("6", room6);
    getCurrentUser("7", room7);
    getCurrentUser("8", room8);
}

function onUpdatePeopleCount() {
    setOnUpdateCurrentUser('1', room1);
    setOnUpdateCurrentUser('2', room2);
    setOnUpdateCurrentUser('3', room3);
    setOnUpdateCurrentUser('4', room4);
    setOnUpdateCurrentUser('5', room5);
    setOnUpdateCurrentUser('6', room6);
    setOnUpdateCurrentUser('7', room7);
    setOnUpdateCurrentUser('8', room8);
}


function getCurrentUser(ref_url, room) {
    var data = dbRef.ref("room/" + ref_url);
    data.once('value').then(function (dataSnapshot) {
        dataSnapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            room.innerHTML = childData + "/8";
        });
    });
}


function setOnUpdateCurrentUser(ref_room, ref_html) {
    myRef = dbRef.ref('room/' + ref_room);
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        ref_html.innerHTML = data + "/8"
    });
}


function showAllUser() {
    var data = dbRef.ref("user").orderByKey();
    data.once('value').then(function (dataSnapshot) {
        dataSnapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            console.log("Key: " + childKey);
        });
    });
}

function showallQuestion() {
    var data = dbRef.ref("question");
    data.once('value').then(function (dataSnapshot) {
        dataSnapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childData)
        });
    });
}

function insertQuestion(question) {
    var data = dbRef.ref("question");
    data.push({
        detail: question
    })
}

function delectQuestion(question) {
    var data = dbRef.ref("question" + "/" + question);
    data.remove().then(function () {
        console.log("Remove succeeded")
    }).catch(function (error) {
        console.log("Remove failed" + error.message)
    })
}

function updateQuestion(question, newquestion) {
    var data = dbRef.ref("question" + "/" + question);
    data.update({detail: newquestion}).then(function () {
        console.log("Success!!")
    }).catch(function (error) {
        console.log(error.message)
    })

}

// <html>
// <head>
// <style>
// span {
//   text-align: center;
//   font-size: 60px;
//   margin-top: 0px;
// }
// </style>
// </head>
// <body>
// <span id="remain"></span>
// <form action="3.php" method="post" id="answer" name="answer">
// 	<input type="text" name="id">
// 	<input type="submit" name="Go" value="submit">
// </form>
// <script type="text/javascript">
// window.onload=counter;
// function counter()
// {
// seconds = 60;
// countDown();
// }
//
// function countDown(){
// document.getElementById("remain").innerHTML="Time Left: " + seconds;
// setTimeout("countDown()",1000);
// 	if(seconds == 0)
// 		{
// 			document.answer.submit();
// 		}else {
// 		    seconds--;
// 		}
// }
//
// </script>
// </body>
// </html>