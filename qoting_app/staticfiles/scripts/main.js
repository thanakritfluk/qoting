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
    initilizePeopleCount();
    onUpdatePeopleCount();
    // showAllUser();
    // showallQuestion();
};

function initilizePeopleCount() {

}

function onUpdatePeopleCount() {
    var myRef = dbRef.ref('room/1');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room1.innerHTML = data + "/8"
    });
    myRef = dbRef.ref('room/2');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room2.innerHTML = data + "/8"
    });
    myRef = dbRef.ref('room/3');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room3.innerHTML = data + "/8"
    });
    myRef = dbRef.ref('room/4');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room4.innerHTML = data + "/8"
    });
    myRef = dbRef.ref('room/5');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room5.innerHTML = data + "/8"
    });
    myRef = dbRef.ref('room/6');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room6.innerHTML = data + "/8"
    });
    myRef = dbRef.ref('room/7');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room7.innerHTML = data + "/8"
    });
    myRef = dbRef.ref('room/8');
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        console.log("Now: " + data);
        room8.innerHTML = data + "/8"
    });

}

//
// function currentUser(ref_room) {
//     myRef = dbRef.ref('room/' + ref_room);
//     myRef.on('child_changed', function (snapshot) {
//         data = snapshot.val();
//         console.log("Now: " + data);
//         return data
//         // room1.innerHTML = data + "/8"
//     });
// }


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