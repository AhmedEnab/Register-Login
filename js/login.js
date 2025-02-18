let Email = document.querySelector("#email");
let Password = document.querySelector("#password");
let message = document.querySelector(".message");
let regBtn = document.querySelector(".reg");
let logBtn = document.querySelector(".log");

let allUsers;

if (localStorage.getItem("users") != null) {
  allUsers = JSON.parse(localStorage.getItem("users"));
} else {
  allUsers = [];
}

function getData() {
  if (Validation() == true) {
    location.href = "../index.html";
  } else {
    message.textContent = Validation();
  }
}




function Validation() {
  if (!Email.value) {
    return "Please Enter Email !";
  } else if (!Email.value.includes("@")) {
    return " Please Enter Valid Email !";
  } else if (passwordValidation() != true) {
    return passwordValidation();
  } else if (isEmailExist() == false) {
    return "Email Not Found ";
  } else if (isEmailExist() == "exist") {
    return "Password Not Correct ";
  } else {
    return true;
  }
}


function isEmailExist() {        //  Email Validation
  flag = false;
  allUsers.forEach(user => {
    if(Email.value == user['email']){
      flag = "exist";
    }
    if (Email.value == user['email'] && Password.value == user['password']) {
      flag = true;
    }
  });
  return flag;
}

function passwordValidation() {
  if (!Password.value) {                   // Password Validation
    return "Please Enter Email Password !";
  } else {
    return true;
  }
}


//-------------------------------------- buttons  ---------------------------->

logBtn.addEventListener("click", function () {
  getData()
});

regBtn.addEventListener("click", function () {
  location.href = "../register.html";
});

