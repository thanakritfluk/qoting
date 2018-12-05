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
var gameid = "";
var seconds;

function init(id) {
    gameid = id;
    console.log(gameid);
}

window.onload = function () {
    console.log("init");
    var rq_1 = dbRef.ref("room/player/"+gameid+"/question1/detail");
    var rq_2 = dbRef.ref("room/player/"+gameid+"/question2/detail");
    var q1, q2;
    rq_1.on("value", function(snapshot) {
        q1 = snapshot.val();
        document.getElementById("q1").innerHTML = q1;
    })
    rq_2.on("value", function(snapshot) {
        q2 = snapshot.val();
        document.getElementById("q2").innerHTML = q2;
    })
    counter();
};

function submit_question(){
    var rq_1, rq_2; 
    var ans_1 = document.getElementById('a1').value;
    var ans_2 = document.getElementById('a2').value;
    if(ans_1 == "" || ans_1 == " "){
        ans_1 = "Sorry, I'm too lazy to write the answer XD."
    }
    if(ans_2 == "" || ans_2 == " "){
        ans_2 = "Sorry, I'm too lazy to write the answer XD."
    }
    console.log(ans_1);
    if(gameid == 1){
        rq_1 = dbRef.ref().child('room/question/2/ans1');
        rq_2 = dbRef.ref().child('room/question/1/ans1');
    }else if(gameid == 2){
        rq_1 = dbRef.ref().child('room/question/3/ans1');
        rq_2 = dbRef.ref().child('room/question/7/ans1');
    }else if(gameid == 3){
        rq_1 = dbRef.ref().child('room/question/4/ans1');
        rq_2 = dbRef.ref().child('room/question/3/ans2');
    }else if(gameid == 4){
        rq_1 = dbRef.ref().child('room/question/5/ans1');
        rq_2 = dbRef.ref().child('room/question/8/ans1');
    }else if(gameid == 5){
        rq_1 = dbRef.ref().child('room/question/4/ans2');
        rq_2 = dbRef.ref().child('room/question/1/ans2');
    }else if(gameid == 6){
        rq_1 = dbRef.ref().child('room/question/5/ans2');
        rq_2 = dbRef.ref().child('room/question/6/ans1');
    }else if(gameid == 7){
        rq_1 = dbRef.ref().child('room/question/6/ans2');
        rq_2 = dbRef.ref().child('room/question/2/ans2');
    }else if(gameid == 8){
        rq_1 = dbRef.ref().child('room/question/7/ans2');
        rq_2 = dbRef.ref().child('room/question/8/ans2');
    }
    rq_1.set({
        "ans":ans_1
    });
    rq_2.set({
        "ans":ans_2
    });
    next_page();
    
}

function next_page(){
    var form = document.getElementById('form');
    form.submit();
}

function counter() {
    seconds = 60;
    countDown();
}

function countDown() {
    document.getElementById("remain").innerHTML = "Time Left: " + seconds;
    setTimeout("countDown()", 1000);
    if (seconds === 0) {
        submit_question();
    } else {
        seconds--;
    }
}
