function CheckBrowser() { //Check Brower can support HTML5
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

// function saveAccount() { //Create Account
//     var fullName = document.getElementById('fullName').value;
//     var userName = document.getElementById('userName').value;
//     var email = document.getElementById('email').value;
//     var pass = document.getElementById('pass').value;
//     localStorage.setItem('fullName', fullName);
//     localStorage.setItem('userName', userName);
//     localStorage.setItem('email', email);
//     localStorage.setItem('pass', md5(pass));
//     localStorage.setItem('status', true);
//     // window.location.href = 'home.html';
//     alert('Create account sucess!');
//     // pass == md5(pass);
//     localStorage.setItem('pass')
// }

// function loginAccount() { //Login Account
//     var userName = document.getElementById('email').value;
//     var pass = document.getElementById('pass').value;
//     if (userName == localStorage.getItem('userName') ||
//         localStorage.getItem('status') ||
//         userName == localStorage.getItem('email') &&
//         md5(pass) == localStorage.getItem('pass')) {
//         localStorage.status = true;
//         alert('Login Sucess!');
//         // window.location.href = 'home.html';
//     } else {
//         alert('UserName and Password error or not match!');
//         localStorage.status = false;
//     }
// }
// const displayNameUser = document.getElementById('account');
// const displayUserIcon = document.getElementById('iconUser');

// function checkStatus() { //Change Text when Login of Logout
//     // } else
//     if (localStorage.getItem('status') == 'undefined' ||
//         localStorage.getItem('status') == 'undefined' ||
//         localStorage.getItem('userName') == 'undefined' ||
//         localStorage.getItem('email') == 'undefined' ||
//         localStorage.getItem('pass') == 'undefined') {
//         localStorage.setItem('status', false);
//         console.log('checked account 2');
//         return false;
//     } else if (localStorage.getItem('status') == 'true') {
//         console.log('checked account 1');
//         return true;
//     } else if (localStorage.getItem('status') == 'false') {
//         console.log('checked account 0');
//         return false;
//     };
// }

// function logOutAccount() { //Logout Account
//     localStorage.status = false;
//     window.location.href = 'login.html';
//     // window.location.reload;
//     checkStatus();
// }

// function checkLogin() {
//     if (localStorage.status = true) {
//         document.getElementsByClassName('fix')[0].style.display = 'none';
//     }
//     checkStatus();
// }
// if (localStorage.status == undefined) {
//     localStorage.setItem('status', false);
// };
// const form = document.getElementById('form');
// console.log(form);
// console.log(form[0]);

// function signUpFireBase(email, pass){
//     createUserWithEmailAndPassword(auth, email, pass)
//     .then((credentials)=>{
//         console.log(credentials);
//     })
//     .catch((error) => {
//         alert(error.message);
//         console.log(error.code);
//         console.log(error.message);
//     })
// };


// document.getElementById('signUp').onclick = function() {
//     if (dd == false) {
//         signUp();
//     } else if (dd == true) {
//         login();
//     }
// }