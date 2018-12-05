
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
    const provider = new firebase.auth.FacebookAuthProvider();
    const promise = firebase.auth().signInWithPopup(provider);
    promise.then(function(result) {
      console.log(result);
      // ...
    }).catch(function(error) {
      console.log(error);
            // ...
    });
  }

  document.getElementById('facebookSignin').addEventListener( 'click', e=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    const promise = firebase.auth().signInWithPopup(provider)
    promise.then(function(result) {
      console.log(result)
      // ...
    }).catch(function(error) {
            // ...
    });
  })
