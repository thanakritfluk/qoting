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
var room1;
var room2;
var room3;
var room4;
var room5;
var room6;
var room7;
var room8;

function init(id) {
    userid = id;
}

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
    initializeParam();
    initilizePeopleCount();
    onUpdatePeopleCount();

};

function initializeParam() {
    room1 = document.querySelector('room1');
    room2 = document.querySelector('room2');
    room3 = document.querySelector('room3');
    room4 = document.querySelector('room4');
    room5 = document.querySelector('room5');
    room6 = document.querySelector('room6');
    room7 = document.querySelector('room7');
    room8 = document.querySelector('room8');
}

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
    var room_count = dbRef.ref().child('room/' + ref_room + '/count');
    room_count.transaction(function (current_value) {
        if (current_value < 8) {
            
            var now = current_value+1;
            var room_id = dbRef.ref().child('room_assign/' + ref_room + "/" + now);
            room_id.set({
                userid
            });
            return (current_value || 0) + 1
        } else {
            alert("This room is now playing,Pls select another room")
        }
    })
}

function clearRoom(ref_room) {
    console.log("clearrrrrr");
    var room = dbRef.ref().child('room/' + ref_room + '/count');
    var assign_room = dbRef.ref().child('room_assign/' + ref_room);
    assign_room.remove();
    assign_room.set({
        status: 0
    })
    room.transaction(function () {
        return 0
    });
}

function setOnUpdateCurrentUser(ref_room, ref_html) {
    myRef = dbRef.ref('room/' + ref_room);
    myRef.on('child_changed', function (snapshot) {
        data = snapshot.val();
        ref_html.innerHTML = data + "/8"
        if(snapshot.val() == 8){
            location.href("/room"+ref_room);
        }
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
    data.update({ detail: newquestion }).then(function () {
        console.log("Success!!")
    }).catch(function (error) {
        console.log(error.message)
    })
}
