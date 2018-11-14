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
    // assignPeople("1")
    // showAllUser();
    // showallQuestion();
};

function initilizePeopleCount() {
    setCurrentUser("1", room1);
    setCurrentUser("2", room2);
    setCurrentUser("3", room3);
    setCurrentUser("4", room4);
    setCurrentUser("5", room5);
    setCurrentUser("6", room6);
    setCurrentUser("7", room7);
    setCurrentUser("8", room8);
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


function setCurrentUser(ref_room, room) {
    var data = dbRef.ref("room/" + ref_room);
    data.once('value').then(function (dataSnapshot) {
        dataSnapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            room.innerHTML = childData + "/8";
        });
    });
}


function getCurrentUser(ref_room) {
    var data = dbRef.ref("room/" + ref_room);
    var user;
    data.once('value').then(function (dataSnapshot) {
        user = dataSnapshot.numChildren();
        console.log(dataSnapshot.numChildren());
    });
    return user;
}

function joinRoom(ref_room) {
    var room_count_ref = dbRef.ref().child('room/' + ref_room + '/count');
    var room_assign_ref = dbRef.ref().child();
    room_count_ref.transaction(function (current_value) {
        if (current_value < 8) {
            console.log("Curent user: " + (current_value + 1));

            return (current_value || 0) + 1
        } else {
            alert("This room is now playing,Pls select another room")
        }

    })
}


function setOnUpdateCurrentUser(ref_room, ref_html) {
    myRef = dbRef.ref('room/' + ref_room);
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
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