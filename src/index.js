import './styles.scss';


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
refs.btnSignUp.addEventListener('submit', onRegister);
refs.btnLogin.addEventListener('submit', onLogin);

const emailArray=[];
const passwordArray = [];
 
        function onRegister(event){
            event.preventDefault();

if (refs.realNameTab.value == ""){
               
                alert("Real name required.");
                return ;
}
            else if (refs.loginTab.value == ""){
               
                alert("Login required.");
                return ;
            }
            else if (refs.emailTab.value == ""){
               
                alert("Email required.");
                return ;
            }
            else if (refs.passwordTab.value == "") {
                
                alert("Password required.");
                return ;
            }
            
            else if(emailArray.indexOf(refs.emailTab.value) == -1){
                emailArray.push(refs.emailTab.value);
                passwordArray.push(refs.passwordTab.value);


                alert(refs.emailTab.value + "  Thanks for registration. \nTry to login Now");

                refs.emailTab.value ="";
                refs.passwordTab.value="";
               
            }
            else{
                alert(refs.emailTab.value + " is already register.");
                return ;
            }

             
        }
        function onLogin(event){
            event.preventDefault();

            const i = emailArray.indexOf(refs.emailTab.value);

            if(emailArray.indexOf(refs.emailTab.value) === -1){
                if (refs.emailTab.value = "") {
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] !== refs.passwordTab.value){
                if (refs.passwordTab.value = ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(refs.emailTab.value + " yor are login Now \n welcome to our website.");
 refs.userEmailTab.value ="";
                refs.userPasswordTab.value="";
        
                return ;
            }

        }
