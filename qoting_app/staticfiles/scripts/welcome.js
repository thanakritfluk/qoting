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
var room;
var gameid = 0;
var accept = 0;

function init(id) {
    userid = id;
    console.log(userid);
}

window.onload = function () {
    console.log("init");
    initializeParam();
    setCurrentUser();
};

function initializeParam() {
    room = document.getElementById('room');
}

function setCurrentUser() {
    var data = dbRef.ref("room/count");
    data.on("value", function (snapshot) {
        room.innerHTML = snapshot.val() + "/8"
        if (snapshot.val() == 8 && accept == 1) {
            send_value();
        }
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
}

function joinRoom() {
    var room_count = dbRef.ref('room/count');
    room_count.transaction(function (current_value) {
        if (current_value < 8) {
            if(current_value == 0){
                get_question();
            }
            accept = 1;
            console.log(current_value);
            var now = current_value + 1;
            var room_id = dbRef.ref().child('room/player/' + now);
            room_id.set({
                userid
            });
            gameid = now;
            assign();
            change_btn();
            return (current_value || 0) + 1
        } else {
            alert("This room is now playing,Pls wait")
        }
    })
}

function change_btn() {
    var btn = document.getElementById("start");
    btn.classList.add("btn-danger");
    btn.classList.remove("btn-outline-secondary");
    btn.innerHTML = 'Cancel';
    btn.onclick = "cancel()";
}

function cancel() {
    
}

function assign(){
    var q1_num, q2_num;
    if(gameid <= 4){
        q1_num = gameid+1;
    }else{
        q1_num = gameid-1
    }
    if(gameid == 1 || gameid == 5) q2_num = 1;
    if(gameid == 2) q2_num = 7;
    if(gameid == 3) q2_num = 3;
    if(gameid == 4 || gameid == 8) q2_num = 8;
    if(gameid == 6) q2_num = 6;
    if(gameid == 7) q2_num = 2;
    var ref_1 = dbRef.ref().child('room/player/' + gameid);
    var rq_1 = dbRef.ref().child('room/question/'+ q1_num +'/detail');
    var rq_2 = dbRef.ref().child('room/question/'+ q2_num +'/detail');
    var q1, q2;
    rq_1.on("value", function(snapshot) {
        q1 = snapshot.val();
    })
    rq_2.on("value", function(snapshot) {
        q2 = snapshot.val();
    })
    ref_1.update({
        'question1': q1,
        'question2': q2
    })
}

function send_value() {
    console.log(gameid);
    var form = document.getElementById("form"), node = document.getElementById("num");
    node.value = gameid;
    form.submit();
}

function get_question(){
    var q_ref = dbRef.ref('question');
    var q_count = 0;
    q_ref.on("value", function(snapshot) {
        q_count = snapshot.numChildren();
    })
    var q_num = chance.unique(chance.integer, 8, {min: 1, max: 15});
    var check = 1;
    var count = 1;
    q_ref.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            if(q_num.includes(check)){
                var r_ref = dbRef.ref('room/question/' + count);
                var detail = childSnapshot.val();
                r_ref.set({
                    detail
                });
                if(count == 8){  
                    return;
                }
                count++;
            }
            check++;
        });
    });
}