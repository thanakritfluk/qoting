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
var count = 0;
var voting = [];
var check = 0;

window.onload = function () {
    console.log("hello");
    get_question();
    counter();
};

function get_question(){
    console.log("hello");
    var q1_q = document.getElementById("q1-q");
    var q2_q = document.getElementById("q2-q");
    var q3_q = document.getElementById("q3-q");
    var q4_q = document.getElementById("q4-q");
    var q5_q = document.getElementById("q5-q");
    var q6_q = document.getElementById("q6-q");
    var q7_q = document.getElementById("q7-q");
    var q8_q = document.getElementById("q8-q");

    var q1_a1 = document.getElementById("q1-a1");
    var q2_a1 = document.getElementById("q2-a1");
    var q3_a1 = document.getElementById("q3-a1");
    var q4_a1 = document.getElementById("q4-a1");
    var q5_a1 = document.getElementById("q5-a1");
    var q6_a1 = document.getElementById("q6-a1");
    var q7_a1 = document.getElementById("q7-a1");
    var q8_a1 = document.getElementById("q8-a1");

    var q1_a2 = document.getElementById("q1-a2");
    var q2_a2 = document.getElementById("q2-a2");
    var q3_a2 = document.getElementById("q3-a2");
    var q4_a2 = document.getElementById("q4-a2");
    var q5_a2 = document.getElementById("q5-a2");
    var q6_a2 = document.getElementById("q6-a2");
    var q7_a2 = document.getElementById("q7-a2");
    var q8_a2 = document.getElementById("q8-a2");

    dbRef.ref('room/question/1/detail/detail').on("value", function (snapshot) {
        q1_q.innerHTML = snapshot.val();
    });
    dbRef.ref('room/question/2/detail/detail').on("value", function (snapshot) {
        q2_q.innerHTML = snapshot.val();
    });
    dbRef.ref('room/question/3/detail/detail').on("value", function (snapshot) {
        q3_q.innerHTML = snapshot.val();
    });
    dbRef.ref('room/question/4/detail/detail').on("value", function (snapshot) {
        q4_q.innerHTML = snapshot.val();
    });
    dbRef.ref('room/question/5/detail/detail').on("value", function (snapshot) {
        q5_q.innerHTML = snapshot.val();
    });
    dbRef.ref('room/question/6/detail/detail').on("value", function (snapshot) {
        q6_q.innerHTML = snapshot.val();
    });
    dbRef.ref('room/question/7/detail/detail').on("value", function (snapshot) {
        q7_q.innerHTML = snapshot.val();
    });
    dbRef.ref('room/question/8/detail/detail').on("value", function (snapshot) {
        q8_q.innerHTML = snapshot.val();
    });

    dbRef.ref('room/question/1/ans1/ans').on("value", function (snapshot) {
        q1_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/2/ans1/ans').on("value", function (snapshot) {
        q2_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/3/ans1/ans').on("value", function (snapshot) {
        q3_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/4/ans1/ans').on("value", function (snapshot) {
        q4_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/5/ans1/ans').on("value", function (snapshot) {
        q5_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/6/ans1/ans').on("value", function (snapshot) {
        q6_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/7/ans1/ans').on("value", function (snapshot) {
        q7_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/8/ans1/ans').on("value", function (snapshot) {
        q8_a1.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });

    dbRef.ref('room/question/1/ans2/ans').on("value", function (snapshot) {
        q1_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/2/ans2/ans').on("value", function (snapshot) {
        q2_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/3/ans2/ans').on("value", function (snapshot) {
        q3_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/4/ans2/ans').on("value", function (snapshot) {
        q4_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/5/ans2/ans').on("value", function (snapshot) {
        q5_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/6/ans2/ans').on("value", function (snapshot) {
        q6_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/7/ans2/ans').on("value", function (snapshot) {
        q7_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
    dbRef.ref('room/question/8/ans2/ans').on("value", function (snapshot) {
        q8_a2.innerHTML = snapshot.val();
        if(snapshot.val() == null){
            q1_a1.innerHTML = "I'm too lazy to write the answer XD."
        }
    });
}

function counter() {
    seconds = 60;
    countDown();
}

function countDown() {
    document.getElementById("remain").innerHTML = "Time Left: " + seconds;
    setTimeout("countDown()", 1000);
    if (seconds === 0) {
        if(check = 0){
            submit_vote();
        }
        next_page();
    } else {
        seconds--;
    }
}

function voted(num){
    if(num == 1){
        if(count<3){
            var btn = document.getElementById('q1-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 2){
        if(count<3){
            var btn = document.getElementById('q1-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 3){
        if(count<3){
            var btn = document.getElementById('q2-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 4){
        if(count<3){
            var btn = document.getElementById('q2-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 5){
        if(count<3){
            var btn = document.getElementById('q3-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 6){
        if(count<3){
            var btn = document.getElementById('q3-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 7){
        if(count<3){
            var btn = document.getElementById('q4-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 8){
        if(count<3){
            var btn = document.getElementById('q4-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 9){
        if(count<3){
            var btn = document.getElementById('q5-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 10){
        if(count<3){
            var btn = document.getElementById('q5-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 11){
        if(count<3){
            var btn = document.getElementById('q6-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 12){
        if(count<3){
            var btn = document.getElementById('q6-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 13){
        if(count<3){
            var btn = document.getElementById('q7-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 14){
        if(count<3){
            var btn = document.getElementById('q7-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 15){
        if(count<3){
            var btn = document.getElementById('q8-a1');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }else if(num == 16){
        if(count<3){
            var btn = document.getElementById('q8-a2');
            btn.classList.add('btn-secondary');
            btn.classList.remove('btn-primary');
            btn.setAttribute( "onClick", "" );
            count++;
        }
    }
    if(count < 3){
        voting.push(num);
    }
}

function submit_vote(){
    for(i=0; i<=count; i++){
        var num = voting[i]
        if(num == 1 && num == 3){
            var ref = dbRef.ref("/room/player/1/point");
        }else if(num == 5 && num == 14){
            var ref = dbRef.ref("/room/player/2/point");
        }else if(num == 6 && num == 7){
            var ref = dbRef.ref("/room/player/3/point");
        }else if(num == 9 && num == 15){
            var ref = dbRef.ref("/room/player/4/point");
        }else if(num == 2 && num == 8){
            var ref = dbRef.ref("/room/player/5/point");
        }else if(num == 10 && num == 12){
            var ref = dbRef.ref("/room/player/6/point");
        }else if(num == 4 && num == 11){
            var ref = dbRef.ref("/room/player/7/point");
        }else if(num == 13 && num == 16){
            var ref = dbRef.ref("/room/player/8/point");
        }
        ref.transaction(function (current_value) { 
            return (current_value || 0) + 100;
        })
    }
    check = 1;
}

function next_page(){
    var form = document.getElementById('form');
    form.submit();
}