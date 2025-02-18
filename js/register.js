let Name = document.querySelector(".name");
let Email = document.querySelector(".email");
let Password = document.querySelector("#password");
let conPassword = document.querySelector("#conPassword");
let message = document.querySelector(".message");
let signBtn = document.querySelector(".sign-btn");
let logBtn = document.querySelector(".log");
let allUsers;

if (localStorage.getItem("users") != null) {
    allUsers = JSON.parse(localStorage.getItem("users"));
} else {
    allUsers = [];
}


function getData() {
    if (Validation() == true) {
        let user = {
            name: Name.value,
            email: Email.value,
            password: Password.value
        }
        allUsers.push(user);
        localStorage.setItem("users", JSON.stringify(allUsers));
        clearData();
        message.innerHTML = "<p class=' text-success'>Account Added Successfully</p>";
    } else {
        message.textContent = Validation();
    }
}

//-------------------------------------- Validation  ---------------------------->

function Validation() {
    if (nameValidation() != true) {
        return nameValidation();
    } else if (emailValidation() != true) {
        return emailValidation();
    } else {
        return true;
    }
}
function nameValidation() {
    if (!Name.value) {                               // Name Validation
        return "Please Enter Your Name !";
    } else {
        return true;
    }
}


function emailValidation() {                        // Email Validation
    isEmailExist();
    if (!Email.value) {
        return "Please Enter Email !";
    } else if (!Email.value.includes("@")) {
        return " Please Enter Valid Email !";
    } else if (passwordValidation() != true) {
        return passwordValidation();
    } else if (passwordConfirmationValidation() != true) {
        return passwordConfirmationValidation();
    } else if (isEmailExist()) {
        return " This Account Already Exist !";
    } else {
        return true;
    }
}

function isEmailExist() {
    flag = false;
    allUsers.forEach(user => {
        if (Email.value == user['email']) 
            flag = true;
    });
    return flag;
}


function passwordValidation() {
    if (!Password.value) {                   // Password Validation
        return "Please Enter Email Password !";
    } else if (Password.value.length < 6) {
        return "Please Password Must Not Be Less Than 6 Char !";
    } else {
        return true;
    }
}
function passwordConfirmationValidation() {
    if (!Password.value) {                   // Password Confirmation Validation
        return "Please Enter Email Password !";
    } else if (Password.value !== conPassword.value) {
        return "Password Confirmation Is Not Correct !";
    } else {
        return true;
    }
}
//-------------------------------------- Clear Form  ---------------------------->

function clearData() {
    Name.value = "";
    Email.value = "";
    Password.value = "";
    conPassword.value = "";
}
//-------------------------------------- buttons  ---------------------------->
signBtn.addEventListener("click", function () {
    getData();
});
logBtn.addEventListener("click", function () {
    location.href = "../login.html";

});