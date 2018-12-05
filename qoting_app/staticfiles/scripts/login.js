
  var config = {
    apiKey: "AIzaSyAioE3uCJP-KCBuA7d0JOCzR2u13qupGkY",
    authDomain: "qoting-1ca86.firebaseapp.com",
    databaseURL: "https://qoting-1ca86.firebaseio.com",
    projectId: "qoting-1ca86",
    storageBucket: "qoting-1ca86.appspot.com",
    messagingSenderId: "241026992000"
  };
  firebase.initializeApp(config);

  const auth = firebase.auth();

  firebase.auth().onAuthStateChanged()

  function gg_login(){
    const provider = new firebase.auth.GoogleAuthProvider();
    const promise = firebase.auth().signInWithPopup(provider);
    promise.then(function(result) {
      
      var token = result.credential.idToken;
      var accesstoken = result.credential.accessToken;
      var name = result.user.displayName;
      var uid = result.user.uid;
      console.log(result);
      console.log("Success!!"); 
      
      var form = document.getElementById("toWelcome"); 
      var idtoken = document.getElementById("token"); 
      var username = document.getElementById("name");
      var unqiueid = document.getElementById("uid");
      idtoken.value = token;
      username.value = name;
      unqiueid.value = uid;
      form.submit();
      // ...
    }).catch(function(error) {
      console.log(error);
      console.log(":(");
            // ...
    });
  }

  function fb_login(){
    const provider = new firebase.auth.FacebookAuthProvider();
    const promise = firebasse.auth().signInWithPopup(provider);
    promise.ther(function(result) {

      var token = result.credential.idToken;
      var accesstoken = result.credential.accessToken;
      var name = result.user.displayName;
      var uid = result.user.uid;
      console.log(result);
      console.log("Success!!");

      var form = document.getElementById("toWelcome"); 
      var idtoken = document.getElementById("token"); 
      var username = document.getElementById("name");
      var unqiueid = document.getElementById("uid");
      idtoken.value = token;
      username.value = name;
      unqiueid.value = uid;
      form.submit();
      //...
    }).catch(function(error) {
      console.log(error);
      console.log(":(");
        //...
    });
  }
  
