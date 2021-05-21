import 'firebaseui/dist/firebaseui.css';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import userProfileTmpl from '../tmpl/userProfileTmpl.hbs';
import { signInBtnRef, authContaineRef, authWrapperRef } from './refs';

const firebaseConfig = {
  apiKey: "AIzaSyDWzddomj4Sa8oikOHu3F1SB41Hl4wPnag",
  authDomain: "reg-sign-in-form.firebaseapp.com",
  projectId: "reg-sign-in-form",
  storageBucket: "reg-sign-in-form.appspot.com",
  messagingSenderId: "677196047665",
  appId: "1:677196047665:web:d2ed7d5648167228d0bc10",
  measurementId: "G-66K74H5NCF"
};

firebase.initializeApp(firebaseConfig);

 const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {

  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
   firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  
  signInFlow: 'popup',
};

ui.start('#firebaseui-auth-container', uiConfig);





const db = firebase.database();

const docRef = db.ref('clients').push();
console.log(docRef);

async function  newClient(newClinet) {
           try {
               const addClient = await firebase.database().ref('clients').push(newClinet)
               console.log(addClient)
           } catch (error) {
               console.log(error.message)
               throw error
           }
       }

function dropdown(element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active');

    if (element.classList.contains('active')) {
      signInBtnRef.addEventListener('click', function (e) {
        closeTargetElm(e.target, element);
      });
    } else {
      signInBtnRef.removeEventListener('click', function (e) {
        closeTargetElm(e.target, element);
      });
    }
  });
}

function closeTargetElm(target, element) {
  if (target !== element) {
    element.classList.remove('active');
  }
}
//const signInBtnRef = document.querySelector('.sign-in-button');
dropdown(signInBtnRef);

//authContaineRef.insertAdjacentHTML('afterend', userProfileTmpl());

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        // console.log(user);
        //signInBtnRef.removeEventListener('click', dropdown);
        //dropdown();
        //signInBtnRef.style.display = 'none';
        signInBtnRef.innerText = "Sign out";
        signInBtnRef.addEventListener('click', signOutUser)
        authContaineRef.style.display = 'none';
      
    }
});


function signOutUser() {
  console.log('sign out');
  firebase
    .auth()
    .signOut()
    .then(() => {
      signInBtnRef.style.display = 'flex';
      authContaineRef.style.display = 'block';
      signInBtnRef.addEventListener('click', dropdown);
      location.reload();
    })
    //   .catch(error =>
    //       toastr.error(error.message));
}

