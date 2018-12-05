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

function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex === -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}

function deleteUser() {
    var userinfo = getSelectedText('usernickname');
    var usernickiname = userinfo.split(' : ')[0];
    var uid = userinfo.split(' : ')[1];
    var ref_del = dbRef.ref("user"+"/" + uid);
    ref_del.remove().then(function () {
        console.log("Success delete " + usernickiname);
        location.reload();
    }).catch(function (error) {
        console.log("Failed to delete " + usernickiname);
    })
}

