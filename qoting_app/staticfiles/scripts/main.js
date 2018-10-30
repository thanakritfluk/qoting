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

function show() {
    let field = $('#password');
    field.attr('type') === 'text' ? field.attr('type', 'password') : field.attr('type', 'text');
}

function saveOnClick() {
    var firebaseRef = firebase.database().ref("room");
    firebaseRef.child("1").child("localid").set("localid");
}

window.onload = function () {
    showAllUser();
    showallQuestion();
};

function showAllUser() {
    var firebaseRef = firebase.database().ref("user").orderByKey();
    firebaseRef.once('value').then(function (dataSnapshot) {
        dataSnapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            // console.log(childData)
            console.log(childKey)
        });
        // console.log(dataSnapshot.val());
    });
}

function showallQuestion() {
    var firebaseRef = firebase.database().ref("question");
    firebaseRef.once('value').then(function (dataSnapshot) {
        dataSnapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childData)
            // console.log(dataSnapshot.val());
        });
    });
}

function insertQuestion(question) {
    var firebaseRef = firebase.database().ref("question");
    firebaseRef.push({
        detail: question
    })
}

function delectQuestion(question) {
    var firebaseRef = firebase.database().ref("question" + "/" + question)
    firebaseRef.remove().then(function () {
        console.log("Remove succeeded")
    }).catch(function (error) {
        console.log("Remove failed" + error.message)
    })
}

function updateQuestion(question, newquestion) {
    var firebaseRef = firebase.database().ref("question" + "/" + question)
    firebaseRef.update({detail: newquestion}).then(function () {
        console.log("Success!!")
    }).catch(function (error) {
        console.log(error.message)
    })

}

