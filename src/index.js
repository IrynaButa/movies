import './styles.scss';

import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';
// import 'firebase/messaging';
const refs = {
    form: document.querySelector(".form"),
  signupBox: document.getElementById("signup"),
      loginBox:document.getElementById("login"),
       forgetBox:document.querySelector(".forgot"),
    realNameTab:document.getElementById("realname"),
    loginTab: document.getElementById("loginname"),
    emailTab: document.getElementById("email"),
passwordTab:document.getElementById("passw"),     
userEmailTab:document.getElementById("useremail"),
userPasswordTab:document.getElementById("userpassw"),
    btnSignUp: document.querySelector(".btn-su"),
btnLogin: document.querySelector(".btn-l")
}
//refs.form.addEventListener('submit', onRegister);


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

refs.btnSignUp.addEventListener('submit', onRegister);
//refs.btnLogin.addEventListener('submit', onLogin);

async function onRegister(email, password) {
    try {
        const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(data.user.uid)
    } catch (error) {
        console.log(error.message)
        throw error
    }
};





// const emailArray=[];
// const passwordArray = [];
 
//         function onRegister(event){
//             event.preventDefault();

// if (refs.realNameTab.value == ""){
               
//                 alert("Real name required.");
//                 return ;
// }
//             else if (refs.loginTab.value == ""){
               
//                 alert("Login required.");
//                 return ;
//             }
//             else if (refs.emailTab.value == ""){
               
//                 alert("Email required.");
//                 return ;
//             }
//             else if (refs.passwordTab.value == "") {
                
//                 alert("Password required.");
//                 return ;
//             }
            
//             else if(emailArray.indexOf(refs.emailTab.value) == -1){
//                 emailArray.push(refs.emailTab.value);
//                 passwordArray.push(refs.passwordTab.value);


//                 alert(refs.emailTab.value + "  Thanks for registration. \nTry to login Now");

//                 refs.emailTab.value ="";
//                 refs.passwordTab.value="";
               
//             }
//             else{
//                 alert(refs.emailTab.value + " is already register.");
//                 return ;
//             }

             
//         }
//         function onLogin(event){
//             event.preventDefault();

//             const i = emailArray.indexOf(refs.emailTab.value);

//             if(emailArray.indexOf(refs.emailTab.value) === -1){
//                 if (refs.emailTab.value = "") {
//                     alert("Email required.");
//                     return ;
//                 }
//                 alert("Email does not exist.");
//                 return ;
//             }
//             else if(passwordArray[i] !== refs.passwordTab.value){
//                 if (refs.passwordTab.value = ""){
//                     alert("Password required.");
//                     return ;
//                 }
//                 alert("Password does not match.");
//                 return ;
//             }
//             else {
//                 alert(refs.emailTab.value + " yor are login Now \n welcome to our website.");
//  refs.userEmailTab.value ="";
//                 refs.userPasswordTab.value="";
        
//                 return ;
//             }

//         }
