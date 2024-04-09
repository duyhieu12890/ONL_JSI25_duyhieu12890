const signUpInput = document.getElementsByClassName('signUp');
const creAccoptionLabel = document.getElementsByClassName('advanLogin')[0];
const accOption = document.getElementsByClassName('acc')[0];
// const inputLabel1 = document.getElementsByClassName('input-label')[1];
let dd = false;
document.getElementById('signUp').onclick = function() {
    if (dd == false) {
        signUp();
    } else if (dd == true) {
        login();
    }
}
document.getElementById('btn').onclick = function() {
    if (dd == false) {
        checkDataLogin();
        // console.log(dd);
    } else if (dd == true) {
        checkDataSignIn();
        // console.log(dd);
    }
}

function signUp() {
    // signUpInput[0].style.display = 'block';
    // signUpInput[1].style.display = 'block';
    // signUpInput[2].style.display = 'block';
    creAccoptionLabel.innerText = 'Have account! ';
    accOption.innerText = 'Login an account';
    document.getElementById('signUp-display-pass').style.display = 'block';
    dd = true;
    // inputLabel1.innerText = 'Password';
}

function login() {
    creAccoptionLabel.innerText = "Don't have account! ";
    // signUpInput[0].style.display = 'none';
    // signUpInput[1].style.display = 'none';
    // signUpInput[2].style.display = 'none';
    document.getElementById('signUp-display-pass').style.display = 'none';
    accOption.innerText = 'Create an account';
    dd = false;
    // inputLabel1.innerText = 'Email or username';
}

// class userSignUp {
//     fullName;
//     userName;
//     email;
//     password;
//     constructor(nameInput, userInput, emailInput, passInput) {
//         this.userName = userInput;
//         this.fullName = nameInput;
//         this.email = emailInput;
//         this.password = passInput;
//     };
//     submit() {
//         const data = [{
//             'user': this.userName,
//             'pass': this.password,
//             'email': this.email,
//             'password': this.password,
//         }];
//         return data;
//         // localStorage.setItem('user', data);
//     };
// }
// class userLogin {
//     nickNameOrEmail;
//     pass;
//     constructor(nickInput, passInput) {
//         this.nickNameOrEmail = nickInput;
//         this.pass = passInput;
//     }
//     submit() {
//         const data = [{
//             'user': this.nickNameOrEmail,
//             'pass': this.pass,
//         }];
//         return data;
//     }
// }

function checkDataSignIn() {
    const checkEmail = this.document.getElementById('email').value;
    const checkPass = this.document.getElementById('pass').value;
    const checkComfilmPass = this.document.getElementById('comfilmPass').value;
    // let atSymbol = checkEmail.indexOf("@");
    // let dotSymbol = checkEmail.lastIndexOf(".");
    // let spaceSymbol = checkEmail.indexOf(" ");
    const lowerCaseLetter = '\[a-z]\g';
    const upperCaseLetter = '\[A-Z]\g';
    const specialCaseLetter = '^(?=.*\d)';
    if (checkEmail == '') {
        alert('Email Sign up must fill out!');
    } else if (checkPass == '') {
        alert('Pass Word must fill out!');
    } else if (checkComfilmPass == '') {
        alert('Comfilm Password must fill out!');
    } else if (checkPass.length < 8) {
        alert('You Password must be at least 8 characters');
    } else if (checkPass.match(lowerCaseLetter)) {
        alert('You password must contain a lowerCase');
    } else if (!checkPass.match(upperCaseLetter) || !checkPass.match(specialCaseLetter)) {
        alert('You password must contain a UpperCase or special characters');
    } else if (checkComfilmPass !== checkPass) {
        alert("Comfilm Password doesn't match with password sign up");
    } else if (document.getElementById('checkbox-term').checked == false) {
        alert('Please indicate that you have read and accept agreements in tickbox');
    } else {
        signUpFireBase(checkEmail,checkPass)
        // console.log(new this.checkFullName, new this.checkUserName, this.checkEmail, this.checkPass);
        // console.log(new userSignUp(this.checkFullName, this.checkUserName, this.checkEmail, this.checkPass));
    }
}

function checkDataLogin() {
    var checkEmail = document.getElementById('email').value;
    var checkPass = document.getElementById('pass').value;
    // console.log(dd);
    if (checkEmail == "") {
        alert('Please put Email or username into box input');
    } else if (checkPass == "") {
        alert('Please put password into box input');
    } else if (document.getElementById('checkbox-term').checked !== true) {
        alert('Please indicate that you have read and accept agreements in tickbox');
    } else {
        // console.log(new userLogin(this.checkEmail, this.checkPass));
        loginFireBase(checkEmail, checkPass);
    };
}

function checkBoxinGnu() {
    if (localStorage.isReaded == 'true') {
        document.getElementById('checkbox-term').checked = true;
    } else {
        document.getElementById('checkbox-term').checked = false;
    }
}

