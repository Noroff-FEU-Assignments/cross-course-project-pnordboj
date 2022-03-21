// Input
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const newPassword = document.querySelector("#newPassword");

// Error Text
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");

const html = document.querySelector(".form_page");
const button = document.querySelector("#change");

function form() {
    event.preventDefault();
    
    if (requiredCheck(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (requiredCheck(username.value, 6) === true) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
    }

    if (checkEmail(email.value, 0) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (requiredCheck(password.value, 8) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }
}

button.onclick = function buttonTest() {
    form();
}

function requiredCheck(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(email);
    return match;
}