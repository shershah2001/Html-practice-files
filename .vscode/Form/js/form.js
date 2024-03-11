const username = document.querySelector('#username');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

// add event 



const submitHandler = (event) => {
    event.preventDefault();
    validation()
}
function isEmail(emailVal) {
    const atSymbol = emailVal.indexOf('@');
    if (atSymbol <= 1) {
        return false
    }
    const dot = emailVal.lastIndexOf('.');
    if (dot < atSymbol + 2) {
        return false;
    }
    if (dot === emailVal.length - 1) {
        return false
    }
    return true
}
function isValidation(value) {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasSpecialChar = false;
    for (let i = 0; i < value.length; i++) {
        const char = value.charAt(i);
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        } else if ("!@#$%^&*()_+-=[]{};':,.<>?".includes(char)) {
            hasSpecialChar = true;
        }
    }
    return hasUpperCase && hasLowerCase && hasSpecialChar
}
function validation() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    if (usernameVal === "") {
        setErrorMsg(username, 'username can not be blank')
    } else if (!isValidation(usernameVal)) {
        setErrorMsg(username, 'username must contain atleast one upper,lower and special char')
    } else if (usernameVal.length <= 3) {
        setErrorMsg(username, 'username min 4 char')
    } else {
        setSuccessMsg(username)
    }

    if (emailVal === "") {
        setErrorMsg(email, 'email can not be blank')
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid Email')
    } else {
        setSuccessMsg(email)
    }

    if (numberVal === '') {
        setErrorMsg(number, 'Number can not be blank')
    } else if (isNaN(numberVal)) {
        setErrorMsg(number, 'Not a number')
    } else if (!(/^([6-9]\d{9})$/).test(numberVal)) {
        setErrorMsg(number, 'Invalid phone number')
    } else if (numberVal.length !== 10) {
        setErrorMsg(number, 'number must be 10 digit')
    } else {
        setSuccessMsg(number, 'valid number')
    }

    if (passwordVal === '') {
        setErrorMsg(password, '6 digit-char require')
    } else if (!isValidation(passwordVal)) {
        setErrorMsg(password, 'password must contain atleast one upper,lower,specail char')
    } else if (passwordVal.length <= 6) {
        setErrorMsg(passwordVal, 'password must have atleast 8 char')
    } else {
        setSuccessMsg(passwordVal)
    }
    if (confirmPasswordVal === '') {
        setErrorMsg(confirmPassword, 'this field required')
    } else if (confirmPasswordVal !== passwordVal) {
        setErrorMsg(confirmPassword, 'password does not match')
    }

}
function setErrorMsg(input, error) {
    const formControl = input.parentElement;
    const smallErrMgs = formControl.querySelector('small')
    formControl.className = 'form-div error'
    smallErrMgs.innerText = error;

}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-div success'
}

const passWordshowhide = (id, fontAwesome_id) => {
    const passwordField = document.querySelector(`#${id}`);
    const fontAwesome = document.querySelector(`#${fontAwesome_id}`);
    console.log(passwordField,fontAwesome)
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        fontAwesome.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        passwordField.type = 'password';
        fontAwesome.classList.replace('fa-eye', 'fa-eye-slash');
    }
}