'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputName = form.querySelector('#name');
const inputEmail = form.querySelector('#email');
const inputMessage = form.querySelector('#message');


//config your firebase push
const config = {
    apiKey: "AIzaSyCJG4-iOR6mDGY8eS_tqlo8BhKyisQTb5g",
    authDomain: "lotuspetalhome.firebaseapp.com",
    databaseURL: "https://lotuspetalhome-default-rtdb.firebaseio.com",
    projectId: "lotuspetalhome",
    storageBucket: "lotuspetalhome.appspot.com",
    messagingSenderId: "606888501699",
    appId: "1:606888501699:web:3c2d8b8a3df21958539d76",
    measurementId: "G-1K860MEPH7"
  };



//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }