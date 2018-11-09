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
    showAllUser();
    // showallQuestion();
};

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