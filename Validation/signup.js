var username = document.form.name;
var email = document.form.email;
var password = document.form.password;
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var name_error = document.getElementById('name_error');
var mail_check = /^[A-Za-z0-9\.]+@[a-z]+\.[a-z]+$/;
var name_check = /^[A-Za-z0-9]+$/;

username.addEventListener('textInput', name_Verify);
email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validated() {
    if (username.value.length < 5 || !username.value.match(name_check)) {
        username.style.border = "1px solid red";
        name_error.style.display = "block";
        username.focus();
        return false;
    }
    if (email.value.length == 0 || !email.value.match(mail_check)) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 8) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }

}
function name_Verify() {
    if (username.value.length >= 4 && username.value.match(name_check)) {
        username.style.border = "1px solid silver";
        name_error.style.display = "none";
        return true;
    }
}

function email_Verify() {
    if (email.value.match(mail_check)) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify() {
    if (password.value.length >= 7) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}